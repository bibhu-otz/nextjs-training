// ============================================================
// MOCK PRODUCT DATA
// In-memory data store - no external APIs required
// ============================================================

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  inStock: boolean;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    description:
      "Premium noise-canceling wireless headphones with 40-hour battery life. Features adaptive sound control and premium drivers for audiophile-grade listening experience.",
    price: 299.99,
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/headphones/400/300",
    inStock: true,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Mechanical Keyboard RGB",
    description:
      "Cherry MX switches, per-key RGB lighting, aircraft-grade aluminum frame. Perfect for both gaming and professional typing with hot-swappable switches.",
    price: 149.99,
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/keyboard/400/300",
    inStock: true,
    rating: 4.6,
  },
  {
    id: "3",
    name: "Ultra-Wide Monitor 34\"",
    description:
      "34-inch curved ultrawide monitor with 144Hz refresh rate and 1ms response time. QHD resolution perfect for productivity and immersive gaming.",
    price: 599.99,
    category: "Electronics",
    imageUrl: "https://picsum.photos/seed/monitor/400/300",
    inStock: false,
    rating: 4.9,
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description:
      "Fully adjustable ergonomic chair with lumbar support, breathable mesh back, and 4D armrests. Designed for all-day comfort during work.",
    price: 449.99,
    category: "Furniture",
    imageUrl: "https://picsum.photos/seed/chair/400/300",
    inStock: true,
    rating: 4.7,
  },
  {
    id: "5",
    name: "Smart Desk Lamp",
    description:
      "LED desk lamp with adjustable color temperature, brightness levels, and USB charging port. App-controlled with scheduling features.",
    price: 79.99,
    category: "Lighting",
    imageUrl: "https://picsum.photos/seed/lamp/400/300",
    inStock: true,
    rating: 4.4,
  },
  {
    id: "6",
    name: "Portable SSD 2TB",
    description:
      "Ultra-fast portable SSD with read speeds up to 2000MB/s. Compact, rugged design with hardware encryption for secure data storage.",
    price: 189.99,
    category: "Storage",
    imageUrl: "https://picsum.photos/seed/ssd/400/300",
    inStock: true,
    rating: 4.8,
  },
];

// ============================================================
// DATA ACCESS FUNCTIONS
// Simulate async operations like real API calls
// ============================================================

/**
 * Fetch all products with simulated network delay
 */
export async function getProducts(): Promise<Product[]> {
  // Simulate network latency (300-600ms)
  await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 300));
  return products;
}

/**
 * Fetch a single product by ID
 * Returns null if product not found
 */
export async function getProductById(id: string): Promise<Product | null> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 200 + Math.random() * 200));
  return products.find((p) => p.id === id) ?? null;
}

/**
 * Get products by category
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return products.filter((p) => p.category === category);
}
