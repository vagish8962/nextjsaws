import React, { useEffect, useState } from "react";
import { getBrands } from "@/pages/api/api-handler-helpers";

const filterData = [
  {
    name: "Claim a $1 coupon",
    value: "1",
  },
  {
    name: "Claim a $2 coupon",
    value: "2",
  },
];  

function CouponSidebar({ onFilter }) {
  const [brandData, setBrandData] = useState([]);
  const [checkedFilters, setCheckedFilters] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);
  const fetchBrands = () => {  
    getBrands()
      .then((response) => {
        setBrandData(response);
      })
      .catch((error) => {
        console.log("Something Went Wrong",error);
      });
  };

  const handleCheckBoxChange = (checkboxName) => {
    setCheckedFilters((prevSelectedValues) => {
      if (prevSelectedValues.includes(checkboxName)) {
        return prevSelectedValues.filter((value) => value !== checkboxName);
      } else {
        return [...prevSelectedValues, checkboxName];
      }
    });
  };

  const handleFilter = () => {
    onFilter([...checkedFilters]);
  };

  return (
    <div className="basis-1/4 h-full sticky top-0">
      <article className="bg-white rounded-xl">
        <div className="px-4 py-3">
          <p className="text-green-800 text-base font-unilevershillingMedium">
            Filters
          </p>
        </div>
        <article className="overflow-y-scroll max-h-96">
          <h2 className="text-lg mb-2 mt-8 border-b p-3 border-gray-300 font-unilevershilling">
            Coupons
          </h2>
          <div className="space-y-2 mt-4">
            {filterData?.map((couponData) => (
              <label
                className="flex justify-between items-center border-b p-3 border-gray-300 font-unilevershilling"
                key={couponData.value}
              >
                {couponData.name}
                <input
                  type="checkbox"
                  onChange={() => handleCheckBoxChange(couponData.value)}
                  className="form-checkbox mr-2 w-5 h-5 checbox-style"
                />
              </label>
            ))}
          </div>
          <h2 className="text-lg mb-2 mt-4 border-b p-3 border-gray-300 font-unilevershilling">
            Brand
          </h2>
          <div className="space-y-2 mt-4">
            {brandData?.map((brandDetail) => (
              <label
                className="flex justify-between items-center border-b p-3 border-gray-300 font-unilevershilling"
                key={brandDetail.brandCode}
              >
                {brandDetail.brandName}

                <input
                  type="checkbox"
                  onChange={() => handleCheckBoxChange(brandDetail.brandCode)}
                  className="form-checkbox mr-2 w-5 h-5 checbox-style"
                />
              </label>
            ))}
          </div>
        </article>

        <div className="w-full px-2 mb-4 mt-2 flex justify-center">
          <button
            onClick={handleFilter}
            className="bg-green-800 text-white rounded-xl py-3 px-6 font-unilevershilling w-64 mb-5"
          >
            Apply Filters
          </button>
        </div>
      </article>
    </div>
  );
}

export default CouponSidebar;
