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
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
                </h3>
                <button
                  type="button"
                  onClick={onClose}
                  data-dismiss="modal"
                  aria-label="Close"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>

              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  We evaluate a products sustainability impact using a LEAP
                  score. Products are scored across five categories: (1)
                  Sustainable packaging, (2) PETA Approved,(3) Better packaging,
                  (4) Brands with purpose and (5) Plant based. Description text
                  goes here, description text goes here, description text goes
                  here, description text goes here, description text goes here,
                  description text goes here, description text goes here.
                </p>
                <h1>Sustainably sourced</h1>
                <br />
                <p>
                  Sustainable packaging is packaging that has minimal impact on
                  the environment. We examine a product’s packaging based on the
                  “3 R’s”, Reduce, Reuse and Recycle.
                </p>
                <h1>PETA approved</h1>
                <br />
                <p>
                  Sustainable packaging is packaging that has minimal impact on
                  the environment. We examine a product’s packaging based on the
                  “3 R’s”, Reduce, Reuse and Recycle.
                </p>
                <h1>Better Packaging</h1>
                <br />
                <p>
                  Sustainable packaging is packaging that has minimal impact on
                  the environment. We examine a product’s packaging based on the
                  “3 R’s”, Reduce, Reuse and Recycle.
                </p>
                <h1>Brands with Purpose</h1>
                <br />
                <p>
                  Sustainable packaging is packaging that has minimal impact on
                  the environment. We examine a product’s packaging based on the
                  “3 R’s”, Reduce, Reuse and Recycle.
                </p>
                <h1>Plant-based</h1>
                <br />
                <p>
                  Sustainable packaging is packaging that has minimal impact on
                  the environment. We examine a product’s packaging based on the
                  “3 R’s”, Reduce, Reuse and Recycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
export default Modalpopup;
