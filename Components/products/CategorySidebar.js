import useApi from "@/pages/api/api";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CategorySidebar = ({
  categoryList,
  selCategoryValue,
  setSelectedCategoryText,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    "isSustainablySourcedAccredited"
  );
  const [categoryDetail, setCategoryDetail] = useState();
  const api = useApi();

  useEffect(() => {
    if (selectedCategory) {
      const queryvalue = capitalizeFirstLetter(selectedCategory);
      fetchCategorDetails(queryvalue);
    }
  }, [selectedCategory]);

  function capitalizeFirstLetter(inputString) {
    const attributeDescription = "attributeDescription";
    const capitalizedString =
      inputString.charAt(0).toUpperCase() + inputString.slice(1);
    return `${attributeDescription}${capitalizedString}`;
  }

  const fetchCategorDetails = async (value) => {
    try {
      const categoryValue = await api.fetchCategoryWholeDetails(value);
      setCategoryDetail(categoryValue);
      setSelectedCategoryText(categoryValue?.productListTitle);
    } catch (error) {
      console.error("Error fetching category Details", error);
    }
  };

  const setCategory = (value) => {
    selCategoryValue(value.name);
    setSelectedCategory(value.name);
  };

  return (
    
      <div className="flex flex-row items-center">
        <div className="mt-10 mb-10">
          <div className="bg-white rounded-xl p-5 mb-5">
            <h1 className="font-unilevershillingMedium text-xl mb-4">{categoryDetail?.title}</h1>
            <p className="text-base font-unilevershilling">{categoryDetail?.description}</p>
          </div>

          <div className="bg-white rounded-xl p-5 mb-5">
          <ul >
          {categoryList.map((category, index) => (
              <li key={index} onClick={() => setCategory(category)} className="py-3 border-black font-unilevershilling border-b cursor-pointer">{category.label}</li>

          ))}
          </ul>
          </div>

          {/* After Login Hide this Section   */}
            <article className="bg-green-800 p-10 rounded-xl flex flex-col justify-center text-center">
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
        </div>
      </div>
  
  );
};

export default CategorySidebar;
