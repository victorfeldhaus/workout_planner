import { Application } from "express";
import { registerController } from "../services/auth/controller/register_controller";

export const register = async (app: Application) => {
    app.get('/register', (req, res) => {
        res.render('register');
    });

    app.post("/register", registerController)
};