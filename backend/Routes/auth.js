import express from "express";
import userModel from "./../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (user) {
      return res.status(401).json({
        status: false,
        message: "user Already Exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10); // To Generate hash password

    let newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    return res.status(200).json({
      status: true,
      message: "A New User Added Succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "user Not Exists",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res
        .status(401)
        .json({ status: false, message: "Wrong Credentials" });
    }

    const token = jwt.sign({ id: user._id }, "myscrectkeyfornotesapp@123", {
      expiresIn: "5h",
    });

    return res.status(200).json({
      status: true,
      token,
      user: {
        name: user.name,
        email: user.email,
      },
      message: "Login Succesfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.deleteMany();
    res.json({
      status: true,
      message: "All users Deleted",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong while deleting users",
    });
  }
};

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/deleteall").delete(deleteUser);

export default router;
