import { log } from "console";
import express from "express";
import { routes } from "../routes";

const PORT = 3030

export const server = () => {
    console.log('DADASDASDASD')
    const app = express();
    app.use(express.json({ limit: "200mb" }));
    routes(app)

    app.listen(PORT, () => { log(`Server is running in port ${PORT}`)})
};