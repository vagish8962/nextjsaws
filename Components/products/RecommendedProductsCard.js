//import { useRouter } from "next/router";
import React from "react";

function RecommendedProductsCard({ recomandedProduct, onClick }) {
  return (

      <div className="group relative rounded-2xl overflow-hidden bg-white">
        <div className="relative overflow-hidden rounded-t-lg aspect-w-3 aspect-h-4">
          <img
            src={recomandedProduct?.productImages[0]}
            alt={recomandedProduct?.brandName}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="px-4 py-4">
          <h3 className="text-lg mb-2 font-unilevershilling line-clamp-3">
            {recomandedProduct?.name}
          </h3>
          <div className="flex items-center">
            <p className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling">
              <span className="font-semibold font-unilevershillingMedium">+{recomandedProduct?.points}</span> coins</p>
          </div>
        </div>
      </div>

  );
}

export default RecommendedProductsCard;
