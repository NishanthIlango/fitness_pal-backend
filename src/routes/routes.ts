import { Router } from "express";
import userRouter from "./user.routes";
import helloRouter from "./hello.routes";

const router=Router();

router.use('/user',userRouter);
router.use('/hello',helloRouter);

export default router;