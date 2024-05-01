import { NextFunction, Request, Response } from "express"

const { response } = require("express")
const jwt = require("jsonwebtoken")

const validateJWT = ( req: Request, res: Response, next: NextFunction ) => {

    //? x-token headers
    const token = req.header("x-token")
    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: "no hay token en la peticion"
        })
    }

    try {

        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED)

        req.uid = uid
        req.name = name

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: "token no valido"
        })
    }


    next();
}

module.exports = { validateJWT }