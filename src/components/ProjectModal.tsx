import React, { useEffect } from 'react';

type Props = {
  src: string;
  title?: string;
  onClose: () => void;
};

export default function ProjectModal({ src, title, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="max-w-5xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-medium">{title}</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-white bg-white/10 hover:bg-white/20 rounded px-3 py-1"
          >
            Close
          </button>
        </div>

        <div className="bg-black p-2 rounded">
          <img
            src={src}
            alt={title}
            className="w-full h-auto max-h-[80vh] object-contain block mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
