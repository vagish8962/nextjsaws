import React, { useState } from "react";
import { allLeapFilters } from "@/constants";
//import Image from "next/image";

function ProductListing({
  productsData,
  setingPageNumber,
  singleProductClick,
  pageNum,
}) {
  const loadMore = () => {
    setingPageNumber(pageNum + 1);
  };

  const selectProduct = (productId) => {
    singleProductClick(productId);
  };

  return (
    <>
      
          <article className="mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
            {productsData &&
              productsData.map((product, index) => (
                <div
                  onClick={() => selectProduct(product.gtin)}
                  key={index}
                  className="group relative rounded-2xl overflow-hidden bg-white"
                >
                  <img
                    src={product?.productImages[0]}
                    alt={product.name}
                    width={30}
                    height={50}
                    layout="intrinsic"
                    className="w-full"
                  />
                  <div className="px-4 pt-4">
                    {allLeapFilters
                      .filter((filterItem) =>
                        product?.leapAttributes?.includes(filterItem.name)
                      )
                      .map((filterItem, filterIndex) => (
                        <span
                          key={filterIndex}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2 font-unilevershilling"
                        >
                          {filterItem.label}
                        </span>
                      ))}
                  </div>
                  <div className="px-4 py-4">
                    <div className="text-lg mb-2 font-unilevershilling">
                      {product?.description}
                    </div>
                    <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling">
                      <span className="font-semibold font-unilevershillingMedium">
                        +{product?.points}
                      </span>{" "}
                      coins
                    </div>
                  </div>
                </div>
              ))}
          </article>
          <div className="flex justify-center">
            <button
              onClick={loadMore}
              className="text-1xl text-white my-10 font-unilevershillingMedium bg-green-800 rounded-lg px-20 py-3"
            >
              Load more
            </button>
          </div>
        
    </>
  );
}
export default ProductListing;
