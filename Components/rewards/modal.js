//import Link from "next/link";
import React from "react";
import { useEffect, useRef } from "react";

function Modalpopup({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <article class="fixed top-0 left-0 z-50 w-full p-4 h-full overflow-y-auto overflow-x-hidden outline-none bg-black bg-opacity-50">
        <div ref={modalRef}>
          <div class="relative w-full max-w-2xl max-h-full m-auto mt-32">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 text-center">
                    {children}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
export default Modalpopup;

