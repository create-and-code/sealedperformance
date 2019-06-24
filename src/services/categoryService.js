import http from "./httpService";
import { apiUrl } from "../config.json";

export function getCategories() {
  return http.get(apiUrl + "/categories");
}

export function getCategory(categoryName) {
  const categories = getCategories();
  return categories.filter(category => category.name === categoryName);
}
