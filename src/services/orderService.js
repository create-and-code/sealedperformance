import http from "./httpService";
import { apiUrl } from "../config.json";

export function getOrders(userId) {
  return http.get(apiUrl + "/orders/", userId);
}

export function getOrder(orderId) {
  return http.get(apiUrl + "/order/", orderId);
}
