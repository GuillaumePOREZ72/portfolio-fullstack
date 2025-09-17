import  { useEffect, useRef } from "react";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
}

export default function VideoModal({
  open,
  onClose,
  videoId,
  title = "Présentation vidéo",
}: VideoModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (open) {
      lastFocusedRef.current = document.activeElement as HTMLElement;
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else if (lastFocusedRef.current) {
      lastFocusedRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal modal-open"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box w-11/12 max-w-4xl p-0 bg-base-200">
        <div className="flex items-center justify-between px-5 pt-4">
          <h2 className="text-sm font-semibold">{title}</h2>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Fermer"
            className="btn btn-sm btn-ghost"
          >
            ✕
          </button>
        </div>
        <div className="mt-3">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.loom.com/embed/${videoId}`}
              title={title}
              allow="fullscreen"
              loading="lazy"
              className="w-full h-full rounded-b-lg"
            />
          </div>
        </div>
        <div className="p-4 flex justify-end">
          <button className="btn btn-outline btn-sm" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
      <div className="modal-backdrop bg-black/50" onClick={onClose} />
    </div>
  );
}
