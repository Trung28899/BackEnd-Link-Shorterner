import { validateUser } from "../util/helper.js";
import Auth from "../models/authModel.js";

const loginController = (req, res, next) => {
  const passwordValidated = validateUser(req.body.password);
  console.log(req.body.password);
  if (passwordValidated) {
    res.json({ validated: true });
  } else {
    res.json({ validated: false });
  }
};

const createPassword = async (req, res, next) => {
  const password = req.body.password;
  console.log(password);
  const newAuth = new Auth({ password: password });
  console.log(newAuth);
  try {
    await newAuth.save();
    res.status(201).json(newAuth);
  } catch (err) {
    res.status(409).json({ message: error.message });
  }
};

export { loginController, createPassword };
