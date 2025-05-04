import {Router} from 'express'
import { getUser, signup, getUsers, createsala, getformulario, enviarresultados, recibirresultados, recibirresultadoalumno, listaparticipaciones, listasalas, usuariosparticipantes } from '../controllers/controladores'

const router = Router()

router.get('/', getUsers)
router.post('/login', getUser)
router.post('/signup', signup)
router.post('/crearsala', createsala)
router.get('/entrarsala/:salaid/:iduser', getformulario)
router.post('/enviarresultado', enviarresultados)
router.get('/obtenerresultado/:salaid', recibirresultados)
router.get('/obtenerresultadoalumno/:salaid/:alumnoid', recibirresultadoalumno)
router.get('/obtenerlistaresultados/:iduser', listaparticipaciones)
router.get('/obtenerlistasalas/:iduser', listasalas)
router.get('/obtenerlistaparticipantes/:idsala', usuariosparticipantes)
export default router