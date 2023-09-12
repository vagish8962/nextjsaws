import React from "react";
import { useRouter } from "next/router";

function NoResult({ query }) {
  const route = useRouter();
  const handleSuggestion = (suggestion) => {
    route.push(`/results/${suggestion}`);
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
  return (
    <div className="w-full h-[90vh] bg-green-500 flex justify-center items-center">
      <div className="flex flex-col items-center justify-evenly w-3/4 h-3/4">

        <h1 className="font-bold tracking-wide text-center text-3xl">
          {`Sorry, we couldn’t find any results for “${query}”`}
        </h1>
        <p className="tracking-wide text-xl">
          Please try searching for another product.
        </p>
        <div className="flex flex-col items-center w-3/4">
          <h1 className="text-2xl font-bold mb-4">Search Suggestions</h1>
          <div className="flex w-full justify-evenly">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white text-center w-auto rounded-xl font-semibold text-lg cursor-pointer"
                onClick={() => handleSuggestion(suggestion)} // Pass suggestion as an argument
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoResult;
