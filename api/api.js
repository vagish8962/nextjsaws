import useFetchData from "@/Hooks/useFetchData";

const useApi = () => {
  const [{ response, error, isLoading }, fetchData] = useFetchData();

  const fetchSimilarProduct = async (gtin) => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products/${gtin}/similar`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": process.env.xAPi,
    };
    const method = "GET";

    try {
      await fetchData(apiUrl, headers, method);
      return response;
    } catch (error) {
      console.error("Error fetching similar product:", error);
      throw error;
    }
  };

  const fetchFiltersData = async () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products-filters?language=en`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";

    try {
      const response = await fetch(apiUrl, { method, headers });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching filters data:", error);
      throw error;
    }
  };

  const fetchCategoryProducts = async (queryValue, pageNumber) => {
    const query = queryValue || "";
    const apiUrl = `${
      process.env.Api_EndPoint
    }/content/ca/products?from=${pageNumber}&query=${query.trim()}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";

    try {
      const response = await fetch(apiUrl, { method, headers });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Products data:", error);
      throw error;
    }
  };

  const fetchCategoryWholeDetails = async (category) => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/static/content?language=en&type=${category}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";

    try {
      const response = await fetch(apiUrl, { method, headers });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Products data:", error);
      throw error;
    }
  };

  const fetchEcoHacks = async () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/static/content?language=en&type=ecohacks`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";

    try {
      const response = await fetch(apiUrl, { method, headers });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Products data:", error);
      throw error;
    }
  };

  const fetchProductsAcctoAttributes = async (
    atribute,
    pageNumber,
    size,
    brandCode,
    searchFilter
  ) => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products?size=${
      size || 20
    }&brandCodes=${brandCode || ""}&from=${pageNumber || 0}&query=${
      searchFilter || ""
    }&leapAttributes=${atribute || ""}&language=en&gtins=`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";

    try {
      const response = await fetch(apiUrl, { method, headers });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Products data:", error);
      throw error;
    }
  };

  return {
    fetchSimilarProduct,
    fetchCategoryProducts,
    fetchFiltersData,
    fetchEcoHacks,
    fetchProductsAcctoAttributes,
    fetchCategoryProducts,
    fetchCategoryWholeDetails,
  };
};

export default useApi;
