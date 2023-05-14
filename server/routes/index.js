import {Router} from 'express';
import cartRouter from './cart.js';
import categoryRouter from './category.js';
import productRouter from './product.js';
import userRouter from './user.js';






const router = Router()


router.use("/categories", categoryRouter)
router.use("/products", productRouter)
router.use("/users", userRouter)
router.use("/carts", cartRouter)

export default router
