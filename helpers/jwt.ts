const dotenv = require('dotenv').config();
import jwt from 'jsonwebtoken';

export const generateToken = (uid: string, firstname: string) : Promise<string> => {
    
        return new Promise((resolve, reject) => {
    
            const payload = { uid, firstname };
    
            jwt.sign(payload, process.env.SECRET_JWT_SEED!, {
                expiresIn: '2h'
            }, (err, token) => {
                if (err) {
                    console.error(err);
                    reject('No se pudo generar el token');
                } else {
                    resolve(token!);
                }
            });
    
        });
};