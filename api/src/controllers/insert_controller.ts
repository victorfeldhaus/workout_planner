import { Request, Response } from "express"
import { insertUser } from "./insert_user"

export const insertController = async (req: Request, res: Response) => {
    const { database, clientId, nomeUsuarioCreate } = req.body

    await insertUser(nomeUsuarioCreate, clientId, database)

    console.log(database, clientId)

    res.status(200).send({message: `${database} - ${clientId}`})
}