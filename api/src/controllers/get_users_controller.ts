import { Request, Response } from "express"
import { dao } from "../database/DAO"

export const getUsersController = async (req: Request, res: Response) => {
    const { database, clientId } = req.body

    const rest = await dao.select({
        from: "usuarios",
    }, {
        database: database
    })

    res.status(200).send({message: rest})
}