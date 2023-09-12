import React, { useEffect } from "react";
import ProductImage from "@/Components/product-details/product-image";
import ProductInfo from "@/Components/product-details/product-info";
import { useRouter } from "next/router";
import useFetchData from "@/Hooks/useFetchData";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  const [
    { response: productDetail, error: productError, isLoading: productLoading },
    fetchProductDetail,
  ] = useFetchData();

  useEffect(() => {
    handleFetchSingleProductDetail();
  }, []);

  const handleFetchSingleProductDetail = () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products/${productId}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchProductDetail(apiUrl, headers, method);
  };

  return (
    <>
      <article className="bg-orange-500">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
            <ProductImage productDetail={productDetail} />
            <ProductInfo productDetail={productDetail} />
          </div>
        </div>
      </article>
    </>
  );
}

export default ProductDetails;
