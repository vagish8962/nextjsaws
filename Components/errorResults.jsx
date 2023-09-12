import React from "react";

function ErrorResult() {
    return (
        <div className="w-1/2 h-auto bg-green-500 flex p-4 flex-col my-auto mx-auto justify-center items-center">
            <h1 className="font-bold text-2xl">Oops! something went wrong</h1>
            <p className="text-lg">Please check your internet or refresh this page</p>
            <button
                className="bg-primary-green cursor-pointer w-1/2 mt-6 text-lg text-white font-bold py-3 px-6 rounded-lg"
                type="button"
                onClick={() => window.location.reload()}
            >
                Refresh
            </button>
        </div>
    );
}

export default ErrorResult;
