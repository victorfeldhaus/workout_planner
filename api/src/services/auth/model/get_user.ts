import { db } from "../../../database/connection";

export const getUser = async (email: string) => {
    const user = await db.raw(`SELECT email, password FROM users WHERE email='${email}' LIMIT 1`);
    console.log(user[0])
    return user[0];
};