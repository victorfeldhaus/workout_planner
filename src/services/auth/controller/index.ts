import {Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string")
        return res.status(422).send({message: "INVALID_DATA"})


    const isValidEmail = await verifyUserEmail(email);

    if (!isValidEmail)
        return res.status(401).send({messsage: "INVALID_CREDENTIALS"});

    


}