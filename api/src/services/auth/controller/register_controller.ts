import { Request, Response } from "express"
import { userExist } from "../../../utils/user_exist";
import bcrypt from 'bcryptjs';
import { registerUser } from "../model/register_user";

export const registerController = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
    
        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string")
            res.render("register", { error: "UNPROCESSABLE_ENTITY"})
            // return res.status(422).send({message: "UNPROCESSABLE_ENTITY"})
    
        if (await userExist(email))
            res.render("register", { error: "USER_ALREADY_EXISTS"})
            // return res.status(401).send({message: "USER_ALREADY_EXISTS"});
    
        if (password.length < 8)
            res.render("register", { error: "PASSWORD_TOO_SHORT"})
            // return res.status(400).send({ message: "PASSWORD_TOO_SHORT" });

        await registerUser(name, email, bcrypt.hashSync(password, 8))
        
        // res.status(201).send({ message: "USER_CREATED"});
        res.redirect("/login")
    } catch (error) {
        console.log(error);
        res.render("register", { error: "Erro ao criar usuario"})
        // return res.status(500).send({ message: "INTERNAL_SERVER_ERROR" });
    }
}