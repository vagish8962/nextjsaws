import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import useFetchData from "@/Hooks/useFetchData";

function MenuOptions() {
  const [
    { response: filterData, error: filterError, isLoading: filterLoading },
    fetchFilterData,
  ] = useFetchData();
  const handleFetchFilterData = () => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/products-filters?language=en`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchFilterData(apiUrl, headers, method);
  };
  useEffect(() => {
    handleFetchFilterData();
  }, []);
  const leapFilters = filterData?.leapFilters;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-col font-unilevershillingMedium sm:flex-row justify-center items-center w-full text-center sm:text-left sm:w-auto sm:ml-10">
      <Link className="p-2 sm:p-0 sm:px-4 sm:py-2 text-green-900" href="/home">Home</Link>
      <div className="relative inline-block group" ref={dropdownRef}>
        <div onMouseOver={handleMouseOver} className="flex items-center justify-evenly">
          <Link href="/products" className="text-green-900"><div className="p-2 sm:p-0 sm:px-4 sm:py-2 cursor-pointer">
            Products
          </div></Link>
          <div className="cursor-pointer transform transition-transform duration-300 text-green-900">
            {isDropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleDropdown}
                style={{ transform: `rotate(${isDropdownOpen ? "0deg" : "180deg"})` }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleDropdown}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute w-[300px] z-50 mt-2 py-2 px-4 bg-white rounded-lg shadow-lg">
            {leapFilters?.map((item, index) => (
              <Link href={`/products/${item.label.toLowerCase().replace(/\s+/g, "-")}`} className="text-green-900 block tracking-wide text-lg font-unilevershilling p-2 hover:bg-gray-200" key={`l${index}`}>{item.label}</Link>
            ))}
          </div>
        )}
      </div>
      <Link className="font-bold p-2 sm:p-0 sm:px-4 sm:py-2 text-green-900" href="/rewards">Rewards</Link>
    </div>
  );
}

export default MenuOptions;
