/* 
    *Rutas de Usuarios / Auth
    *host + /api/auth
*/
import { Router } from 'express'
import { registerUser, loginUser, renewToken } from '../controllers/auth';
import { validateLogin, validateNewUser } from '../middlewares/auth-middleware';
import { validateJWT } from '../middlewares/validateJWT';
const router = Router();

router.post('/sign-in', validateLogin, loginUser);

router.post('/sign-up', validateNewUser, registerUser);

router.get("/renew", validateJWT, renewToken);


module.exports = router;