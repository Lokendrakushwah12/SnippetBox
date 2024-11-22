import { motion } from "framer-motion";
import React from "react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed w-full h-full inset-0 top-0 flex items-center justify-center z-10">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-black fixed inset-0 z-0" // Ensure it's positioned relative to the main modal
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="relative bg-[#121212] border-2 border-[#212121] rounded-2xl shadow-lg p-4 z-[100]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ed2236"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-alert-triangle"
            >
              <path d="M12 9v4"></path>
              <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"></path>
              <path d="M12 16h.01"></path>
            </svg>
            <h3 className="text-lg font-semibold">Confirm Deletion</h3>
            <p>Are you sure you want to delete this Snippet?</p>
            <div className="flex w-full justify-end gap-2 mt-4">
              <button
                onClick={onClose}
                className="w-full rounded-xl bg-neutral-800 px-4 py-2 transition-all hover:bg-neutral-700/60"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="w-full rounded-xl bg-[#ed2236] px-4 py-2 text-white transition-all hover:bg-[#d61c2e]"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default DeleteModal;
