import httpStatus from "http-status";
import { User } from "../models/User.model.js";
import bcrypt, { hash } from "bcrypt";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Please Provide" });
  }
  try {
    const user = await User.find({ useername });
    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "User NOT Found" });
    }
    if (bcrypt.compare(password, user.password)) {
      let token = crypto.randomBytes(20).toString("hex");
      user, token = token;
      await user.save();
      return res.status(httpStatus.OK).json({ token: token });
    }
  } catch (e) {
    return res.status(httpStatus.FOUND).json({ message: "User already exists" });
  }
};

const register = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await UserActivation.findOne({ username });
    if (existingUser) {
      return res.status(httpStatus.FOUND).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      username: username,
      password: hashedPassword
    });
    await newUser.save();
    res.status(httpStatus.CREATED).json({ message: "User Registered" });
  } catch (e) {
    res.json({ message: `Something went wrong${e}s` });
  }
};

export { login, register };
