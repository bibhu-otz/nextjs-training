// ============================================================
// INTERCEPTING ROUTE: PRODUCT MODAL
// 
// Path: @modal/(.)products/[id]/page.tsx
// 
// INTERCEPTING ROUTES EXPLAINED:
// - (.) means "match the SAME segment level"
// - From @modal (at app/ level), (.)products matches /products at the same level
// - This intercepts navigation to /products/[id] when coming from /products
//
// HOW IT WORKS:
// 1. User is on /products page
// 2. User clicks a product card (Link to /products/[id])
// 3. Next.js intercepts this soft navigation
// 4. Instead of showing products/[id]/page.tsx, it renders THIS file
// 5. The modal renders in the @modal slot (parallel to main content)
// 6. URL changes to /products/[id] but products grid stays visible
//
// WHEN FULL PAGE SHOWS INSTEAD:
// - Direct URL navigation (typing in address bar)
// - Page refresh (hard navigation)
// - Sharing/bookmarking the URL
//
// INTERCEPTOR PATTERNS:
// - (.) matches same level
// - (..) matches one level up
// - (..)(..) matches two levels up
// - (...) matches from root
// ============================================================

import Link from "next/link";
import { notFound } from "next/navigation";
import Modal from "@/components/Modal";
import { getProductById } from "@/lib/products";

interface ModalProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ModalProductPage({ params }: ModalProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <Modal title="Quick View">
      {/* Product Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="modal-image"
      />

      {/* Product Info */}
      <span className="product-category">{product.category}</span>
      <h3
        className="product-name"
        style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}
      >
        {product.name}
      </h3>

      <div className="product-price" style={{ marginBottom: "1rem" }}>
        ${product.price.toFixed(2)}
      </div>

      <div className="product-rating" style={{ marginBottom: "1rem" }}>
        ⭐ {product.rating} / 5.0
      </div>

      <span
        className={`stock-badge ${
          product.inStock ? "in-stock" : "out-of-stock"
        }`}
      >
        {product.inStock ? "In Stock" : "Out of Stock"}
      </span>

      <p
        style={{
          marginTop: "1rem",
          color: "var(--color-gray-700)",
          lineHeight: 1.6,
        }}
      >
        {product.description}
      </p>

      {/* Modal Actions */}
      <div className="modal-footer" style={{ marginTop: "1.5rem", padding: 0, border: "none" }}>
        <button
          className="btn btn-primary"
          disabled={!product.inStock}
          style={{ flex: 1, opacity: product.inStock ? 1 : 0.5 }}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
        <Link
          href={`/products/${product.id}`}
          className="btn btn-outline"
          style={{ flex: 1 }}
        >
          View Full Page →
        </Link>
      </div>

      {/* Routing Info */}
      <div
        style={{
          marginTop: "1rem",
          padding: "0.75rem",
          background: "var(--color-gray-100)",
          borderRadius: "var(--border-radius)",
          fontSize: "0.75rem",
          color: "var(--color-gray-500)",
        }}
      >
        💡 This is an <strong>intercepted route</strong>. The URL is{" "}
        <code>/products/{id}</code> but you see a modal. Press Escape, click
        outside, or refresh to see the difference.
      </div>
    </Modal>
  );
}
