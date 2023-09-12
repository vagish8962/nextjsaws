import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Productimg from "@/assets/images/dove-deo.png";


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

      </article>
    </div>
  );
}
export default ProductImage;
