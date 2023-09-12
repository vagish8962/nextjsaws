import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Productimg from "@/assets/images/dove-deo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function ProductImage({ productDetail }) {
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    if (productDetail != null) {
      setProductImages(productDetail.productImages);
    }
  }, [productDetail]);

  return (
    <div className="basis-1/2 md:basis-1/2 sm:basis-1">
      <article className="px-4 md:pb-10 bg-white mt-8 mb-8 rounded-lg lg:h-screen sticky top-0">
        <Swiper
          className="lg:w-96"
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination]}
        >
          {productImages.length > 0 &&
            productImages.map((productImg, index) => (
              <SwiperSlide
                key={index}
                className="!flex flex-col items-center lg:pb-20 lg:pt-20"
              >
                <img
                  src={productImg}
                  alt={productDetail?.brandName}
                  layout="intrinsic"
                />
                <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs">
                  <span className="font-semibold">
                    + {productDetail?.points}
                  </span>{" "}
                  coins
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </article>
    </div>
  );
}
export default ProductImage;
