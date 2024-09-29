import { dao } from "../database/DAO"

export const insertUser = async (email: string, clientId: number, database: string) => {
    console.log(`Usuario ${email} no cliente database ${database} id ${clientId}`)

    await dao.insert("usuarios", {
        email: email
    },
    {
        database: database
    })
}