const knex = require('../config/db-config')
import { Request, Response } from 'express';
import { Product } from '../interfaces/IProduct';

export const getAllProducts = async (req: Request, res: Response) => {

    try {

        const products: Product[] = await knex('products').select('*');

        res.status(200).json({
            ok: true,
            msg: 'Se han obtenido todos los productos correctamente',
            data: products
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudieron obtener los productos',
        });
    }

};

export const getProductById = async (req: Request, res: Response) => {

    const { id } = req.params; 

    try {

        const product : Product = await knex('products').select('*').join('products_details', 'products_details.product_id', 'products.id').where('products.id', id).first();

        res.status(200).json({
            ok: true,
            msg: 'Se ha obtenido el producto correctamente',
            data: product
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'No se pudo obtener el producto',
        });
    }

}

