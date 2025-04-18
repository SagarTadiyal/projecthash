import express from "express";
import Notification from "../models/notificationModel.js"; 
import adminAuth from "../adminAuth.js";

const router = express.Router(); 

// Admin-Only: POST new notification
router.post("/notifications", adminAuth, async (req, res) => {
  try {
    const { title, content, isPinned } = req.body;
    const notification = new Notification({ title, content, isPinned });
    await notification.save();
    res.status(201).json({ message: "Notification created successfully." });
  } catch (err) {
    console.error("Error posting notification:", err);
    res.status(500).json({ error: "Failed to post notification." });
  }
});

// Admin-Only: Edit a notification
router.put("/notifications/:id", adminAuth, async (req, res) => {
  const { id } = req.params;
  const { title, content, isPinned } = req.body;

  try {
    const updated = await Notification.findByIdAndUpdate(
      id,
      { title, content, isPinned },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Notification not found." });

    res.json({ message: "Notification updated successfully.", notification: updated });
  } catch (err) {
    console.error("Error updating notification:", err);
    res.status(500).json({ error: "Failed to update notification." });
  }
});

// Admin-Only: Delete a notification
router.delete("/notifications/:id", adminAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Notification.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Notification not found." });

    res.json({ message: "Notification deleted successfully." });
  } catch (err) {
    console.error("Error deleting notification:", err);
    res.status(500).json({ error: "Failed to delete notification." });
  }
});


// Public: GET all notifications
router.get("/notifications", async (req, res) => {

  try {
    
    const notifications = await Notification.find().sort({
      isPinned: -1,
      createdAt: -1,
    });
    res.json(notifications);
  } catch (err) {
    console.error("Error fetching notifications:", err);
    res.status(500).json({ error: "Failed to fetch notifications." });
  }
});

export default router;
