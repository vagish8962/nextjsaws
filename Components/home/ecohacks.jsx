import React, { useEffect, useState } from "react";
// import Image from "next/image";
// //import Link from "next/link";
// import ecohacksimg from "@/icons/images/eco-hacks.png";
// import hellmannsimg from "@/icons/images/hellmanns.png";
import useApi from "@/pages/api/api";
import { useRouter } from "next/router";
import { allLeapFiltersSeq, imageUrl } from "@/constants";

function Ecohacks() {
  const [productsData, setProductsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState(
    "isSustainablySourcedAccredited"
  );
  const [ecoHacks, setEcoHacks] = useState([]);

  const api = useApi();
  const router = useRouter();

  useEffect(() => {
    getProductsData();
  }, [selectedFilter]);

  useEffect(() => {
    getEcoHacks();
  }, []);

  const getProductsData = async () => {
    const queryValue = selectedFilter;
    try {
      const products = await api.fetchProductsAcctoAttributes(
        queryValue,
        pageNumber,
        5
      );
      setProductsData(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getEcoHacks = async () => {
    try {
      const products = await api.fetchEcoHacks();
      setEcoHacks(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
  };

  const handleCardClick = (productId) => {
    router.push({
      pathname: "/product-details",
      query: { productId: productId },
    });
  };

  const showAllProducts = () => {
    router.push({
      pathname: "/category-listing",
      query: { attributeId: selectedFilter },
    });
  };

  return (
    <>
      <section className="relative bg-green-500 py-20">
        <div className="container mx-auto">
          <div className="mb-4">
            <p className="text-black text-lg mb-2 font-unilevershillingBold">
              Discover products
            </p>
            <p className="font-unilevershilling text-sm">
              Selected by Leap Rewards
            </p>
          </div>
          <div className="mb-4">
            {allLeapFiltersSeq?.map((filter) => (
              <button
                key={filter.name}
                className={`inline-block rounded-md px-3 py-2 text-xs font-unilevershilling ${selectedFilter === filter.name
                    ? "bg-green-800 text-white"
                    : "bg-gray-200 text-black"
                  } mr-2 mb-2`}
                onClick={() => handleFilterClick(filter.name)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <article className="mb-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-4">
            {productsData?.slice(0, 5).map((product, index) => (
              <div
                onClick={() => handleCardClick(product.gtin)}
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-white cursor-pointer"
              >
                <img
                  src={product?.productImages[0]}
                  alt={product.name}
                  width={30}
                  height={50}
                  layout="intrinsic"
                  className="w-full"
                />
                <div className="px-4 pt-4">
                  {allLeapFiltersSeq
                    .filter((filterItem) =>
                      product?.leapAttributes?.includes(filterItem.name)
                    )
                    .map((filterItem, filterIndex) => (
                      <span
                        key={filterIndex}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs text-black mr-2 mb-2 font-unilevershilling"
                      >
                        {filterItem.label}
                      </span>
                    ))}
                </div>
                <div className="px-4 py-4">
                  <div className="text-lg mb-2 font-unilevershilling">
                    {product?.description}
                  </div>
                  <div className="bg-orange-900 inline-block rounded-xl p-1.5 text-xs font-unilevershilling">
                    <span className="font-semibold font-unilevershillingMedium">
                      +{product?.points}
                    </span>{" "}
                    coins
                  </div>
                </div>
              </div>
            ))}
            {productsData?.length > 0 ? (
              <div
                onClick={showAllProducts}
                className="group relative rounded-2xl overflow-hidden bg-white flex cursor-pointer"
              >
                <div className="px-4 py-4 m-auto">
                  <div className="text-lg mb-2 font-unilevershillingMedium">
                    See all
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        </div>

        <article className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0 mt-20">
            <article className="basis-auto">
              <p className="text-black text-lg mb-3 font-unilevershillingBold">
                Eco-hacks
              </p>

              <article className="flex space-x-4">
                {ecoHacks?.map((value, index) => (
                  <div
                    key={index}
                    className="basis-1/3 rounded-xl overflow-hidden bg-white cursor-pointer"
                  >
                    <img
                      src={imageUrl + value.image.id + "." + value.image.type}
                      alt={value.id}
                      layout="intrinsic"
                      className="w-full h-[160px] object-cover"
                    />

                    <div className="px-4 py-4">
                      <p className="text-base mb-3 font-unilevershilling line-clamp-2 h-[3.5vw]">
                        {value.title}
                      </p>
                      <p className="text-xs text-gray-500 font-unilevershilling">
                        By {value.author}
                      </p>
                    </div>
                  </div>
                ))}

                {/* <div className="basis-1/4 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={ecohacksimg}
                    alt=""
                    layout="intrinsic"
                    className="w-full"
                  />

                  <div className="px-4 py-4">
                    <p className="text-base mb-6 font-unilevershilling">
                      Love Beauty And Planet Shampoo
                    </p>
                    <p className="text-xs text-gray-500 font-unilevershilling">
                      By Alan Ruell
                    </p>
                  </div>
                </div>



                <div className="basis-1/4 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={ecohacksimg}
                    alt=""
                    layout="intrinsic"
                    className="w-full"
                  />

                  <div className="px-4 py-4">
                    <p className="text-base mb-6 font-unilevershilling">
                      Love Beauty And Planet Shampoo
                    </p>
                    <p className="text-xs text-gray-500 font-unilevershilling">
                      By Alan Ruell
                    </p>
                  </div>
                </div>



                <div className="basis-1/4 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={ecohacksimg}
                    alt=""
                    layout="intrinsic"
                    className="w-full"
                  />

                  <div className="px-4 py-4">
                    <p className="text-base mb-6 font-unilevershilling">
                      Love Beauty And Planet Shampoo
                    </p>
                    <p className="text-xs text-gray-500 font-unilevershilling">
                      By Alan Ruell
                    </p>
                  </div>
                </div>



                <div className="basis-1/4 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={ecohacksimg}
                    alt=""
                    layout="intrinsic"
                    className="w-full"
                  />

                  <div className="px-4 py-4">
                    <p className="text-base mb-6 font-unilevershilling">
                      Love Beauty And Planet Shampoo
                    </p>
                    <p className="text-xs text-gray-500 font-unilevershilling">
                      By Alan Ruell
                    </p>
                  </div>
                </div>



                <div className="basis-1/4 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={ecohacksimg}
                    alt=""
                    layout="intrinsic"
                    className="w-full"
                  />

                  <div className="px-4 py-4">
                    <p className="text-base mb-6 font-unilevershilling">
                      Love Beauty And Planet Shampoo
                    </p>
                    <p className="text-xs text-gray-500 font-unilevershilling">
                      By Alan Ruell
                    </p>
                  </div>
                </div> */}
              </article>
            </article>
            {/* Eco Hacks Section */}
          </div>
        </article>
      </section>
    </>
  );
}
export default Ecohacks;
