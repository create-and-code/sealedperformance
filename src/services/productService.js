const products = [
  {
    _id: "1",
    title: "Gear Knob",
    category: { _id: "5c7e9ad88b8b11bb41d3e904", name: "Interior" },
    numberInStock: 20,
    price: 14.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "2",
    title: "Paint",
    category: { _id: "5c7e9ad88b8b11bb41d3e504", name: "Exterior" },
    numberInStock: 138,
    price: 10.99,
    desc:
      "The GT2860R is a direct replacement for the standard Nissan Skyline RB26DETT units. Each one is capable of individually supporting between 250 - 360 horsepower.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "3",
    title: "Oil Filter",
    category: { _id: "5c7e9ad88b8b11bb41d6e904", name: "Engine" },
    numberInStock: 15,
    price: 5.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "4",
    title: "Bonnet Catch",
    category: { _id: "5c7e9ad88b8b11bb41d7e904", name: "Bonnet" },
    numberInStock: 2,
    price: 9.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "5",
    title: "Steering Wheel",
    category: { _id: "5c7e9ad88b8b11b541d3e904", name: "Steering" },
    numberInStock: 10,
    price: 69.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "6",
    title: "Valve Caps",
    category: { _id: "5c7e9ad88b8b17bb41d3e904", name: "Wheels" },
    numberInStock: 67,
    price: 19.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "7",
    title: "Gear Knob",
    category: { _id: "5c7e9ad88b8b11bb41d3e904", name: "Interior" },
    numberInStock: 20,
    price: 14.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "8",
    title: "Paint",
    category: { _id: "5c7e9ad88b8b11bb41d3e504", name: "Exterior" },
    numberInStock: 138,
    price: 10.99,
    desc:
      "The GT2860R is a direct replacement for the standard Nissan Skyline RB26DETT units. Each one is capable of individually supporting between 250 - 360 horsepower.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "9",
    title: "Oil Filter",
    category: { _id: "5c7e9ad88b8b11bb41d6e904", name: "Engine" },
    numberInStock: 15,
    price: 5.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "10",
    title: "Bonnet Catch",
    category: { _id: "5c7e9ad88b8b11bb41d7e904", name: "Bonnet" },
    numberInStock: 2,
    price: 9.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "11",
    title: "Steering Wheel",
    category: { _id: "5c7e9ad88b8b11b541d3e904", name: "Steering" },
    numberInStock: 10,
    price: 69.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  },
  {
    _id: "12",
    title: "Valve Caps",
    category: { _id: "5c7e9ad88b8b17bb41d3e904", name: "Wheels" },
    numberInStock: 67,
    price: 19.99,
    desc:
      "Garrett is a world leading manufacturer of OE and aftermarket turbo chargers, reknowned for the quality, performance and reliability of their units.",
    imgs: [
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      },
      {
        original: "/images/products/washers.jpg",
        thumbnail: "/images/products/washers.jpg"
      }
    ]
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find(p => p._id === id);
}
