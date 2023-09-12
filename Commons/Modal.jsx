import React, { useEffect } from "react";

function Modal({ showModal, onClose, children }) {
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  return showModal && <>{children}</>;
}

export default Modal;
