const bcrypt = require("bcryptjs");
const userModel = require("../models/usermodel");

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Please enter an email");
    }
    if (!password) {
      throw new Error("Please enter a password");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
    } else {
      throw new Error("please check the password");
    }
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = userSignInController;
