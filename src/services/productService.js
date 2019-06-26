import http from "./httpService";
import { apiUrl } from "../config.json";

export function getProducts() {
  return http.get(apiUrl + "/products");
}

export async function getProduct(id) {
  const { data: products } = await getProducts();
  return products.find(p => p._id === id);
}
