import http from "./httpService";
import { apiUrl } from "../config.json";

export function getProducts() {
  return http.get(apiUrl + "/products");
}

export function getProduct(id) {
  const products = getProducts();
  return products.find(p => p._id === id);
}
