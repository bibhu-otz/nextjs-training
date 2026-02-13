// ============================================================
// PRODUCTS LIST PAGE
// Displays a grid of product cards. Each card is a Link that
// will be intercepted by the (..)products/[id] route to show
// a modal overlay instead of navigating to the full page.
// ============================================================

import Link from "next/link";
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">
            Click any product to open Quick View modal (intercepted route)
          </p>
        </div>
      </header>

      <div className="container">
        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="product-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h2 className="product-name">{product.name}</h2>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div className="product-rating">
                  ⭐ {product.rating} / 5.0
                </div>
                <span
                  className={`stock-badge ${
                    product.inStock ? "in-stock" : "out-of-stock"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
