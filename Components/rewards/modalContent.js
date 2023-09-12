 function CouponSuccessContent({ claimCoupon, closeModal,state }) {
  return (
    <div className="py-16 px-20">
      <h3 className="font-unilevershillingMedium text-2xl mb-3 text-primary-green">
        Congrats, You&apos;re going to spend{" "}
        {state?.onSelectedCoupon?.pointsValue} points to claims this coupon.
        Ready?
      </h3>
      <p className="font-unilevershilling text-gray-500">
        {state?.userPoints && state.userPoints} Points available
      </p>
      <button
        className="bg-green-800 p-2 px-16  justify-center mt-4 text-white font-shireTypesPro rounded-xl"
        onClick={() => claimCoupon()}
      >
        Claim
      </button>
      <br />
      <button
        className="bg-black p-2 px-16  justify-center mt-4 text-white font-shireTypesPro rounded-xl"
        onClick={() => closeModal()}
      >
        Cancel
      </button>
    </div>
  );
}

 function CouponFailureContent({  closeModal }) {
    return (
      <div className="py-16 px-20">
        <h3 className="font-unilevershillingMedium text-2xl mb-3 text-primary-green">
          There was an issue redeem yoour coupon
        </h3>
        <p className="font-unilevershilling text-gray-500">
          we ran into an unexpected issue. Please try redeeming again. if this doesnot work please try again later
        </p>
        <br />
        <button
          className="bg-black p-2 px-16  justify-center mt-4 text-white font-shireTypesPro rounded-xl"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
      </div>
    );
  }
  //DonateAMeal Popup
  function DonateMealPopup ({availableDonateMeal,donateMeal, handleCancle, getInitiativeResponsefunction}){
    return(
      <div className="py-16 px-20">
                <h3 className="font-unilevershillingMedium text-2xl mb-3 text-primary-green">
                  Congrats, You&apos;re going to use 1 tree token to plant a
                  tree.Ready?
                </h3>
                <p className="font-unilevershilling text-gray-500">
                  {availableDonateMeal?.DonateAMeal?.availableInitiatives} {donateMeal?.title === "Donate a meal" ? "meal" : "tree"}{" "}
                  token(s) available
                </p>
                <button
                  className="bg-green-800 p-2 px-16  justify-center mt-4 text-white font-shireTypesPro rounded-xl"
                  onClick={() => getInitiativeResponsefunction()}
                >
                  {donateMeal?.title === "Donate a meal"
                    ? "DONATE A MEAL"
                    : "PLANT A TREE"}
                </button>
                <br />
                <button className="bg-black p-2 px-16  justify-center mt-4 text-white font-shireTypesPro rounded-xl" onClick={()=>handleCancle()}>
                  Cancel
                </button>
              </div>
    )
  }
//Plant A Tree Popup
function PlantATreePopup({AvailablePlantTree, donateMeal, handleCancel, getInitiativeResponsefunction}){
  return(
    <div className="py-16 px-20">
            <h3 className="font-unilevershillingMedium text-2xl mb-3 text-green-800">
              Congrats, Youre going to use 1 tree token to plant a tree.Ready?
            </h3>
            <p className="font-unilevershilling text-gray-500">
              {AvailablePlantTree?.PlantATree.availableInitiatives} {donateMeal?.title === "Donate a meal" ? "meal" : "tree"}{" "}
              token(s) available
            </p>
            <button className="bg-green-800 p-2 px-16 justify-center mt-4 text-white text-base font-shireTypesPro rounded-xl"
            onClick={() => getInitiativeResponsefunction()}>
              {donateMeal?.title === "Donate a meal"
                ? "DONATE A MEAL"
                : "PLANT A TREE"}
            </button>
            <br />
            <button className="bg-black p-2 px-16  justify-center mt-4 text-white text-base font-shireTypesPro rounded-xl" 
            onClick={()=>handleCancel()}>
              Cancel
            </button>
            </div>
  )
}


  export {CouponSuccessContent, CouponFailureContent, DonateMealPopup, PlantATreePopup} 