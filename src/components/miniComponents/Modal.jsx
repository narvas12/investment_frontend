import React from "react";
import '../styleComponents/Modal.css'

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-3/4 lg:w-1/2 rounded-lg p-4 relative max-h-screen overflow-y-auto">

        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Scrollable content */}
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
