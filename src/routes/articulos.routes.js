import {Router} from 'express' //para crear URLS
import {getArticulos, createNewArticulo} from '../controllers/articulos.controller.js'

const router = Router()

router.get('/articulos', getArticulos)

router.post('/articulos', createNewArticulo)

router.get('/articulos', )

router.put('/articulos', )

router.delete('/articulos', )

export default router