import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret_key'; // Mesmo segredo usado na geração do token

export const getDatabaseFromToken = async (req: Request, res: Response) => {
    const { email, tokenData } = req.body;


    // Verifica se o e-mail no token corresponde ao e-mail fornecido
    if (tokenData.email !== email) {
        return res.status(401).json({ message: 'Invalid email or token' });
    }

    // Retorna o database associado ao token
    return res.status(200).json({
        message: 'Database retrieved successfully',
        database: tokenData.database,
    });
};