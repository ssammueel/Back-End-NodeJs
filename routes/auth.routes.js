import express from 'express'
import { dummy, login, logout, signin } from '../controllers/auth.controllers.js'
import { tokenVerification } from '../middleware/token.verify.js'

const router = express.Router()

router.post("/logout", logout)

//login.... This is a controller function that handles the logic for the /login route.
router.post("/login", login)
router.post('/acess',tokenVerification, dummy)
router.post("/signin", signin)

export default router;