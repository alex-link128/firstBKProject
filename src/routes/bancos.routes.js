import { Router } from "express";   
import { getBancos, createNewBanco, getBancoById, deleteBancoById, getTotalBancos, updateProductByID } from "../controllers/bancos.controller.js";

const router = Router();

router.get('/bancos', getBancos);

router.post('/bancos', createNewBanco);

router.get('/bancos/count', getTotalBancos);

router.get('/bancos/:id', getBancoById);

router.delete('/bancos/:id', deleteBancoById);

router.put('/bancos/:clave', updateProductByID);

export default router