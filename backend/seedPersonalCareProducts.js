require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db");
const PersonalCareProduct = require("./models/PersonalCareProduct");

const personalCareProducts = [
  {
    id: "pc1",
    name: "Nivea Soft Moisturizing Cream",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 250,
    originalPrice: 300,
    weight: "150ml",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    isBestDeal: true,
    category: "personal",
  },
  {
    id: "pc2",
    name: "Dove Beauty Bar",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 120,
    weight: "100g",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc3",
    name: "Colgate Toothpaste",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 80,
    weight: "200g",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc4",
    name: "L'Oreal Paris Shampoo",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 350,
    weight: "400ml",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc5",
    name: "Vaseline Petroleum Jelly",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 150,
    weight: "100g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc6",
    name: "Gillette Razor",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 500,
    weight: "1 pc",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc7",
    name: "Nivea Deodorant",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 220,
    weight: "150ml",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc8",
    name: "Head & Shoulders Conditioner",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 300,
    weight: "350ml",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc9",
    name: "Dove Shampoo",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 280,
    weight: "400ml",
    platform: "instamart",
    deliveryTime: "14 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc10",
    name: "Vaseline Lip Therapy",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 120,
    weight: "20g",
    platform: "blinkit",
    deliveryTime: "11 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc11",
    name: "Gillette Shaving Foam",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 180,
    weight: "200ml",
    platform: "zepto",
    deliveryTime: "10 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc12",
    name: "Nivea Face Wash",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 250,
    weight: "100ml",
    platform: "instamart",
    deliveryTime: "13 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc13",
    name: "Colgate Mouthwash",
    image: "https://images.unsplash.com/photo-1588776814546-0a1a1a1a1a1a",
    price: 150,
    weight: "500ml",
    platform: "blinkit",
    deliveryTime: "12 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc14",
    name: "Dove Body Lotion",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    price: 350,
    weight: "200ml",
    platform: "zepto",
    deliveryTime: "9 min",
    inStock: true,
    category: "personal",
  },
  {
    id: "pc15",
    name: "Head & Shoulders Shampoo",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 320,
    weight: "400ml",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "personal",
  },
];

const seedPersonalCareProducts = async () => {
  try {
    await connectDB();
    await PersonalCareProduct.deleteMany({});
    await PersonalCareProduct.insertMany(personalCareProducts);
    console.log("Personal Care products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding personal care products:", error);
    process.exit(1);
  }
};

seedPersonalCareProducts();
