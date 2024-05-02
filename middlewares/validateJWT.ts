const dotenv = require('dotenv').config();
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express"

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {

    //? x-token headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid }: any = jwt.verify(token, process.env.SECRET_JWT_SEED!);

        req.body.id = uid;


    } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        });

    }


    next();
}
