import { db } from "../database/connection";

export const userExist = async (email: string) => {
    const user = await db.raw(`SELECT email FROM users WHERE email='${email}' LIMIT 1`);
    if (user[0].length > 0)
        return true;

    return false
};
