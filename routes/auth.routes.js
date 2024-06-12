import express from 'express'
import { login, logout, signin } from '../controllers/auth.controllers.js'

const router = express.Router()

router.post("/logout", logout)

//login.... This is a controller function that handles the logic for the /login route.
router.post("/login", login)

router.post("/signin", signin)

export default router;