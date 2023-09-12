import React, { useEffect } from "react";

function ErrorModal({ showModal, onClose }) {
    useEffect(() => {
        if (showModal) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [showModal]);

    return (
        showModal && (
            <div className="success-modal flex justify-center items-center">
                <div className="bg-overlay absolute inset-0"></div>
                <div className="modal-content">
                    <div className="text-center font-unilevershillingBold text-3xl text-red">Error Occured</div>
                    <button onClick={onClose} className="bg-primary-green hover:bg-green-700 text-white text-lg font-bold text-center py-3 px-6 rounded-md mt-4 cursor-pointer transition duration-300 ease-in-out">
                        Return to Profile
                    </button>
                </div>
            </div>
        )
    );
}

export default ErrorModal;
