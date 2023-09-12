import React, { useEffect } from "react";
import useFetchData from "@/Hooks/useFetchData";
import { useRouter } from "next/router";
import Loading from "@/Commons/loading";

function EcoHacks() {
  const [{ response, error, isLoading }, fetchData] = useFetchData();

  const router = useRouter();

  useEffect(() => {
    const apiUrl = `${process.env.Api_EndPoint}/content/ca/static/content?language=en&type=ecohacks`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchData(apiUrl, headers, method, {});
  }, []);

  if (response) console.log(response);

  const handleDetailPage = (item) => {
    router.push(`/eco-hacks/${item.id}`);
  };
  if (isLoading)
    return (
      <div className="p-12 bg-orange-500 flex flex-col min-h-[60vh]">
        <Loading></Loading>
      </div>
    );
  return (
    <div className="bg-orange-500 flex flex-col min-h-[60vh]">
      <div className="container mx-auto py-20 px-5 lg:px-0 md:px-0">
        <h1 className="text-left mb-4 text-black font-unilevershillingBold lg:text-lg">
          Eco-Hacks
        </h1>
        <div className="w-full mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
          {response?.map((item, key) => (
            <div
              key={key}
              className="group relative rounded-2xl bg-white cursor-pointer"
              onClick={() => handleDetailPage(item)}
            >
              <div
                className="h-[200px] overflow-hidden rounded-t-2xl"
                style={{
                  background: `url(https://assets.unileversolutions.com/v1/${item.image.id}.${item.image.type}?im=Resize=100x100)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-4">
                <h1 className="font-unilevershillingMedium text-base lg:text-xl line-clamp-2 mb-3 min-h-[4vw]">
                  {item.title}
                </h1>
                <p className="font-unilevershilling text-base text-gray-500">
                  {`By ${item.author}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EcoHacks;
