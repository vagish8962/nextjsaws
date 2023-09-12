import React, { useEffect, useState } from "react";
// import Productimg from "@/assets/images/product-image.png";
// import Image from "next/image";
// import Link from "next/link";
import useFetchData from "@/Hooks/useFetchData";

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

      </div>
    </section>
  );
}

export default SimilarProduct;
