/* 
    *Rutas de Usuarios / Auth
    *host + /api/auth
*/
const { Router } = require('express');
import { registerUser, loginUser } from '../controllers/auth';
const router = Router();

router.post('/sign-in', loginUser);

router.post('/sign-up', registerUser);

// router.get("/renew", validateJWT, renewToken);


module.exports = router;