import express from 'express';
import cors from "cors";
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
const routes = require('./routes/index')

app.use('/api', routes)
app.use('/', (req, res) => {
   res.json({
      message: "Welcome To Unofficial Rajaongkir Starter Api",
      createdby: "raflidev"
   })
})


app.listen(port, () => {
   console.log(`your app is running in http://localhost:${port}`);
})