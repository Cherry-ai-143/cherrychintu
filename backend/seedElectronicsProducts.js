require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const ElectronicsProduct = require("./models/ElectronicsProduct");

const electronicsProducts = [
  {
    id: "elec1",
    name: "Apple iPhone 13",
    image: "https://images.unsplash.com/photo-1631047740913-1a1a1a1a1a1a",
    price: 70000,
    originalPrice: 75000,
    weight: "174g",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    isBestDeal: true,
    category: "electronics",
  },
  {
    id: "elec2",
    name: "Samsung Galaxy S21",
    image: "https://images.unsplash.com/photo-1612832021083-1a1a1a1a1a1a",
    price: 65000,
    weight: "169g",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec3",
    name: "Sony WH-1000XM4 Headphones",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    price: 25000,
    weight: "254g",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec4",
    name: "Apple MacBook Pro",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: 120000,
    weight: "1.4kg",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec5",
    name: "Samsung 55-inch QLED TV",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 80000,
    weight: "15kg",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec6",
    name: "Amazon Echo Dot",
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e0e0",
    price: 4000,
    weight: "300g",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec7",
    name: "Apple Watch Series 6",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: 35000,
    weight: "47g",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec8",
    name: "Dell XPS 13 Laptop",
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e0e0",
    price: 90000,
    weight: "1.2kg",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec9",
    name: "Bose SoundLink Speaker",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    price: 15000,
    weight: "600g",
    platform: "instamart",
    deliveryTime: "14 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec10",
    name: "Google Pixel 6",
    image: "https://images.unsplash.com/photo-1612832021083-1a1a1a1a1a1a",
    price: 60000,
    weight: "207g",
    platform: "blinkit",
    deliveryTime: "11 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec11",
    name: "Sony PlayStation 5",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: 50000,
    weight: "4.5kg",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec12",
    name: "Apple AirPods Pro",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    price: 20000,
    weight: "56g",
    platform: "instamart",
    deliveryTime: "13 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec13",
    name: "Samsung Galaxy Watch 4",
    image: "https://images.unsplash.com/photo-1512446733611-9099a758e0e0",
    price: 25000,
    weight: "30g",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec14",
    name: "Canon EOS M50 Camera",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 55000,
    weight: "387g",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "electronics",
  },
  {
    id: "elec15",
    name: "JBL Bluetooth Speaker",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    price: 8000,
    weight: "600g",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "electronics",
  },
];

const seedElectronicsProducts = async () => {
  try {
    await connectDB();
    await ElectronicsProduct.deleteMany({});
    await ElectronicsProduct.insertMany(electronicsProducts);
    console.log("Electronics products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding electronics products:", error);
    process.exit(1);
  }
};

seedElectronicsProducts();
