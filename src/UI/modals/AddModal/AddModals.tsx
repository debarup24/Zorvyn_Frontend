import React, { type ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const AddModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed overflow-hidden inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 " onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-[#0f172a] p-6 shadow-2xl shadow-gray-600 border border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button onClick={onClose}>
            <X className="text-gray-400 hover:text-white" size={20} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AddModal;
