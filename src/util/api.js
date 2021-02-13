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

export { getProvince, getProvinceById }