import {getAllFechas , getFechas , updateFechas , createFechas , deletFechas , getAllNotas , getNotas , updateNotas , createNotas , deletNotas} from '../controllers/controllers.js'
import express from 'express'

export const router1 = express.Router()
export const router2 = express.Router()

router1.get('/', getAllNotas);
router1.get('/:id', getNotas);
router1.post('/', createNotas);
router1.delete('/:id', deletNotas);
router1.put('/:id', updateNotas);

router2.get('/', getAllFechas);
router2.get('/:id', getFechas);
router2.post('/', createFechas);
router2.delete('/:id', deletFechas);
router2.put('/:id', updateFechas);