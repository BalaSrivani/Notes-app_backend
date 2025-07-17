import Note from "../models/note.model.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const search = async (req, res) => {
    const { user } = req.user;
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: true, message: "Search query is required" });
    }

    try {
        const matchingNotes = await Note.find({
            userId: user._id,
            $or: [
                { tags: { $regex: new RegExp(query, "i") } }
            ],
        });

        return res.json({
            error: false,
            notes: matchingNotes,
            message: "Tags matching the search query retrieved successfully",
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Internal Server Error",
        });
    }
};
