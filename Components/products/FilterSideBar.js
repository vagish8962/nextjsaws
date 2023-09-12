import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useFetchData from "@/Hooks/useFetchData";
import Link from "next/link";

function FiltersSidebar({ onSearch, onFilterBrands, onFilterAttribute }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);
  const [
    { response: filterData, error: filterError, isLoading: filterLoading },
    fetchFilterData,
  ] = useFetchData();
  const [
    { response: brandData, error: brandError, isLoading: brandLoading },
    fetchBrandData,
  ] = useFetchData();

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFetchFilterData = () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products-filters?language=en`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchFilterData(apiUrl, headers, method);
  };

  const handleFetchBrandData = () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/brands`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchBrandData(apiUrl, headers, method);
  };

  useEffect(() => {
    handleFetchFilterData();
    handleFetchBrandData();
  }, []);

  const handleCheckBoxChange = (checkboxName) => {
    setCheckedFilters((prevSelectedValues) => {
      if (prevSelectedValues.includes(checkboxName)) {
        return prevSelectedValues.filter((value) => value !== checkboxName);
      } else {
        return [...prevSelectedValues, checkboxName];
      }
    });
  };

  const handleCheckBoxChangeBrand = (checkboxName) => {
    setCheckedBrands((prevSelectedValues) => {
      if (prevSelectedValues.includes(checkboxName)) {
        return prevSelectedValues.filter((value) => value !== checkboxName);
      } else {
        return [...prevSelectedValues, checkboxName];
      }
    });
  };

  const searchFromFilter = () => {
    // const allFiltersSelected = checkedFilters.concat(checkedBrands).join(",");
    // onFilterSearch(allFiltersSelected);
    onFilterBrands(checkedBrands.join(","));
    onFilterAttribute(checkedFilters.join(","));
  };

  return (
    <div className="basis-1/4 h-full sticky top-0">
      <article className="bg-green-800 p-10 rounded-xl mb-5">
        <p className="text-white lg:text-lg font-unilevershillingMedium mb-5">
          Reward yourself with coupons redeemable at Walmart
        </p>
        <Link
          href={"/"}
          className="bg-white text-green-800 font-shireTypesPro rounded-xl py-3 px-6"
        >
          Sign in / Sign up
        </Link>
      </article>
      {/* ------------- */}

      <article className="bg-white rounded-xl">
        <div className="px-4 py-3">
          <p className="text-green-800 text-base font-unilevershillingMedium">
            Filters
          </p>
        </div>

        <div className="flex items-center border mx-3">
          <input
            type="text"
            placeholder="Search for a product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow outline-none"
          />
          <button onClick={handleSearch} className="px-3">
            <FaSearch className="text-gray-500" />
          </button>
        </div>

        <article className="overflow-y-scroll max-h-96">
          <h2 className="text-lg mb-2 mt-8 border-b p-3 border-gray-300 font-unilevershilling">
            Leap Rewards Attributes
          </h2>
          <div className="space-y-2 mt-4">
            {filterData?.leapFilters?.map((value) => (
              <label
                className="flex justify-between items-center border-b p-3 border-gray-300 font-unilevershilling"
                key={value.name}
              >
                {value.label}
                <input
                  type="checkbox"
                  onChange={() => handleCheckBoxChange(value.name)}
                  className="form-checkbox mr-2 w-5 h-5 checbox-style"
                />
              </label>
            ))}
          </div>
          <h2 className="text-lg mb-2 mt-4 border-b p-3 border-gray-300 font-unilevershilling">
            Brand
          </h2>
          <div className="space-y-2 mt-4">
            {brandData?.map((value) => (
              <label
                className="flex justify-between items-center border-b p-3 border-gray-300 font-unilevershilling"
                key={value.brandCode}
              >
                {value.brandName}

                <input
                  type="checkbox"
                  onChange={() => handleCheckBoxChangeBrand(value.brandCode)}
                  className="form-checkbox mr-2 w-5 h-5 checbox-style"
                />
              </label>
            ))}
          </div>
        </article>

        <div className="w-full px-2 mb-4 mt-2 flex justify-center">
          <button
            onClick={searchFromFilter}
            className="bg-green-800 text-white rounded-xl py-3 px-6 font-unilevershilling w-64 mb-5"
          >
            Apply Filters
          </button>
        </div>
      </article>
    </div>
  );
}

export default FiltersSidebar;
