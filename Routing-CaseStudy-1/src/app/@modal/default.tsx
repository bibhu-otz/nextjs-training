// ============================================================
// MODAL SLOT DEFAULT
// This default.tsx is CRITICAL for parallel routes.
// 
// Purpose:
// - Provides a fallback when the @modal slot has no matching route
// - Returns null to render nothing (no modal) by default
// - Without this, you'd get a 404 when the modal shouldn't show
//
// When this renders null:
// - Initial page load (no modal should show)
// - Direct navigation to /products (no modal)
// - After closing the modal (returns to null state)
// ============================================================

export default function ModalDefault() {
  // Return null = render nothing in the modal slot
  // This is the expected behavior when no modal should be displayed
  return null;
}
