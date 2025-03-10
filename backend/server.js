import express from "express";
import User from "./models/userModel.js";
import "./db.js"; // Import the MongoDB connection file
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import {jwtauthMW ,generateToken} from "./jwt.js";

dotenv.config();
const app = express();
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Hello guys");
});

// Signup Route - Create User
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password) {
            return res.status(400).send({ error: "All fields are required" });
        }

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: "User already exists" });
        }

        // Create and save new user
        // const newUser = new User({ username, email, password });
        // const response = await newUser.save();
        // console.log("Data saved successfully:", response);
        
        //saving hashed password

        bcrypt.hash(password,Number(process.env.SALT_ROUND), async(err,hash)=>{
            if(err){
                console.log("error hashing password");
            }
            else{
               const newUser=new User({username,email,password:hash})
               const response=await newUser.save();
               console.log("Data saved successfully:", response);
               res.status(201).send({ message: "User created successfully", user: response });
            }
        })
       
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).send({ error: "Internal server error. Try again" });
    }
});

// Users List Route
app.get("/users", async (req, res) => {
    try {
        const data = await User.find();
        if (data.length === 0) {
            console.log("No users found");
            return res.status(404).json({ message: "No users found" });
        }

        console.log("Data fetched successfully");
        res.status(200).json(data);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Internal server error. Please try again later." });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password: loginPassword } = req.body;

        // Check if user exists
        const result = await User.findOne({ email });
        if (!result) {
            return res.status(404).send({ error: "User not found" });
        }

        // Correctly get the stored hashed password
        const storedHashedPassword = result.password;

        // Correctly use await for bcrypt.compare()
        const isMatch = await bcrypt.compare(loginPassword, storedHashedPassword);

        if (!isMatch) {
            return res.status(400).send({ error: "Incorrect password" });
        }

        // Generate Token and Respond
        const payload = { id: result.id, username: result.username };
        const token = generateToken(payload);

        res.status(200).json({
            message: "Login successful",
            user: result,
            token
        });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Internal server error. Try again." });
    }
});



// Port Setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
