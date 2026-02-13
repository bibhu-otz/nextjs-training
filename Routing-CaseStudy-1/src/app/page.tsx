// ============================================================
// HOME PAGE
// Simple landing page that redirects users to /products
// ============================================================

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          gap: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: 800 }}>
          🎯 Next.js Routing Titbits
        </h1>
        <p style={{ fontSize: "1.25rem", color: "var(--color-gray-500)", maxWidth: "600px" }}>
          A training demo showcasing App Router patterns: parallel routes, 
          intercepting routes, and modal overlays.
        </p>
        
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Link href="/products" className="btn btn-primary">
            View Products →
          </Link>
        </div>

        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem",
            background: "white",
            borderRadius: "var(--border-radius)",
            boxShadow: "var(--shadow-md)",
            maxWidth: "500px",
            textAlign: "left",
          }}
        >
          <h3 style={{ marginBottom: "1rem", color: "var(--color-primary)" }}>
            📚 What This Demo Shows
          </h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingLeft: "1.25rem" }}>
            <li><strong>Parallel Routes:</strong> @modal slot renders alongside main content</li>
            <li><strong>Intercepting Routes:</strong> (..) matcher intercepts navigation</li>
            <li><strong>Modal Pattern:</strong> Quick view opens as overlay from grid</li>
            <li><strong>Full Page Fallback:</strong> Direct URL or refresh shows full page</li>
            <li><strong>UX States:</strong> Loading, error, and not-found handling</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
