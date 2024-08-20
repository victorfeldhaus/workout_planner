import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret_key'; // Mesmo segredo usado na geração do token


export const verifyToken = (req: Request, res: Response, next: Function) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }

        // Adiciona as informações do token decodificado ao request
        req.body.tokenData = decoded;
        next();
    });
};