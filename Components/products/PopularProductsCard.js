import React from "react";

function PopularProductsCard({ popularProduct }) {
  return (
    <div>
      <div
        className="bg-white rounded-lg shadow-md p-2 mb-4"
        style={{ width: "18rem" }}
      >
        <div className="relative overflow-hidden rounded-t-lg aspect-w-3 aspect-h-4">
          <img
            src={popularProduct?.productImages[0]}
            alt={popularProduct?.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-2">
          <p className="text-sm font-semibold mb-1">{popularProduct?.name}</p>
          <p className="text-xs text-gray-600 mb-1">
            {popularProduct?.description}
          </p>
          <div className="flex items-center mb-1">
            <p className="text-green-600 mr-1 text-xs">
              {popularProduct?.leapAttributes[0]} and{" "}
              {popularProduct?.leapAttributes.length - 1} more
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-xs">{popularProduct?.points}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProductsCard;
