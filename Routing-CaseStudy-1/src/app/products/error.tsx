// ============================================================
// ERROR BOUNDARY FOR /products
// 
// Catches runtime errors in the /products route segment.
// Must be a Client Component to use error boundary features.
//
// Provides:
// - Error message display
// - Reset button to retry the failed operation
// - Graceful degradation instead of blank screen
// ============================================================

"use client";

import { useEffect } from "react";

interface ProductsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductsError({ error, reset }: ProductsErrorProps) {
  // Log error to console (in production, send to error tracking service)
  useEffect(() => {
    console.error("Products page error:", error);
  }, [error]);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Products</h1>
        </div>
      </header>

      <div className="container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h2 className="error-title">Something went wrong!</h2>
          <p className="error-message">
            We encountered an error while loading the products. This might be a
            temporary issue. Please try again.
          </p>

          {/* Show error details in development */}
          {process.env.NODE_ENV === "development" && (
            <pre
              style={{
                background: "var(--color-gray-100)",
                padding: "1rem",
                borderRadius: "var(--border-radius)",
                fontSize: "0.75rem",
                maxWidth: "100%",
                overflow: "auto",
                textAlign: "left",
              }}
            >
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          )}

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <button onClick={reset} className="btn btn-primary">
              Try Again
            </button>
            <a href="/products" className="btn btn-secondary">
              Refresh Page
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
