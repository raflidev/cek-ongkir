import express from 'express';
import cors from "cors";
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

import { getProvince, getProvinceById, getCity, getCityById, getCost } from "./src/util/api"

app.get('/', (req, res) => {
   res.json({
      message: "Welcome To Unofficial Rajaongkir Starter Api",
      createdby: "raflidev"
   })
})

app.get('/province', async (req, res) => {
   const data = await getProvince();
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
})
app.get('/province/:id', async (req, res) => {
   const data = await getProvinceById(req.params.id);
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
})
app.get('/city', async (req, res) => {
   const data = await getCity();
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
})

app.get('/city/:id', async (req, res) => {
   const data = await getCityById(req.params.id);
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
})

app.get('/cost/:from/:to/:weight/:courier', async (req, res) => {
   const data = await getCost(req.params.from, req.params.to, req.params.weight, req.params.courier);
   if (data.rajaongkir.status.code == 200) {
      res.json(
         {
            destination: data.rajaongkir.destination_details,
            detail: data.rajaongkir.origin_details,
            result: data.rajaongkir.results
         })
   }
})

app.listen(port, () => {
   console.log(`your app is running in http://localhost:${port}`);
})