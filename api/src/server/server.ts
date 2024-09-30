import { log } from "console";
import express from "express";
import { routes } from "../routes";
import path from "path";
import session from 'express-session';

const PORT = 3030

export const server = () => {
    const app = express();
   
    // Middleware para parsear o corpo das requisições
    app.use(express.urlencoded({ extended: true }));

    // Configuração da sessão
    app.use(session({
        secret: process.env.SESSION_SECRET || 'default_secret', // Usando variável de ambiente
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // Altere para true se estiver usando HTTPS
    }));
    
    app.use(express.json({ limit: "200mb" }));

    app.use(express.static(path.join(__dirname, '../public')));

    app.set('views', path.join(__dirname, '../views')); // Altera a pasta de views para "src/templates"

    app.set("view engine", "ejs")

    routes(app)

    app.listen(PORT, () => { log(`Server is running in port ${PORT}`)})
};