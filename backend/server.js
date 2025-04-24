require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Basic route to test server
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Username or email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    if (!usernameOrEmail || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const Product = require("./models/Product");
const DairyProduct = require("./models/DairyProduct");
const SnackProduct = require("./models/SnackProduct");
const StapleProduct = require("./models/StapleProduct");
// Existing imports
const PersonalCareProduct = require("./models/PersonalCareProduct");
// Existing imports
const HouseholdProduct = require("./models/HouseholdProduct");
const ToyProduct = require("./models/ToyProduct");
const ElectronicsProduct = require("./models/ElectronicsProduct");

// Existing code ...

// Get products by category
app.get("/products", async (req, res) => {
  try {
    const category = req.query.category;
    if (!category) {
      return res
        .status(400)
        .json({ message: "Category query parameter is required" });
    }
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Get dairy products
app.get("/dairy-products", async (req, res) => {
  try {
    const products = await DairyProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Get dairy products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get snack products
app.get("/snack-products", async (req, res) => {
  try {
    const products = await SnackProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Get snack products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get staple products
app.get("/staple-products", async (req, res) => {
  try {
    const products = await StapleProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Get staple products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get personal care products
app.get("/personal-care-products", async (req, res) => {
  try {
    const products = await PersonalCareProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Get personal care products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get household products
app.get("/household-products", async (req, res) => {
  try {
    const products = await HouseholdProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Get household products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get toy products
app.get("/toy-products", async (req, res) => {
  try {
    const products = await ToyProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error("Get toy products error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add to cart endpoint
app.post("/cart/add", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const existingItemIndex = user.cart.findIndex(
      (item) => item.productId === productId
    );
    if (existingItemIndex >= 0) {
      user.cart[existingItemIndex].quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }
    await user.save();
    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get cart endpoint
app.get("/cart", async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(400).json({ message: "Missing userId parameter" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.cart);
  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Remove from cart endpoint
app.post("/cart/remove", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    if (!userId || !productId) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.cart = user.cart.filter((item) => item.productId !== productId);
    await user.save();
    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
