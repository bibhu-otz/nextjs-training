// ============================================================
// GLOBAL NOT FOUND PAGE
// 
// Catches all 404 errors that aren't handled by more specific
// not-found.tsx files in nested route segments.
// ============================================================

import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <main className="container">
      <div className="not-found-container" style={{ minHeight: "60vh" }}>
        <div className="not-found-code">404</div>
        <h2 className="not-found-title">Page Not Found</h2>
        <p style={{ color: "var(--color-gray-500)", maxWidth: "400px" }}>
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been
          moved or deleted.
        </p>

        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          <Link href="/" className="btn btn-primary">
            ← Go Home
          </Link>
          <Link href="/products" className="btn btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </main>
  );
}
