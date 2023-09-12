import React, { useEffect, useState } from "react";
import FiltersSidebar from "@/Commons/FilterSidebar";
import useFetchData from "@/Hooks/useFetchData";
import ProductListing from "./productListing";
import Loading from "@/Commons/loading";
import ErrorResult from "../errorResults";
import { useRouter } from "next/navigation";

function ProductsPage({ query }) {
  const [productsData, setProductsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const router = useRouter();
  const [
    { response: response1, error: error1, isLoading: isLoading1 },
    fetchData1,
  ] = useFetchData();
  const [
    { response: response2, error: error2, isLoading: isLoading2 },
    fetchData2,
  ] = useFetchData();

  useEffect(() => {
    handleFetchData();
  }, [query]);

  useEffect(() => {
    if (pageNumber != 0)
      handleLoadMoreFetchData();
  }, [pageNumber]);

  useEffect(() => {
    handleProductsData();
  }, [response1]);

  useEffect(() => {
    loadMore();
  }, [response2]);

  const handleProductsData = () => {
    if (response1)
      setProductsData(response1);
  };

  const loadMore = () => {
    if (response2)
      setProductsData((prev) => [...prev, ...response2])
  }

  const handleFetchData = () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products?from=0&query=${query.trim()}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchData1(apiUrl, headers, method);
    handleProductsData();
  };

  const handleLoadMoreFetchData = () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products?from=${pageNumber}&query=${query.trim()}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchData2(apiUrl, headers, method);
  };

  const changePage = () => {
    setPageNumber(pageNumber + 1);
  };

  const onFilter = (data) => {
    const brandsToFilter = [...data.BrandNames]
    const attributesToFilter = [...data.leapAttributes]
    console.log(productsData);
    console.log(brandsToFilter, attributesToFilter)
    if (brandsToFilter.length == 0 && attributesToFilter.length == 0) {
      handleFetchData();
      return;
    }
    const filteredProducts = productsData.filter((product) => {
      const brandMatch = brandsToFilter.includes(product.brandName);
      const attributesMatch = product.leapAttributes.some((attribute) =>
        attributesToFilter.includes(attribute)
      );
      return brandMatch || attributesMatch;
    });
    // console.log(productsData, filteredProducts);
    setProductsData(filteredProducts)
  }
  const onSearch = (data) => {
    router.push(`/results/${data}`)
  }
  const onClear = () => {
    // console.log(query)
    handleFetchData();
  }
  return (
    <>
      <section className="bg-green-500">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
            <FiltersSidebar onFilter={onFilter} onSearch={onSearch} onClear={onClear} />
            {isLoading1 || isLoading2 ? <Loading></Loading> : (error1 || error2 ? <ErrorResult></ErrorResult> : <ProductListing changePage={changePage} productsData={productsData} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsPage;