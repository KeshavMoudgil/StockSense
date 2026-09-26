
import express from 'express';
import { createProduct, getAllProducts, updateProduct } from '../../Controllers/product.js';

const productRouter = express.Router();

productRouter.route("/product/create_product").post(createProduct);
productRouter.route("/product/update_product").patch(updateProduct);

productRouter.route("/product/all_products").get(getAllProducts);

export default productRouter;