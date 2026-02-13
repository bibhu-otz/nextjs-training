// ============================================================
// PRODUCTS LAYOUT
// This layout wraps the /products route segment.
// It's a simple pass-through but demonstrates where you could
// add product-specific navigation or context providers.
// ============================================================

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
