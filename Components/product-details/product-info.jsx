import React, { useEffect } from "react";
import ProductRating from "./product-rating";
import SimilarProduct from "./similar-products";
import Modalpopup from "../modal";
import { useState } from "react";
import { allLeapFilters } from "@/constants";

function ProductInfo({ productDetail }) {
  const [isActive, setIsActive] = useState(false);
  // Popup Code //
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productDetails, setProductDeatils] = useState([]);
  const [productAttributes, setProductAttributes] = useState([]);

  useEffect(() => {
    if (productDetail != null) {
      setProductDeatils(productDetail);
      const labelsToShow = allLeapFilters
        .filter((filterItem) =>
          productDetail.leapAttributes.includes(filterItem.name)
        )
        .map((filterItem) => filterItem.label);
      setProductAttributes(labelsToShow);
    }
  }, [productDetail]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <>
      <div className="basis-1/2 md:basis-1/2 sm:basis-1">
        <article className="mt-8 mb-5 p-5 bg-white rounded-lg">
          <div className="mb-5">
            <h2 className="text-lg font-bold">{productDetails?.brandName}</h2>
            <div
              className={
                isActive ? "line-clamp-none" : "lg:line-clamp-1 line-clamp-2"
              }
            >
              <p className="text-sm">{productDetails?.description}</p>
            </div>
            <button
              onClick={handleClick}
              className="text-green-900 font-bold pt-1"
            >
              More
            </button>
          </div>
          <h4 className="text-sm font-bold">Product attributes</h4>
          <p className="text-sm mb-5">Tap a row to find out more</p>
          {productAttributes?.map((value, index) => (
            <div
              className="flex max-w-xs justify-between rounded-lg bg-seagreen p-2 mb-2"
              key={index}
            >
              <div className="text-white">{value}</div>
              <div className="text-white text-lg font-bold">+20</div>
            </div>
          ))}
          {/* <div className="flex max-w-xs justify-between rounded-lg bg-seagreen p-2 mb-2">
            <div className="text-white">Sustainably sourced</div>
            <div className="text-white text-lg font-bold">+20</div>
          </div>
          <div className="flex max-w-xs justify-between rounded-lg bg-seagreen p-2 mb-2">
            <div className="text-white">PETA approved</div>
            <div className="text-white text-lg font-bold">+20</div>
          </div>
          <div className="flex max-w-xs justify-between rounded-lg bg-seagreen p-2 mb-2">
            <div className="text-white">Brands with purpose</div>
            <div className="text-white text-lg font-bold">+20</div>
          </div> */}
          <button
            onClick={openModal}
            className="text-green-900 font-bold pt-2 "
          >
            {" "}
            How are my coins calculated?
          </button>
          <Modalpopup isOpen={isModalOpen} onClose={closeModal}></Modalpopup>
        </article>

        <ProductRating rating={productDetail} />
        <SimilarProduct gtin={productDetail} />
      </div>
    </>
  );
}
export default ProductInfo;
