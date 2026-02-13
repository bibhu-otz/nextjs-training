// ============================================================
// ROOT LAYOUT
// The root layout wraps all pages. It includes the @modal slot
// for parallel routes - this enables the modal pattern.
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Routing Titbits",
  description: "Demo of App Router parallel routes, intercepting routes, and modal patterns",
};

/**
 * RootLayout Props
 * - children: The main page content
 * - modal: Parallel route slot for modal overlay (from @modal folder)
 */
interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="nav">
          <div className="container nav-content">
            <Link href="/" className="nav-brand">
              🚀 Routing Titbits
            </Link>
            <div className="nav-links">
              <Link href="/products" className="nav-link">
                Products
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Modal Slot - Rendered in parallel with children */}
        {/* When navigating via Link, intercepted route fills this slot */}
        {modal}
      </body>
    </html>
  );
}
