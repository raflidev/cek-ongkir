import { getProvince, getProvinceById, getCity, getCityById, getCost } from "./api"

exports.province = async (req, res) => {
   const data = await getProvince();
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
}

exports.provinceID = async (req, res) => {
   const data = await getProvinceById(req.params.id);
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
}

exports.city = async (req, res) => {
   const data = await getCity();
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
}

exports.cityID = async (req, res) => {
   const data = await getCityById(req.params.id);
   if (data.rajaongkir.status.code == 200) {
      res.json(data.rajaongkir.results)
   }
}

exports.cost = async (req, res) => {
   const data = await getCost(req.params.from, req.params.to, req.params.weight, req.params.courier);
   if (data.rajaongkir.status.code == 200) {
      res.json(
         {
            destination: data.rajaongkir.destination_details,
            detail: data.rajaongkir.origin_details,
            result: data.rajaongkir.results
         })
   }
}