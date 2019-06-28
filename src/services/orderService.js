import http from "./httpService";
import { apiUrl } from "../config.json";

export function getOrders(userId) {
  return http.get(apiUrl + "/orders/" + userId);
}

// export async function getOrder(orderId) {
//   const { data: products } = await getProducts();
//   return products.find(p => p._id === id);
// }
