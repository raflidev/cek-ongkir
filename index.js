import express from 'express';
import cors from "cors";
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

import { getProvince, getProvinceById } from "./src/util/api"


app.get('/api/province', async (req, res) => {
   const data = await getProvince();
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
})
app.get('/api/province/:id', async (req, res) => {
   const data = await getProvinceById(req.params.id);
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
})

app.listen(port, () => {
   console.log(`your app is running in http://localhost:${port}`);
})