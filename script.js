// Data from mockData.ts converted to JS
const mockProducts = [
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
    name: "Fresh Organic Bananas (6 pcs)",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    price: 49,
    weight: "600-700g (approx.)",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p3",
    name: "Fresh Organic Bananas (6 pcs)",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    price: 52,
    weight: "600-700g (approx.)",
    platform: "instamart",
    deliveryTime: "12 min",
    inStock: true,
    category: "fruits",
  },
  {
    id: "p4",
    name: "Amul Toned Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    price: 68,
    weight: "1L",
    platform: "blinkit",
    deliveryTime: "10 min",
    inStock: true,
    category: "dairy",
  },
  {
    id: "p5",
    name: "Amul Toned Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    price: 66,
    originalPrice: 70,
    weight: "1L",
    platform: "zepto",
    deliveryTime: "7 min",
    inStock: true,
    isBestDeal: true,
    category: "dairy",
  },
  {
    id: "p6",
    name: "Amul Toned Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    price: 70,
    weight: "1L",
    platform: "instamart",
    deliveryTime: "15 min",
    inStock: true,
    category: "dairy",
  },
  {
    id: "p7",
    name: "Whole Wheat Bread",
    image:
      "https://media.istockphoto.com/id/1395345398/photo/sliced-white-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=kf32IMiAJY_MyjOiyoXuVo84msT00WKqGdmvAtMG0SI=",
    price: 42,
    weight: "400g",
    platform: "blinkit",
    deliveryTime: "9 min",
    inStock: true,
    category: "dairy",
  },
  {
    id: "p8",
    name: "Whole Wheat Bread",
    image:
      "https://media.istockphoto.com/id/1395345398/photo/sliced-white-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=kf32IMiAJY_MyjOiyoXuVo84msT00WKqGdmvAtMG0SI=",
    price: 40,
    originalPrice: 45,
    weight: "400g",
    platform: "zepto",
    deliveryTime: "8 min",
    inStock: true,
    isBestDeal: true,
    category: "dairy",
  },
  {
    id: "p9",
    name: "Whole Wheat Bread",
    image:
      "https://media.istockphoto.com/id/1395345398/photo/sliced-white-bread.webp?a=1&b=1&s=612x612&w=0&k=20&c=kf32IMiAJY_MyjOiyoXuVo84msT00WKqGdmvAtMG0SI=",
    price: 45,
    weight: "400g",
    platform: "instamart",
    deliveryTime: "14 min",
    inStock: false,
    category: "dairy",
  },
];

const categories = [
  { id: "fruits", name: "Fruits & Vegetables" },
  { id: "dairy", name: "Dairy & Breakfast" },
  { id: "snacks", name: "Snacks & Beverages" },
  { id: "staples", name: "Staples & Groceries" },
  { id: "personal", name: "Personal Care" },
  { id: "household", name: "Household Items" },
  { id: "toys", name: "Toys" },
  { id: "electronics", name: "Electronics" },
];

// Utility functions
function getGroupedProductsByName() {
  const groups = {};
  mockProducts.forEach((product) => {
    if (!groups[product.name]) {
      groups[product.name] = [];
    }
    groups[product.name].push(product);
  });
  return groups;
}

function getFeaturedDeals() {
  return mockProducts.filter((p) => p.isBestDeal).slice(0, 4);
}

// DOM Elements
const themeToggleBtn = document.getElementById("theme-toggle");
const footerYear = document.getElementById("footer-year");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const loadingDiv = document.getElementById("loading");
const comparisonResultsDiv = document.getElementById("comparison-results");
const featuredDealsDiv = document.getElementById("featured-deals");
const categoriesDiv = document.getElementById("categories");

// Initialize theme
function initializeTheme() {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    themeToggleBtn.textContent = "☀️";
  } else {
    document.documentElement.classList.remove("dark");
    themeToggleBtn.textContent = "🌙";
  }
}

// Toggle theme
themeToggleBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️";
  }
});

// Render featured deals
function renderFeaturedDeals() {
  const deals = getFeaturedDeals();
  featuredDealsDiv.innerHTML = "";
  deals.forEach((product) => {
    const card = createProductCard(product);
    featuredDealsDiv.appendChild(card);
  });
}

// Render categories
function renderCategories() {
  categoriesDiv.innerHTML = "";
  categories.forEach((category) => {
    const div = document.createElement("div");
    div.className = "category-card";
    div.textContent = category.name;
    div.style.cursor = "pointer";
    div.addEventListener("click", () => {
      // Open new page with category id as query parameter
      window.location.href = `category.html?category=${encodeURIComponent(
        category.id
      )}`;
    });
    categoriesDiv.appendChild(div);
  });
}

// Cart data structure
let cart = {};
let loggedInUser = null;

// Load cart from localStorage or backend
async function loadCart() {
  if (loggedInUser && loggedInUser.id) {
    try {
      const response = await fetch(
        `http://localhost:3000/cart?userId=${loggedInUser.id}`
      );
      if (response.ok) {
        const cartData = await response.json();
        cart = {};
        for (const item of cartData) {
          cart[item.productId] = {
            id: item.productId,
            quantity: item.quantity,
          };
        }
        updateCartCount();
      }
    } catch (error) {
      console.error("Error loading cart from backend:", error);
    }
  } else {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      cart = JSON.parse(cartData);
    } else {
      cart = {};
    }
    updateCartCount();
  }
}

// Save cart to localStorage or backend
async function saveCart() {
  if (loggedInUser && loggedInUser.id) {
    try {
      for (const productId in cart) {
        const quantity = cart[productId].quantity;
        await fetch("http://localhost:3000/cart/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: loggedInUser.id,
            productId,
            quantity,
          }),
        });
      }
    } catch (error) {
      console.error("Error saving cart to backend:", error);
    }
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// Update cart count in navbar
function updateCartCount() {
  const cartCountSpan = document.getElementById("cart-count");
  const totalCount = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  if (totalCount > 0) {
    cartCountSpan.style.display = "inline-block";
    cartCountSpan.textContent = totalCount;
  } else {
    cartCountSpan.style.display = "none";
  }
}

// Render cart modal items
function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = "";

  if (Object.keys(cart).length === 0) {
    cartItemsDiv.textContent = "Your cart is empty.";
    document.getElementById("cart-total").textContent = "Total: ₹0";
    return;
  }

  let totalPrice = 0;

  Object.values(cart).forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = item.name || item.id;
    nameSpan.className = "cart-item-name";

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = 1;
    quantityInput.value = item.quantity;
    quantityInput.className = "cart-item-quantity";
    quantityInput.addEventListener("change", async (e) => {
      const newQty = parseInt(e.target.value);
      if (newQty > 0) {
        cart[item.id].quantity = newQty;
        await saveCart();
        updateCartCount();
        renderCart();
      }
    });

    const priceSpan = document.createElement("span");
    priceSpan.textContent = `₹${
      item.price ? item.price * item.quantity : "N/A"
    }`;
    priceSpan.className = "cart-item-price";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "btn btn-outline btn-sm";
    removeBtn.addEventListener("click", async () => {
      delete cart[item.id];
      await saveCart();
      updateCartCount();
      renderCart();
    });

    itemDiv.appendChild(nameSpan);
    itemDiv.appendChild(quantityInput);
    itemDiv.appendChild(priceSpan);
    itemDiv.appendChild(removeBtn);

    cartItemsDiv.appendChild(itemDiv);

    if (item.price) {
      totalPrice += item.price * item.quantity;
    }
  });

  document.getElementById("cart-total").textContent = `Total: ₹${totalPrice}`;
}

// Show cart modal
function showCart() {
  document.getElementById("cart-modal").classList.remove("hidden");
  renderCart();
}

// Hide cart modal
function hideCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

// Add product to cart
async function addToCart(product) {
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
  }
  await saveCart();
  updateCartCount();
  // Redirect to cart page after adding product
  window.location.href = "cart.html";
}

// Modify createProductCard to add "Add to Cart" button
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  if (product.isBestDeal) card.classList.add("best-deal");

  const bestDealBadge = document.createElement("div");
  bestDealBadge.className = "best-deal-badge";
  bestDealBadge.textContent = "BEST DEAL";
  card.appendChild(bestDealBadge);

  const imgContainer = document.createElement("div");
  imgContainer.className = "product-image-container";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  const info = document.createElement("div");
  info.className = "product-info";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = product.name;
  info.appendChild(name);

  const weight = document.createElement("p");
  weight.className = "product-weight";
  weight.textContent = product.weight;
  info.appendChild(weight);

  const priceInfo = document.createElement("div");
  priceInfo.className = "price-info";

  const priceTag = document.createElement("span");
  priceTag.className = "price-tag";
  priceTag.textContent = `₹${product.price}`;
  priceInfo.appendChild(priceTag);

  if (product.originalPrice) {
    const originalPrice = document.createElement("span");
    originalPrice.className = "original-price";
    originalPrice.textContent = `₹${product.originalPrice}`;
    priceInfo.appendChild(originalPrice);

    const discount = document.createElement("span");
    discount.className = "discount-percentage";
    const discountPercent = Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
    discount.textContent = `${discountPercent}% off`;
    priceInfo.appendChild(discount);
  }
  info.appendChild(priceInfo);

  const delivery = document.createElement("div");
  delivery.className = "delivery-info";
  delivery.textContent = `Delivery: ${product.deliveryTime}`;
  info.appendChild(delivery);

  const btn = document.createElement("button");
  btn.className = "btn-full";
  btn.disabled = !product.inStock;
  btn.textContent = product.inStock ? "Add to Cart" : "Out of Stock";
  btn.addEventListener("click", () => {
    if (product.inStock) {
      addToCart(product);
    }
  });
  info.appendChild(btn);

  card.appendChild(info);

  return card;
}

// Initialize cart on page load
loadCart();
updateCartCount();

// Cart button event listeners
document.getElementById("cart-btn").addEventListener("click", showCart);
document.getElementById("close-cart-btn").addEventListener("click", hideCart);
document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("Checkout functionality is not implemented yet.");
});

// Create product card element
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  if (product.isBestDeal) card.classList.add("best-deal");

  const bestDealBadge = document.createElement("div");
  bestDealBadge.className = "best-deal-badge";
  bestDealBadge.textContent = "BEST DEAL";
  card.appendChild(bestDealBadge);

  const imgContainer = document.createElement("div");
  imgContainer.className = "product-image-container";
  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  const info = document.createElement("div");
  info.className = "product-info";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = product.name;
  info.appendChild(name);

  const weight = document.createElement("p");
  weight.className = "product-weight";
  weight.textContent = product.weight;
  info.appendChild(weight);

  const priceInfo = document.createElement("div");
  priceInfo.className = "price-info";

  const priceTag = document.createElement("span");
  priceTag.className = "price-tag";
  priceTag.textContent = `₹${product.price}`;
  priceInfo.appendChild(priceTag);

  if (product.originalPrice) {
    const originalPrice = document.createElement("span");
    originalPrice.className = "original-price";
    originalPrice.textContent = `₹${product.originalPrice}`;
    priceInfo.appendChild(originalPrice);

    const discount = document.createElement("span");
    discount.className = "discount-percentage";
    const discountPercent = Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
    discount.textContent = `${discountPercent}% off`;
    priceInfo.appendChild(discount);
  }
  info.appendChild(priceInfo);

  const delivery = document.createElement("div");
  delivery.className = "delivery-info";
  delivery.textContent = `Delivery: ${product.deliveryTime}`;
  info.appendChild(delivery);

  const btn = document.createElement("button");
  btn.className = "btn-full";
  btn.disabled = !product.inStock;
  btn.textContent = product.inStock ? "View Details" : "Out of Stock";
  info.appendChild(btn);

  card.appendChild(info);

  return card;
}

// Render comparison table
function renderComparisonTable(products) {
  comparisonResultsDiv.innerHTML = "";

  if (!products || products.length === 0) {
    comparisonResultsDiv.textContent = "No comparison results found.";
    comparisonResultsDiv.classList.remove("hidden");
    return;
  }

  const container = document.createElement("div");
  container.className = "comparison-table-container";

  const header = document.createElement("div");
  header.className = "comparison-table-header";

  const title = document.createElement("h2");
  title.textContent = "Product Comparison";
  header.appendChild(title);

  container.appendChild(header);

  const table = document.createElement("table");
  table.className = "comparison-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Platform", "Price", "Delivery Time", "Availability", "Action"].forEach(
    (text) => {
      const th = document.createElement("th");
      th.textContent = text;
      headerRow.appendChild(th);
    }
  );
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  // Sort products by price ascending
  const sortedProducts = products.slice().sort((a, b) => a.price - b.price);

  sortedProducts.forEach((product, index) => {
    const tr = document.createElement("tr");
    if (index === 0) tr.classList.add("highlight");

    const platformTd = document.createElement("td");
    const platformBadge = document.createElement("span");
    platformBadge.className = `badge platform-badge-${product.platform}`;
    platformBadge.textContent =
      product.platform.charAt(0).toUpperCase() + product.platform.slice(1);
    platformTd.appendChild(platformBadge);
    tr.appendChild(platformTd);

    const priceTd = document.createElement("td");
    priceTd.textContent = `₹${product.price}`;
    tr.appendChild(priceTd);

    const deliveryTd = document.createElement("td");
    deliveryTd.textContent = product.deliveryTime;
    tr.appendChild(deliveryTd);

    const availabilityTd = document.createElement("td");
    const availSpan = document.createElement("span");
    availSpan.className = product.inStock
      ? "availability-badge avail-in-stock"
      : "availability-badge avail-out-stock";
    availSpan.textContent = product.inStock ? "In Stock" : "Out of Stock";
    availabilityTd.appendChild(availSpan);
    tr.appendChild(availabilityTd);

    const actionTd = document.createElement("td");
    const actionBtn = document.createElement("button");
    actionBtn.className = "btn-full";
    actionBtn.disabled = !product.inStock;
    actionBtn.textContent = index === 0 ? "Best Choice" : "View";
    actionTd.appendChild(actionBtn);
    tr.appendChild(actionTd);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  container.appendChild(table);
  comparisonResultsDiv.appendChild(container);
  comparisonResultsDiv.classList.remove("hidden");
}

// Search handler
function handleSearch(query) {
  loadingDiv.classList.remove("hidden");
  comparisonResultsDiv.classList.add("hidden");

  setTimeout(() => {
    loadingDiv.classList.add("hidden");
    const groupedProducts = getGroupedProductsByName();

    const lowerQuery = query.toLowerCase();

    // Filter products by name containing the query substring
    const matchedProducts = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerQuery)
    );

    if (matchedProducts.length > 0) {
      renderComparisonTable(matchedProducts);
    } else {
      comparisonResultsDiv.textContent = "No comparison results found.";
      comparisonResultsDiv.classList.remove("hidden");
    }
  }, 800);
}

// Initialize footer year
function initializeFooterYear() {
  const year = new Date().getFullYear();
  footerYear.textContent = year;
}

// Event listeners
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    handleSearch(query);
  }
});

// Initial render
initializeTheme();
renderFeaturedDeals();
renderCategories();
initializeFooterYear();
