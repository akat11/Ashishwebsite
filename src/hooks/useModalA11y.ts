import { useEffect } from 'react';

/**
 * Custom hook to handle modal accessibility:
 * - Locks document body scroll while modal is active.
 * - Listens for 'Escape' key presses and invokes the onClose callback.
 * - Restores body overflow cleanly upon closing or unmounting.
 */
export function useModalA11y(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
}
