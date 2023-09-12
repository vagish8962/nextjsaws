import React, { useEffect, useState } from "react";
import CategorySidebar from "@/Components/products/CategorySidebar";
// import CategoryCards from "@/Components/products/category-cards";
// import RecommendedProductsCard from "@/Components/products/RecommendedProductsCard";
import ProductListing from "@/Components/products/product-listing";
import useApi from "@/api/api";
import { useRouter } from "next/router";


function CategoryListing() {
  const router = useRouter();
  const [categoryListing, setCategoryListing] = useState([]);
  const [productListing, setProductListing] = useState([]);
  const [selectedListing, setSeletedListing] = useState(
    "isSustainablySourcedAccredited"
  );
  const [selectedCategory, setSelectedCategory] = useState(
    "Our sustainably sourced products"
  );
  const [pageNumber, setPageNumber] = useState(0);
  const api = useApi();
  useEffect(() => {
    getAllFilterData();
  }, []);

  useEffect(() => {
    getProductsAccCategories();
  }, []);

  const setSelectedCategoryText = (newText) => {
    setPageNumber(0);
    setSelectedCategory(newText);
  };

  const getAllFilterData = async () => {
    try {
      const filtersData = await api.fetchFiltersData();
      setCategoryListing(filtersData?.leapFilters);
    } catch (error) {
      console.error("Error fetching filters data:", error);
    }
  };

  const getProductsAccCategories = async (query, page) => {
    const pageNum = page;
    const queryValue = query || selectedListing;
    try {
      const products = await api.fetchProductsAcctoAttributes(
        queryValue,
        pageNum,
        20
      );
      setProductListing(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const changingPageData = async (pageNum) => {
    setPageNumber(pageNum);
    const queryValue = selectedListing;
    try {
      const products = await api.fetchProductsAcctoAttributes(
        queryValue,
        pageNum,
        20
      );
      if (Array.isArray(products) && products.length > 0) {
        setProductListing((prevData) => [...prevData, ...products]);
      } else {
        console.log("No new data available or newData is not an array.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchSingleCategory = (query) => {
    setPageNumber(0);
    const pageNum = 0;
    setProductListing([]);
    getProductsAccCategories(query, pageNum);
    setSeletedListing(query);
  };

  const handleCardClick = (productId) => {
    router.push({
      pathname: "/product-details",
      query: { productId: productId },
    });
  };

  return (

    <>

    <section className="bg-green-500">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">

          <article className="basis-1/4 h-full sticky top-0">
            <CategorySidebar
              categoryList={categoryListing}
              selCategoryValue={fetchSingleCategory}
              setSelectedCategoryText={setSelectedCategoryText}
            />
            </article>

            <article className="basis-3/4 pl-20 mt-10">
            <h2 className="text-lg mt-2 mb-5 font-unilevershillingMedium">{selectedCategory}</h2>

            
            <ProductListing
          productsData={productListing}
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

export default CategoryListing;
