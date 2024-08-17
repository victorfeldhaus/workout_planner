import { log } from "console";
import express from "express";

const PORT = 3333

export const server = () => {
    const app = express();

    routes(app)

    app.listen(PORT, () => { log(`Server is running in port ${PORT}`)})
};