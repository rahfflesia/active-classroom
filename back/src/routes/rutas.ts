import {Router} from 'express'
import { getUser, signup, getUsers, createsala, getformulario } from '../controllers/controladores'

const router = Router()

router.get('/', getUsers)
router.post('/login', getUser)
router.post('/signup', signup)
router.post('/crearsala', createsala)
router.get('/entrarsala/:salaid', getformulario)
export default router