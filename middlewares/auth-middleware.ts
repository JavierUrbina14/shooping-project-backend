import { check } from 'express-validator';
import { validateFields } from './validate-fields';

export const validateNewUser = [
    check('firstname', 'firstname is required').not().isEmpty(),
    check('lastname', 'lastname is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    check('password', 'password must be at least 6 characters').isLength({ min: 6 }),
    validateFields,
];

export const validateLogin = [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    check('password', 'password must be at least 6 characters').isLength({ min: 6 }),
    validateFields,
];