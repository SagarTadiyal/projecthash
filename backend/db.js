import mongoose from 'mongoose';

// const mongoURL = 'mongodb://localhost:27017/Networking_Project';
const mongoURL = 'mongodb+srv://Ashish:Rawat098@cluster0.5yazevo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 10000, // Increased timeout for better reliability
});

const db = mongoose.connection;

db.on('connected', () => console.log('✅ Connected to MongoDB server'));
db.on('error', (err) => console.error('❌ MongoDB connection error:', err));
db.on('disconnected', () => console.log('🔌 Disconnected from MongoDB server'));

// process.on('SIGINT', async () => {
//     await mongoose.connection.close();
//     console.log('❗ MongoDB connection closed due to app termination');
//     process.exit(0);
// });

export default db;
