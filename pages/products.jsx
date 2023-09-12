import React, { useEffect, useState } from "react";
import FiltersSidebar from "@/Components/products/FilterSideBar";
//import PopularProductsCard from "@/Components/products/PopularProductsCard";
//import RecommendedProductsCard from "@/Components/products/RecommendedProductsCard";
//import useFetchData from "@/Hooks/useFetchData";
import ProductListing from "@/Components/products/product-listing";

import Breadcrumb from "@/Components/breadcrumb";
import useApi from "@/api/api";
import { useRouter } from "next/router";

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterAttribute, setFilterAttribute] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const api = useApi();
  const router = useRouter();

  useEffect(() => {
    getProductsDataForAttributeAndFilter();
  }, [filterBrand, filterAttribute]);

  const getProductsDataForAttributeAndFilter = async (query) => {
    const queryValue = query || searchTerm;
    try {
      const products = await api.fetchProductsAcctoAttributes(
        filterAttribute,
        pageNumber,
        20,
        filterBrand,
        queryValue
      );
      setProductsData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = (term) => {
    setProductsData([]);
    setSearchTerm(term);
    setPageNumber(0);
    getProductsDataForAttributeAndFilter(term);
  };

  const handleProductsData = (newData) => {
    if (Array.isArray(newData)) {
      setProductsData((prevData) => [...newData, ...prevData]);
    }
  };

  const handleCardClick = (productId) => {
    router.push({
      pathname: "/product-details",
      query: { productId: productId },
    });
  };

  const changingPageData = async (pageNum) => {
    const queryValue = searchTerm;
    try {
      const products = await api.fetchProductsAcctoAttributes(
        filterAttribute,
        pageNum,
        20,
        filterBrand,
        queryValue
      );
      if (Array.isArray(products) && products.length > 0) {
        setProductsData((prevData) => [...prevData, ...products]);
      } else {
        console.log("No new data available or newData is not an array.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getAllFilterAttribute = (filter) => {
    setFilterAttribute(filter);
    setPageNumber(0);
  };

  const getAllFilterBrands = (filter) => {
    setFilterBrand(filter);
    setPageNumber(0);
  };

  return (
    <>
      <section className="bg-green-500">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
            <FiltersSidebar
              onSearch={handleSearch}
              onFilterBrands={getAllFilterBrands}
              onFilterAttribute={getAllFilterAttribute}
            />

            <article className="basis-3/4 pl-20 mt-10">
            <ProductListing
              productsData={productsData}
              setingPageNumber={changingPageData}
              singleProductClick={handleCardClick}
              pageNum={pageNumber}
            />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;
