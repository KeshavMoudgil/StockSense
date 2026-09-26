

import express from "express";
import { login, signup } from "../../Controllers/auth.js";
const AuthRouter = express.Router();


AuthRouter.route("/user/register").post(signup)
AuthRouter.route("/user/login").post(login)

export default AuthRouter;
