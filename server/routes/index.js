import {Router} from 'express';
import categoryRouter from './category.js';
import productRouter from './product.js';
import userRouter from './user.js';





const router = Router()


router.use("/categories", categoryRouter)
router.use("/products", productRouter)
router.use("/users", userRouter)

export default router
