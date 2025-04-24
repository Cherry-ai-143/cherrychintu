require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const HouseholdProduct = require("./models/HouseholdProduct");

const householdProducts = [
  {
    id: "hh1",
    name: "Dettol Antiseptic Liquid",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 150,
    originalPrice: 180,
    weight: "500ml",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    isBestDeal: true,
    category: "household",
  },
  {
    id: "hh2",
    name: "Surf Excel Detergent Powder",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 250,
    weight: "1kg",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh3",
    name: "Harpic Toilet Cleaner",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 120,
    weight: "500ml",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh4",
    name: "Lizol Disinfectant Floor Cleaner",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 180,
    weight: "750ml",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh5",
    name: "Colgate Toothbrush",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 80,
    weight: "1 pc",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh6",
    name: "Vim Dishwash Bar",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 60,
    weight: "250g",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh7",
    name: "Mr. Muscle Bathroom Cleaner",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 200,
    weight: "500ml",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh8",
    name: "Fevicol Adhesive",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 90,
    weight: "100g",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh9",
    name: "Pril Dishwash Liquid",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 150,
    weight: "500ml",
    platform: "instamart",
    deliveryTime: "14 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh10",
    name: "Harpic Power Plus Toilet Cleaner",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 130,
    weight: "500ml",
    platform: "blinkit",
    deliveryTime: "11 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh11",
    name: "Lizol Disinfectant Spray",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 220,
    weight: "300ml",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh12",
    name: "Vim Dishwash Liquid",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 140,
    weight: "500ml",
    platform: "instamart",
    deliveryTime: "13 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh13",
    name: "Colgate Toothpaste",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 90,
    weight: "200g",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh14",
    name: "Dettol Hand Wash",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 110,
    weight: "250ml",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "household",
  },
  {
    id: "hh15",
    name: "Mr. Clean Multi-Surface Cleaner",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 180,
    weight: "500ml",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "household",
  },
];

const seedHouseholdProducts = async () => {
  try {
    await connectDB();
    await HouseholdProduct.deleteMany({});
    await HouseholdProduct.insertMany(householdProducts);
    console.log("Household products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding household products:", error);
    process.exit(1);
  }
};

seedHouseholdProducts();
