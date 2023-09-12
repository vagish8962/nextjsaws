import React, { useState, useEffect } from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import useFetchData from "@/Hooks/useFetchData";
import { useRouter } from "next/router";

function Results(props) {
  const [visibleItems, setVisibleItems] = useState(8);
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
  function getLabelByName(filterName) {
    const filter = leapFilters?.find(filter => filter.name === filterName);
    return filter ? filter.label : "";
  }
  const array = props.productsData;
  const { query } = useRouter().query;
  const handleLoadMore = () => {
    if (visibleItems + 8 <= array.length) {
      setVisibleItems(visibleItems + 8);
    } else {
      props.changePage();
      if (visibleItems + 8 <= array.length) {
        setVisibleItems(visibleItems + 8);
      }
    }
  };
  return (
    <>
      <section className="mb-20 mt-10">
        <div className="w-full flex justify-between p-4">
          <h1 className="font-bold text-2xl font-unilevershillingBold">{`‘${query}’ Products (${visibleItems})`}</h1>
        </div>
        <article className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
          {array.slice(0, visibleItems).map((item) => (
            <div key={uuid()} className="group relative rounded-2xl overflow-hidden bg-white">
              <Image
                src={item?.productImages[0]}
                alt={item?.name}
                width={100}
                height={100}
                className="w-full"
              />
              <div className="px-4 pt-4">
                {item?.leapAttributes.map((attribute) => {
                  const label = getLabelByName(attribute);
                  return label.length > 0 && (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2 font-unilevershilling" key={attribute.name}>
                      {label}
                    </span>
                  );
                })}
              </div>
              <div className="px-4 py-4">
                <div className="text-lg mb-2 font-unilevershilling">
                  {item?.name}
                </div>
                <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling">
                  <span className="font-semibold font-unilevershillingMedium">
                    +{item?.points}
                  </span>{" "}
                  coins
                </div>
              </div>
            </div>
          ))}
        </article>
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="text-1xl text-white my-10 font-unilevershillingMedium bg-green-800 rounded-lg px-20 py-3"
          >
            Load more
          </button>
        </div>
      </section>
    </>
  );
}

export default Results;
