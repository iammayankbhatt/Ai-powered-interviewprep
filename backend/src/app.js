const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
app.use(express.json())

const authRouter= require("./routes/auth.routes")
app.use("/api/auth",authRouter)


module.exports= app
