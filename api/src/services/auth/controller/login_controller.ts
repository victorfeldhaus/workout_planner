import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import session from  "express-session";
import { getUser } from '../model/get_user';

const JWT_SECRET = 'your_jwt_secret_key';

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await getUser(email);
    console.log(user);
    if (user.length < 0) {
        return res.render('login', { error: 'Usuário ou senha incorretos.' });

    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
        return res.render('login', { error: 'Usuário ou senha incorretos.' });
    }

    // Gera o token JWT com clientId e database
    // const token = jwt.sign(
    //     { id: user.id, email: user.email, clientId: user.clientId, database: user.database },
    //     JWT_SECRET,
    //     { expiresIn: '1h' } // O token vai expirar em 1 hora
    // );

    return res.redirect('/dashboard');
};