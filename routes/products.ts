/* 
    *Rutas de Productos / Products
    *host + /api/products
*/
import { Router } from 'express'
import { getAllProducts, getProductById } from '../controllers/products';
const router = Router();

router.get('/all-products', getAllProducts);

router.get('/:id', getProductById);

module.exports = router;