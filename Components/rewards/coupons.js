import React, { useEffect, useReducer } from "react";
import {
  getCouponseAggregated,
  getContentStatictics,
  getUserPoints,
  redeemCoupon,
} from "@/api/api-handler-helpers";
import Modalpopup from "@/Components/rewards/modal";
import {CouponSuccessContent,CouponFailureContent} from "@/Components/rewards/modalContent";
import { useRouter } from "next/router";


const initialState = {
  couponsData: [],
  couponDescription: [],
  isOpenModal: false,
  onSelectedCoupon: {},
  userPoints: 0,
  filteredData: [],
  couponSuccess:true
};
import Image from "next/image";
import walmarticon from "@/assets/images/walmarticon.png";

const reducer = (state, action) => {
  switch (action.type) {
    case "COUPONS_DATA":
      return { ...state, couponsData: action.payload };
    case "COUPONS_DESCRIPTION":
      return { ...state, couponDescription: action.payload };
    case "MODAL":
      return { ...state, isOpenModal: action.payload };
    case "SELECTED_COUPON":
      return { ...state, onSelectedCoupon: action.payload };
    case "USER_POINTS":
      return { ...state, userPoints: action.payload };
    case "FILTERED_DATA":
      return { ...state, filteredData: action.payload };
      case "COUPON_SUCCESS":
        return { ...state, couponSuccess: action.payload };
    default:
      return state;
  }
};

const Coupons = ({ filter }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router=useRouter();

  useEffect(() => {
    getCouponseAggregatedfunction();
    getCouponseDescriptionfunction();
    fetchUserPoints();
  }, []);
  useEffect(() => {
    onFilter();
  }, [filter]);
  const getCouponseAggregatedfunction = () => {
    getCouponseAggregated()
      .then((res) => {
        dispatch({ type: "COUPONS_DATA", payload: res });
        dispatch({ type: "FILTERED_DATA", payload: res });
      })
      .catch((err) => {
        console.log("Something Went Wrong",err);
      });
  };

  const getCouponseDescriptionfunction = () => {
    getContentStatictics("couponsDescription")
      .then((res) => {
        dispatch({
          type: "COUPONS_DESCRIPTION",
          payload: res?.couponDescriptions,
        });
      })
      .catch((err) => {
        console.log("Something Went Wrong",err);
      });
  };

  const fetchUserPoints = () => {
    getUserPoints()
      .then((res) => {
        dispatch({ type: "USER_POINTS", payload: res?.balance });
      })
      .catch((err) => {
        console.log("Something Went Wrong",err);
      });
  };

  const closeModal = () => {
    dispatch({ type: "MODAL", payload: false });
  };

  const handleOnclickClaimButton = (couponData) => {
    dispatch({ type: "MODAL", payload: true });
    dispatch({ type: "SELECTED_COUPON", payload: couponData });
  };

  const onFilter = () => {
    const filterData = filter;
    if(filter?.length>0){
      const result = state.couponsData.filter(
        (obj) =>
          filterData.includes(obj.price.toString()) || filterData.includes(obj.brandCode)
      );
      dispatch({ type: "FILTERED_DATA", payload: result });
    }else{
      dispatch({ type: "FILTERED_DATA", payload: state.couponsData });

    }
    
  };

  const claimCoupon = () => {
    if (state.onSelectedCoupon.pointsValue < state.userPoints) {
      redeemCoupon(
        state.onSelectedCoupon.brandCode,
        state.onSelectedCoupon.pointsValue
      )
        .then((res) => {
          dispatch({ type: "MODAL", payload: false });
          router.push('/claimed')
        })
        .catch((err) => {
          console.log("Something Went Wrong",err);
          dispatch({ type: "COUPON_SUCCESS", payload: false });

        });
    }
  };
  return (
    <section>
      <main className="mb-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
        {state?.filteredData?.length > 0 &&
          state.filteredData?.map((couponData,index) => {
            const result = state.couponDescription?.filter(
              (word) => word.brandCode === couponData.brandCode
            );
            return (
              <div className="group relative rounded-2xl overflow-hidden bg-gray-100" key={`b${index}`}>
                  <article className="flex">
                    <div className="w-3/5 p-4">
                      <h3 className="mb-3 text-4xl font-unilevershillingBold">
                      -${couponData.price}
                    </h3>
                    <p className="font-unilevershillingMedium text-lg">{result[0]?.brand}</p>
                    <p className="text-gray-500 font-unilevershilling">
                    {result[0]?.description}</p>
                    <button
                    className="bg-green-800 py-3 flex justify-center text-base w-full mt-4 text-white font-shireTypesPro rounded-xl"
                    onClick={() => handleOnclickClaimButton(couponData)}
                  >
                    {" "}
                    Claim
                  </button>
                    </div>

                    <div className="bg-white w-2/5 py-3 px-2">
                      <div className="bg-orange-900 font-unilevershilling text-xs rounded-full px-1.5 py-1">
                      - {couponData.pointsValue} points
                    </div>
                      <img
                      src={`https://assets.unileversolutions.com/v1/${result[0]?.image.id}.${result[0]?.image.type}`}
                      className="rounded-t-2xl my-4 w-full h-[30vw] lg:h-[8vw] object-contain object-top"
                      alt=""
                      layout="intrinsic"
                    />
                    <div className="flex justify-between bg-gray-200  rounded-full mt-2 items-center p-0.5">
                    <span className="text-xs font-unilevershilling pl-2">Only at Walmart</span>
                    <span><Image src={walmarticon} width={25} height={25} alt="Reward Icon" /></span>
                  </div>
                    </div>
                  </article>
              </div>
            );
          })}
      </main>

      <Modalpopup isOpen={state.isOpenModal} onClose={closeModal}>
        {state.couponSuccess?(
      <CouponSuccessContent claimCoupon={claimCoupon} closeModal={closeModal} state={state}/>

        ):(
          <CouponFailureContent closeModal={closeModal}/>
        )}
      </Modalpopup>
    </section>
  );
};

export default Coupons;
