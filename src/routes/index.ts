import { Application } from "express";
import { insertController } from "../controllers/insert_controller";
import { getUsersController } from "../controllers/get_users_controller";
import { loginController } from "../controllers/login_controller";
import { verifyToken } from "../controllers/verify_token";
import { getDatabaseFromToken } from "../controllers/get_databae_from_token";

export const routes = (app: Application) => {
    app.post("/login", loginController)
    app.post('/get-database', verifyToken, getDatabaseFromToken);
    app.post("/insert", insertController)
    app.get("/users", getUsersController)

};