import { validateUser } from "../util/helper.js";

const loginController = (req, res, next) => {
  const passwordValidated = validateUser(req.body.password);
  if (passwordValidated) {
    res.json({ validated: true });
  } else {
    res.json({ validated: false });
  }
};

export { loginController };
