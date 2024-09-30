import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import session from  "express-session";
import { getUser } from '../services/auth/model/get_user';

const JWT_SECRET = 'your_jwt_secret_key'; // Idealmente, isso deve ser armazenado em uma variável de ambiente

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await getUser(email);
    if (user.length === 0) {
        // return res.status(401).json({ message: 'Invalid email or password' });
        return res.render('login', { error: 'Usuário ou senha incorretos.' });

    }

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        // return res.status(401).json({ message: 'Invalid email or password' });
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