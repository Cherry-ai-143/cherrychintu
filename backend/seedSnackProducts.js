require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const SnackProduct = require("./models/SnackProduct");

const snackProducts = [
  {
    id: "s1",
    name: "Lay's Classic Potato Chips (52g)",
    image: "https://images.unsplash.com/photo-1585238342028-4a1a1a1a1a1a",
    price: 20,
    weight: "52g",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "snacks",
  },
  {
    id: "s2",
    name: "Bingo Mad Angles (70g)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 25,
    weight: "70g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "snacks",
  },
  {
    id: "s3",
    name: "Coca-Cola (500ml)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: 40,
    weight: "500ml",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "beverages",
  },
  {
    id: "s4",
    name: "Pepsi (500ml)",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    price: 38,
    weight: "500ml",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "beverages",
  },
  {
    id: "s5",
    name: "Britannia Treat Cake (75g)",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    price: 15,
    weight: "75g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "snacks",
  },
  {
    id: "s6",
    name: "Tropicana Orange Juice (1L)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 150,
    weight: "1L",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "beverages",
  },
  {
    id: "s7",
    name: "Haldiram's Bhujia (200g)",
    image: "https://images.unsplash.com/photo-1590080877777-1a1a1a1a1a1a",
    price: 90,
    weight: "200g",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "snacks",
  },
  {
    id: "s8",
    name: "Red Bull Energy Drink (250ml)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 120,
    weight: "250ml",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "beverages",
  },
  {
    id: "s9",
    name: "Uncle Chipps (150g)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: 45,
    weight: "150g",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "snacks",
  },
  {
    id: "s10",
    name: "Minute Maid Apple Juice (1L)",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    price: 140,
    weight: "1L",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "beverages",
  },
];

async function seedSnackProducts() {
  try {
    await connectDB();
    await SnackProduct.deleteMany({});
    await SnackProduct.insertMany(snackProducts);
    console.log("Snack products seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding snack products:", error);
    process.exit(1);
  }
}

seedSnackProducts();
