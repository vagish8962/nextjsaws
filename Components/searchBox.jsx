import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

function SearchBox() {
  const [searchItem, setSearchItem] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    const path = `/results/${searchItem}`;
    router.push(path);
    setSearchItem("");
    setShowSuggestions(false);
  };
  const dropdownRef = useRef(null)
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setShowSuggestions(false);
  };

  const handleSuggestion = (suggestion) => {
    console.log(`Clicked on suggestion: ${suggestion}`);
    setSearchItem(suggestion);
    // setShowSuggestions(false);
    // handleSearch();
  };

  const suggestions = [
    "dove",
    "mayonnaise",
    "domestos",
    "deodrant",
    "shower gel",
    "knorr",
    "cleaning",
    "moisturizer",
  ];
  const FilteredValues = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchItem.toLowerCase())
  );
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      <div className="flex items-center" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Search for a product"
          value={searchItem}
          onChange={handleChange}
          onFocus={handleFocus}
          // onBlur={handleBlur}
          className="flex-grow rounded-2xl w-80 p-2 pl-12 font-unilevershilling border-2 border-gray-300"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch} className="absolute left-4 top-2.5">
          <FaSearch className="text-green-900" size={22} />
        </button>
      </div>
      {showSuggestions && (
        <div className="bg-white z-50 shadow-md flex flex-col items-center absolute mt-2 w-[400px] rounded-xl">
          <div className="p-4 bg-gray-100 text-lg font-bold text-gray-600 rounded-t-xl font-unilevershilling">
            Search Suggestions
          </div>

          {FilteredValues.length > 0 ? (
            <div className="grid grid-cols-3 gap-2 p-4">
              {FilteredValues.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 bg-green-500 text-center w-auto rounded-xl font-unilevershilling text-base cursor-pointer"
                  onClick={() => handleSuggestion(suggestion)} // Pass suggestion as an argument
                >
                  {suggestion}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-center font-unilevershilling">No matches found</p>
          )}

          <button
            className="bg-primary-green cursor-pointer mb-10 w-3/4 mt-6 text-lg text-white font-unilevershilling py-3 px-6 rounded-lg"
            type="button"
            onClick={handleSearch}
          >
            View Results
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
