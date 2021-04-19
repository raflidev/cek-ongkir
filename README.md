# cek-ongkir
API Cek Ongkir. Powered by rajaongkir

## Dokumentasi
| Endpoint                                                         | Params                                | Description              |
|------------------------------------------------------------------|---------------------------------------|--------------------------|
| /api/province                                                    | -                                     | Province                 |
| /api/province/${id}                                              | province_id                           | Detail Province          |
| /api/city                                                        | -                                     | City                     |
| /api/city/${id}                                                  | province_id                           | Detail City              |
| /api/cost/${city_id}/${city_id}/${weight}/${courier} | city_id, destination, weight, courier | Cost. (courier: jne/jnt) |
