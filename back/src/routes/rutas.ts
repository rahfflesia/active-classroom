import {Router} from 'express'
import { getUser, signup, getUsers, createsala } from '../controllers/controladores'

const router = Router()

router.get('/', getUsers)
router.post('/login', getUser)
router.post('/signup', signup)
router.post('/crearsala', createsala)
export default router