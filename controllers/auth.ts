import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { newUser } from '../models/User';

export const registerUser = async (req: Request, res: Response) => {

    try {
        const id = uuidv4();
        const { name, lastname, email, password } = req.body;

        console.log(req.body);

        const user = await newUser({ id, name, lastname, email, password })

        res.status(200).json({
            ok: true,
            msg: 'registerUser',
            data: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'could not register an user',
        });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'loginUser'
    })
};

