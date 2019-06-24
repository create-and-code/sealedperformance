import http from "./httpService";
import { apiUrl } from "../config.json";

export function getCategories() {
  return http.get(apiUrl + "/categories");
}

export async function getCategory(categoryName) {
  const { data: categories } = await getCategories();
  const category = categories.filter(
    category => category.name === categoryName
  );
  return category[0];
}
