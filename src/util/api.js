import axios from 'axios'

async function getProvince() {
   const { data } = await axios.get("https://api.rajaongkir.com/starter/province", {
      params: {
         key: process.env.KEY
      }
   })
   return data
}
async function getProvinceById(id) {
   const { data } = await axios.get("https://api.rajaongkir.com/starter/province", {
      params: {
         key: process.env.KEY,
         id: id
      }
   })
   return data
}

async function getCity() {
   const { data } = await axios.get("https://api.rajaongkir.com/starter/city", {
      params: {
         key: process.env.KEY
      }
   })
   return data
}
async function getCityById(province) {
   const { data } = await axios.get("https://api.rajaongkir.com/starter/city", {
      params: {
         key: process.env.KEY,
         province: province
      }
   })
   return data
}

async function getCost(from, to, weight, courier) {
   const { data } = await axios.post("https://api.rajaongkir.com/starter/cost", {

      key: process.env.KEY,
      origin: from,
      destination: to,
      weight: parseInt(weight),
      courier: courier

   })
   return data
}

export { getProvince, getProvinceById, getCity, getCityById, getCost }