import express from 'express'
import { config } from 'dotenv'

import Autroutes from './routes/auth.routes.js'
import { connectDb } from './database/connect.js'

config()
const PORT  = process.env.PORT || 5000
const app = express();
app.use(express.json())

// the Autroutes router on the "/api" path. It means that all routes defined within Autroutes will be prefixed with "/api"
// If you define a route /login within Autroutes, it will be accessible at /api/login.
app.use("/api",Autroutes)

app.listen(PORT,()=>{
    connectDb()
    console.log(`server is running on port ${PORT}`)
})