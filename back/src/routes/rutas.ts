import {Router} from 'express'
import { getUser, signup, getUsers } from '../controllers/controladores'

const router = Router()

router.get('/', getUsers)
router.post('/login', getUser)
router.post('/signup', signup)
export default router