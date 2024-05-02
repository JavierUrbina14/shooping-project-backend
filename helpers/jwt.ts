const dotenv = require('dotenv').config();
import jwt from 'jsonwebtoken';

export const generateToken = (uid: string, name: string) : Promise<string> => {
    
        return new Promise((resolve, reject) => {
    
            const payload = { uid, name };
    
            jwt.sign(payload, process.env.SECRET_JWT_SEED!, {
                expiresIn: '2h'
            }, (err, token) => {
                if (err) {
                    console.error(err);
                    reject('Could not generate the token');
                } else {
                    resolve(token!);
                }
            });
    
        });
};