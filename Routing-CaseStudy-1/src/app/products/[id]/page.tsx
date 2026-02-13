// ============================================================
// PRODUCT DETAIL PAGE (FULL PAGE)
// This is the FULL PAGE version of the product detail.
// Shown when:
//   1. User navigates directly to /products/[id] URL
//   2. User refreshes the page while modal is open
//   3. User shares/bookmarks the URL
// The intercepting route (..)products/[id] handles modal display.
// ============================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  // Trigger 404 if product not found
  if (!product) {
    notFound();
  }

  return (
    <main>
      <div className="container">
        {/* Back Navigation */}
        <Link href="/products" className="back-link">
          ← Back to Products
        </Link>

        {/* Product Detail Grid */}
        <div className="product-detail">
          {/* Product Image */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-detail-image"
            />
          </div>

          {/* Product Information */}
          <div className="product-detail-info">
            <span className="product-category">{product.category}</span>
            <h1 className="product-detail-name">{product.name}</h1>
            <div className="product-detail-price">
              ${product.price.toFixed(2)}
            </div>

            <div className="product-rating" style={{ fontSize: "1.125rem" }}>
              ⭐ {product.rating} / 5.0
            </div>

            <span
              className={`stock-badge ${
                product.inStock ? "in-stock" : "out-of-stock"
              }`}
              style={{ alignSelf: "flex-start" }}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>

            <p className="product-detail-description">{product.description}</p>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button
                className="btn btn-primary"
                disabled={!product.inStock}
                style={{ opacity: product.inStock ? 1 : 0.5 }}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
              <button className="btn btn-outline">Add to Wishlist</button>
            </div>

            {/* Info Box */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1rem",
                background: "var(--color-gray-100)",
                borderRadius: "var(--border-radius)",
                fontSize: "0.875rem",
                color: "var(--color-gray-500)",
              }}
            >
              <strong>💡 Routing Note:</strong> You&apos;re viewing the full page
              because you either navigated directly to this URL or refreshed
              the page. Try going back to{" "}
              <Link href="/products" style={{ color: "var(--color-primary)" }}>
                /products
              </Link>{" "}
              and clicking a product card to see the modal overlay.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ============================================================
// STATIC PARAMS (Optional)
// Pre-render all product pages at build time for better performance
// ============================================================

import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// ============================================================
// METADATA
// Dynamic metadata for SEO
// ============================================================

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Routing Titbits`,
    description: product.description,
  };
}
