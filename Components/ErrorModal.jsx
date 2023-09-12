import React, { useEffect } from "react";

function ErrorModal(props) {
  useEffect(() => {
    if (props.showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [props.showModal]);

  return (
    props.showModal && (
      <div className="custom-modal-error flex justify-center items-center">
        <div className="modal-content">
          <div className="text-center text-3xl font-semibold tracking-wide">
            An error has occured
          </div>
          <p className="text-center text-xl tracking-wider">{props.message}</p>
          <button
            onClick={props.close}
            className="bg-primary-green hover:bg-green-700 text-white text-lg font-bold text-center py-3 px-6 rounded-2xl cursor-pointer transition duration-300 ease-in-out"
          >
            OK
          </button>
        </div>
      </div>
    )
  );
}

export default ErrorModal;
