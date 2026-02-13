// ============================================================
// MODAL COMPONENT (Client Component)
// Reusable modal wrapper with close functionality.
// Uses useRouter for programmatic navigation on close.
// ============================================================

"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ children, title }: ModalProps) {
  const router = useRouter();

  // Close modal and go back in history
  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleClose]);

  // Close when clicking overlay (not content)
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" role="dialog" aria-modal="true">
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">{title || "Quick View"}</h2>
          <button
            className="modal-close"
            onClick={handleClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
