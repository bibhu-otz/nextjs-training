// ============================================================
// NOT FOUND PAGE FOR /products
// 
// Shown when notFound() is called within the /products segment.
// This is different from app/not-found.tsx which handles
// global 404s.
//
// Use cases:
// - Product with given ID doesn't exist
// - Invalid category filter
// - Deleted or unpublished product
// ============================================================

import Link from "next/link";

export default function ProductsNotFound() {
  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Products</h1>
        </div>
      </header>

      <div className="container">
        <div className="not-found-container">
          <div className="not-found-code">404</div>
          <h2 className="not-found-title">Product Not Found</h2>
          <p style={{ color: "var(--color-gray-500)", maxWidth: "400px" }}>
            The product you&apos;re looking for doesn&apos;t exist or has been removed.
            Please check the URL or browse our available products.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <Link href="/products" className="btn btn-primary">
              ← Back to Products
            </Link>
            <Link href="/" className="btn btn-secondary">
              Go Home
            </Link>
          </div>

          {/* Helpful info */}
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
            <strong>💡 Routing Note:</strong> This not-found.tsx is specific to
            the /products route segment. It&apos;s triggered when{" "}
            <code>notFound()</code> is called in any /products/* page.
          </div>
        </div>
      </div>
    </main>
  );
}
