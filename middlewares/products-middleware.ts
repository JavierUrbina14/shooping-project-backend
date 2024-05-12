import { check } from 'express-validator';
import { validateFields } from './validate-fields';

export const validateNewUser = [
    check('firstname', 'El nombre es obligatorio').not().isEmpty(),
    check('lastname', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña tiene que tener un minimo de 6 carácteres').isLength({ min: 6 }),
    validateFields,
];

export const validateLogin = [
    check('email', 'El email es obligatorio').not().isEmpty().isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña tiene que tener un minimo de 6 carácteres').isLength({ min: 6 }),
    validateFields,
];