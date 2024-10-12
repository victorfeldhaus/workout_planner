import { Application } from "express";
import { loginController } from "../services/auth/controller/login_controller";
import { register } from "./register";

export const routes = (app: Application) => {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Minha Aplicação' });
    });


    // login(app)
    app.get('/login', (req, res) => {
        res.render('login');
    });

    // Rota para lidar com o loginx
    app.post('/login', loginController);


    register(app)

    app.get('/dashboard', (req, res) => {
        res.render('dashboard', { title: 'Dashboard' });
    });
};