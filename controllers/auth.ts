const knex = require('../config/db-config')
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { newUser } from '../models/User';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../interfaces/IUser';
import { generateToken } from '../helpers/jwt';

export const registerUser = async (req: Request, res: Response) => {

    try {
        const id: string = uuidv4();
        let { firstname, lastname, email, password }: User = req.body;
        const user: User = await knex('users').where('email', email).first();

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El email ya existe'
            });
        }

        const salt: string = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt);

        await newUser({ id, firstname, lastname, email, password })

        const token: string = await generateToken(id, firstname);

        res.status(201).json({
            ok: true,
            msg: 'Se registró el usuario correctamente',
            data: {
                id,
                firstname,
                lastname,
                email,
                token,
            }
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo registrar el usuario',
        });

    }
};

export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {
        let validPassword: boolean = false;

        const user: User = await knex('users').where('email', email).first();
        if (user) {
            validPassword = bcrypt.compareSync(password, user.password);
        }

        if (!user || !validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Las credenciales no son válidas'
            });
        }

        const token: string = await generateToken(user.id, user.firstname);

        res.status(200).json({
            ok: true,
            msg: 'Usuario logueado correctamente',
            data: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                token,
            }
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({
            ok: true,
            msg: 'No se pudo loguear el usuario'
        })

    }

};

export const renewToken = async (req: Request, res: Response) => {

    const { id } = req.body;

    const user : User = await knex('users').where('id', id).first();

    if(!user){
        return res.status(400).json({
            ok: false,
            msg: 'El usuario no existe'
        });
    }

    const token: string = await generateToken(user.id, user.firstname);

    res.json({
        ok: true,
        msg: 'Token renovado correctamente',
        data: {
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            token
        }
    });
}

