import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";

const middleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token);

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Unauthorised",
      });
    }

    const decoded = jwt.verify(token, "myscrectkeyfornotesapp@123");

    if (!decoded) {
      return res.status(401).json({
        status: false,
        message: "Wrong Token",
      });
    }

    const user = await userModel.findById({ _id: decoded.id });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "No User",
      });
    }

    const newUser = { name: user.name, id: user.id };

    req.user = newUser;

    next();
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};

export default middleware;
