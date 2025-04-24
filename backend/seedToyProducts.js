require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const ToyProduct = require("./models/ToyProduct");

const toyProducts = [
  {
    id: "toy1",
    name: "Lego Classic Bricks",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 1500,
    originalPrice: 1800,
    weight: "500g",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    isBestDeal: true,
    category: "toys",
  },
  {
    id: "toy2",
    name: "Barbie Dreamhouse",
    image: "https://images.unsplash.com/photo-1526403227993-3a7a1a1a1a1a",
    price: 3500,
    weight: "2kg",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy3",
    name: "Hot Wheels Track Set",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 1200,
    weight: "1kg",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy4",
    name: "Fisher-Price Baby Gym",
    image: "https://images.unsplash.com/photo-1526403227993-3a7a1a1a1a1a",
    price: 1800,
    weight: "1.5kg",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy5",
    name: "Nerf Blaster",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 2200,
    weight: "800g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy6",
    name: "Play-Doh Modeling Compound",
    image: "https://images.unsplash.com/photo-1526403227993-3a7a1a1a1a1a",
    price: 500,
    weight: "300g",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy7",
    name: "Transformers Action Figure",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 1800,
    weight: "600g",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy8",
    name: "Puzzle Board Game",
    image: "https://images.unsplash.com/photo-1526403227993-3a7a1a1a1a1a",
    price: 900,
    weight: "400g",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy9",
    name: "Remote Control Car",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 2500,
    weight: "1.2kg",
    platform: "instamart",
    deliveryTime: "14 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy10",
    name: "Baby Walker",
    image: "https://images.unsplash.com/photo-1526403227993-3a7a1a1a1a1a",
    price: 3000,
    weight: "3kg",
    platform: "blinkit",
    deliveryTime: "11 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy11",
    name: "Stuffed Teddy Bear",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 800,
    weight: "500g",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy12",
    name: "Building Blocks Set",
    image: "https://images.unsplash.com/photo-1526403227993-3a7a1a1a1a1a",
    price: 1200,
    weight: "700g",
    platform: "instamart",
    deliveryTime: "13 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy13",
    name: "Kids Drum Set",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 2200,
    weight: "2kg",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy14",
    name: "Toy Kitchen Set",
    image: "https://images.unsplash.com/photo-1526403227993-3a7a1a1a1a1a",
    price: 1800,
    weight: "1.5kg",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "toys",
  },
  {
    id: "toy15",
    name: "Action Figure Set",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    price: 2000,
    weight: "1kg",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "toys",
  },
];

const seedToyProducts = async () => {
  try {
    await connectDB();
    await ToyProduct.deleteMany({});
    await ToyProduct.insertMany(toyProducts);
    console.log("Toy products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding toy products:", error);
    process.exit(1);
  }
};

seedToyProducts();
