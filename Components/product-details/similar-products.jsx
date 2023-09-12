import React, { useEffect, useState } from "react";
// import Productimg from "@/assets/images/product-image.png";
// import Image from "next/image";
// import Link from "next/link";
import useFetchData from "@/Hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { allLeapFilters } from "@/constants";

function SimilarProduct({ gtin }) {
  const [
    {
      response: similarProduct,
      error: similarProductError,
      isLoading: similarProductLoading,
    },
    fetchSimilarProduct,
  ] = useFetchData();

  useEffect(() => {
    if (gtin) {
      handleFetchSimilarProducts();
    }
  }, [gtin]);

  const handleFetchSimilarProducts = () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products/${gtin?.gtin}/similar`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchSimilarProduct(apiUrl, headers, method);
  };

  return (
    <section className="mb-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl text-black font-bold">Similar products</h2>
      </div>
      <div className="flex space-x-4" style={{ width: "50rem" }}>
        <Swiper spaceBetween={30} slidesPerView={3}>
          {similarProduct?.map((value, index) => (
            <SwiperSlide key={index}>
              <div
                className="basis-1/3 rounded-2xl overflow-hidden bg-white"
                key={index}
              >
                <img
                  src={value.productImages[0]}
                  alt={value.brandName}
                  layout="intrinsic"
                  className="w-full"
                />
                <div className="px-4 pt-4">
                  {allLeapFilters
                    ?.filter((filterItem) =>
                      value?.leapAttributes.includes(filterItem.name)
                    )
                    .map((filterItem, index) => (
                      <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2"
                        key={index}
                      >
                        {filterItem.label}
                      </span>
                    ))}
                </div>
                <div className="px-4 py-4">
                  <div className="text-lg mb-2">{value.description}</div>
                  <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs">
                    <span className="font-semibold">+ {value.points}</span>{" "}
                    coins
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SimilarProduct;
