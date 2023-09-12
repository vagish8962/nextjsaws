// pages/results/[query].js
import { useRouter } from "next/router";
import useFetchData from "@/Hooks/useFetchData";
import { useEffect, useState } from "react";
import NoResult from "@/Components/noResults";
import ProductsPage from "@/Components/searchResult";
import Loading from "@/Commons/loading";
import ErrorResult from "@/Components/errorResults";

const SearchResultPage = () => {
  const [{ response, error, isLoading }, fetchData] = useFetchData();
  const router = useRouter();
  const { query } = router.query;

  const handleSearch = () => {
    const apiUrl = `https://na-lesp.unileversolutions.com/content/ca/products?from=0&query=${query}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchData(apiUrl, headers, method, {});
  };

  useEffect(() => {
    if (query != null) handleSearch();
  }, [query]);

  // console.log(error);

  return (
    <div
      className={`min-h-[70vh] bg-green-500 ${
        error ? "flex items-center" : ""
      }`}
    >
      {error ? (
        <ErrorResult></ErrorResult>
      ) : isLoading ? (
        <Loading></Loading>
      ) : response?.length ? (
        <ProductsPage query={query}></ProductsPage>
      ) : (
        !isLoading && query && <NoResult query={query}></NoResult>
      )}
    </div>
  );
};

export default SearchResultPage;
