const categories = [
  {
    _id: "5c7e9ad88b8b11bb41d3e904",
    name: "Interior",
    image: "/images/products/washers.jpg"
  },
  {
    _id: "5c7e9ad88b8b11bb41d3e504",
    name: "Exterior",
    image: "/images/products/washers.jpg"
  },
  {
    _id: "5c7e9ad88b8b11bb41d6e904",
    name: "Engine",
    image: "/images/products/washers.jpg"
  },
  {
    _id: "5c7e9ad88b8b11bb41d7e904",
    name: "Bonnet",
    image: "/images/products/washers.jpg"
  },
  {
    _id: "5c7e9ad88b8b11b541d3e904",
    name: "Steering",
    image: "/images/products/washers.jpg"
  },
  {
    _id: "5c7e9ad88b8b17bb41d3e904",
    name: "Wheels",
    image: "/images/products/washers.jpg"
  }
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryName) {
  return categories.filter(category => category.name === categoryName);
}
