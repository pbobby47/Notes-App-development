import express from "express";
import noteModel from "../Models/noteModel.js";
import middleware from "../middleware/middleware.js";

const router = express.Router();

const addNotes = async (req, res) => {
  try {
    let { title, description } = req.body;

    let note = await noteModel.findOne({ title });

    if (note) {
      return res.status(401).json({
        status: false,
        message: "Note Already Exists",
      });
    }

    let newNote = new noteModel({
      title,
      description,
      userId: req.user.id,
    });

    await newNote.save();

    return res.status(200).json({
      status: true,
      message: "A New Note Added Succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error in Adding Note",
    });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find();
    return res.status(200).json({
      status: true,
      message: "All notes..",
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't Retrive notes",
    });
  }
};

router.route("/add").post(middleware, addNotes);
router.route("/").get(getNotes);

export default router;
