import {Router} from 'express'
import { getUser, signup } from '../controllers/login'

const router = Router()

router.get('/', getUser)
router.post('/', signup)
export default router