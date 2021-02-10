import { validateUser } from "../util/helper.js";
import Auth from "../models/authModel.js";

/*
  C in CRUD
*/
const createPassword = async (req, res, next) => {
  const password = req.body.password;
  const newAuth = new Auth({ password: password });
  try {
    await newAuth.save();
    res.status(201).json(newAuth);
  } catch (err) {
    res.status(409).json({ message: error.message });
  }
};

/*
  R in CRUD
*/
const getPassword = async (req, res, next) => {
  const password = req.body.password;
  try {
    const authData = await Auth.find({ password: password });
    if (authData.length === 0) {
      res.json({ validated: false });
    } else {
      res.json({ validated: true });
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export { createPassword, getPassword };
