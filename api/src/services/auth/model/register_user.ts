import { db } from "../../../database/connection";

export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const res = await db.raw(`
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
        `, [name, email, password]);
        console.log(res)
    } catch (error) {
        throw new Error(`Error in create user: ${error}`)
    }
};