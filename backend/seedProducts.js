require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const Product = require("./models/Product");

const products = [
  {
    id: "p1",
    name: "Fresh Organic Bananas (6 pcs)",
    image: "https://images.unsplash.com/photo-1560522361-23b37e4ad4a7",
    price: 45,
    originalPrice: 55,
    weight: "600-700g (approx.)",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    isBestDeal: true,
    category: "fruits",
  },
  {
    id: "p2",
    name: "Fresh Organic Apples (6 pcs)",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    price: 60,
    weight: "600-700g (approx.)",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p3",
    name: "Fresh Organic Carrots (1 kg)",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
    price: 40,
    weight: "1 kg",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p4",
    name: "Fresh Broccoli (500g)",
    image: "https://images.unsplash.com/photo-1582515073490-399813c2e0f3",
    price: 50,
    weight: "500g",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p5",
    name: "Fresh Strawberries (1 lb)",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    price: 120,
    weight: "1 lb",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p6",
    name: "Fresh Blueberries (1 pint)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 150,
    weight: "1 pint",
    platform: "instamart",
    deliveryTime: "11 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p7",
    name: "Fresh Oranges (6 pcs)",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8",
    price: 70,
    weight: "6 pcs",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p8",
    name: "Fresh Cucumbers (2 pcs)",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    price: 30,
    weight: "2 pcs",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p9",
    name: "Fresh Pineapples (1 pc)",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    price: 80,
    weight: "1 pc",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p10",
    name: "Fresh Mangoes (4 pcs)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 100,
    weight: "4 pcs",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "fruits",
  },
];

async function seedProducts() {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Products seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
}

seedProducts();
