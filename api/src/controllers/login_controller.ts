import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Simulação de banco de dados para usuários
const users = [
    {
        id: 1,
        email: 'test@example.com',
        password: bcrypt.hashSync('password123', 8), // Senha hash para simulação
        clientId: 1,
        database: 'db_1',
    },
];

const JWT_SECRET = 'your_jwt_secret_key'; // Idealmente, isso deve ser armazenado em uma variável de ambiente

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Gera o token JWT com clientId e database
    const token = jwt.sign(
        { id: user.id, email: user.email, clientId: user.clientId, database: user.database },
        JWT_SECRET,
        { expiresIn: '1h' } // O token vai expirar em 1 hora
    );

    return res.status(200).json({
        message: 'Login successful',
        token: token,
    });
};
