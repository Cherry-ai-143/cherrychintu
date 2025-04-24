require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const DairyProduct = require("./models/DairyProduct");

const dairyProducts = [
  {
    id: "d1",
    name: "Amul Toned Milk (1L)",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    price: 68,
    originalPrice: 70,
    weight: "1L",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    isBestDeal: true,
    category: "dairy",
  },
  {
    id: "d2",
    name: "Amul Butter (500g)",
    image: "https://images.unsplash.com/photo-1585238342028-4a1a1a1a1a1a",
    price: 150,
    weight: "500g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "dairy",
  },
  {
    id: "d3",
    name: "Nestle Cornflakes (500g)",
    image: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8",
    price: 120,
    weight: "500g",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "breakfast",
  },
  {
    id: "d4",
    name: "Britannia Cheese (200g)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 90,
    weight: "200g",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "dairy",
  },
  {
    id: "d5",
    name: "Amul Fresh Cream (200g)",
    image: "https://images.unsplash.com/photo-1604908177522-1a1a1a1a1a1a",
    price: 55,
    weight: "200g",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "dairy",
  },
  {
    id: "d6",
    name: "Kellogg's Muesli (500g)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: 180,
    weight: "500g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "breakfast",
  },
  {
    id: "d7",
    name: "Mother Dairy Paneer (200g)",
    image: "https://images.unsplash.com/photo-1585238342028-4a1a1a1a1a1a",
    price: 110,
    weight: "200g",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "dairy",
  },
  {
    id: "d8",
    name: "Quaker Oats (1kg)",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    price: 250,
    weight: "1kg",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "breakfast",
  },
  {
    id: "d9",
    name: "Dabur Honey (500g)",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 300,
    weight: "500g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "breakfast",
  },
  {
    id: "d10",
    name: "Amul Cheese Slices (200g)",
    image: "https://images.unsplash.com/photo-1585238342028-4a1a1a1a1a1a",
    price: 95,
    weight: "200g",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "dairy",
  },
];

async function seedDairyProducts() {
  try {
    await connectDB();
    await DairyProduct.deleteMany({});
    await DairyProduct.insertMany(dairyProducts);
    console.log("Dairy products seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding dairy products:", error);
    process.exit(1);
  }
}

seedDairyProducts();
