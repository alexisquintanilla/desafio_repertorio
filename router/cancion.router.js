import { Router } from "express";
import { getAllCanciones, postCanciones, deleteCancion, putCancion } from "../controllers/cancion.controller.js";

const router = Router()


router.get('/canciones', getAllCanciones)

router.post('/cancion', postCanciones)

router.delete('/cancion/:id', deleteCancion)

router.put('/cancion/:id', putCancion)


export default router