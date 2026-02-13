// ============================================================
// LOADING STATE FOR /products
// 
// Automatically shown by Next.js while the ProductsPage
// server component is fetching data (getProducts()).
// Uses React Suspense under the hood.
//
// Shows skeleton cards to indicate loading without layout shift.
// ============================================================

export default function ProductsLoading() {
  // Create 6 skeleton cards to match typical grid
  const skeletonCards = Array.from({ length: 6 }, (_, i) => i);

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Loading products...</p>
        </div>
      </header>

      <div className="container">
        <div className="products-grid">
          {skeletonCards.map((i) => (
            <div key={i} className="product-card" style={{ cursor: "default" }}>
              {/* Skeleton Image */}
              <div
                className="skeleton"
                style={{ height: "200px", borderRadius: 0 }}
              />
              {/* Skeleton Content */}
              <div className="product-info">
                <div
                  className="skeleton"
                  style={{ width: "60px", height: "12px", marginBottom: "0.5rem" }}
                />
                <div
                  className="skeleton"
                  style={{ width: "80%", height: "20px", marginBottom: "0.5rem" }}
                />
                <div
                  className="skeleton"
                  style={{ width: "100px", height: "24px", marginBottom: "0.5rem" }}
                />
                <div
                  className="skeleton"
                  style={{ width: "80px", height: "14px", marginBottom: "0.5rem" }}
                />
                <div
                  className="skeleton"
                  style={{ width: "70px", height: "24px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
