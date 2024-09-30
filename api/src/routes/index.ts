import { Application } from "express";
import { loginController } from "../controllers/login_controller";
import { register } from "./register";

export const routes = (app: Application) => {
    app.get('/', (req, res) => {
        res.render('index', { title: 'Minha Aplicação' });
    });


    app.get('/login', (req, res) => {
        res.render('login');
    });

    // Rota para lidar com o login
    app.post('/login', loginController);


    register(app)

    app.get('/dashboard', (req, res) => {
        res.render('dashboard', { title: 'Dashboard' });
    });
};