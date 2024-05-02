import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";


export const validateFields = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

        if( !errors.isEmpty() ){
            return res.status(400).json({
                ok: false,
                msg: 'Falló la validación de los campos',
                errors: errors.mapped()
            });
        }
    next();
}