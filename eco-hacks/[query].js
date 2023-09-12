import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useFetchData from "@/Hooks/useFetchData";
import Loading from "@/Commons/loading";

function ArticleDetailPage() {
  const router = useRouter();
  let { query } = useRouter().query;

  const [{ response, error, isLoading }, fetchData] = useFetchData();
  useEffect(() => {
    const apiUrl = `https://lesp-uat.unileversolutions.com/content/ca/static/content?language=en&type=ecohacks`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": `${process.env.xAPi}`,
    };
    const method = "GET";
    fetchData(apiUrl, headers, method, {});
  }, []);

  let item;
  let remList;
  if (response) {
    item = response?.filter((article) => article.id === query);
    remList = response?.filter((article) => article.id != query).slice(0, 2);
    console.log(item, remList);
  }
  const handleEco = () => {
    router.push("/eco-hacks");
  };

  const handleDetailPage = (data) => {
    router.push(`/eco-hacks/${data.id}`);
  };

  return (
    <div className="bg-green-900 min-h-[70vh]">
      {isLoading || item == undefined ? (
        <Loading></Loading>
      ) : (
        <div className="flex flex-col">
          <div
            className="h-[600px] flex items-end justify-center overflow-hidden"
            style={{
              background: `url(https://assets.unileversolutions.com/v1/${item[0]?.image?.id}.${item[0]?.image?.type}?im=Resize=1920x600)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="backdrop-brightness-75 bg-black/30 w-full h-full relative">
            <p className="text-white cursor-pointer  flex items-center flex-col mb-10 text-lg lg:text-xl font-unilevershillingMedium w-full absolute bottom-0 left-auto">
              <AiOutlineDown size={30} className="animate-bounce"></AiOutlineDown>
              Read the story
            </p>

            </div>
          </div>

          <article className="container mx-auto my-16 px-5 lg:px-0 md:px-5">
            <div className="flex lg:flex-row flex-col lg:space-x-4 mx-3 lg:mx-0">
            <div className="basis-3/5">
              <h1 className="text-white font-shireTypesPro lg:text-2xl text-xl">
                  {item[0].title}
                </h1>
                <p className="text-white mt-3 mb-10 font-unilevershilling text-base">
                  {item[0].author}
                </p>
                {item[0]?.content.map((article, key) => (
                  <div className="flex flex-col mb-10" key={key}>
                    <h2 className="text-white font-unilevershillingMedium text-2xl mb-5">
                      {article.title}
                    </h2>
                    <p className="text-white font-unilevershilling text-base break-words">
                      {article.section}
                    </p>
                  </div>
                ))}
            </div>

            <div className="basis-2/5">
              <article className="flex flex-col justify-center md:items-start lg:items-center">
            <h1 className="text-2xl text-white mb-4 font-unilevershillingBold">
                Eco Hacks
              </h1>
              <div className="flex flex-col">
                {remList.map((item , key) => (
                  <div
                    key={key}
                    className="rounded-2xl bg-white cursor-pointer mb-5 w-80 md:w-96"
                    onClick={() => handleDetailPage(item)}
                  >
                    <div
                      className="h-[200px] overflow-hidden rounded-t-2xl"
                      style={{
                        background: `url(https://assets.unileversolutions.com/v1/${item.image.id}.${item.image.type}?im=Resize=100x100)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                      }}
                    ></div>
                    <div className="p-4">
                      <h1 className="font-unilevershillingMedium text-base lg:text-xl line-clamp-2 mb-3">
                        {item.title}
                      </h1>
                      <p className="font-unilevershilling text-base text-gray-500">
                        {`By ${item.author}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="text-primary-green cursor-pointer bg-white py-3 mt-5 w-80 md:w-96 rounded-lg font-unilevershilling text-base"
                type="button"
                onClick={handleEco}
              >
                See all
              </button>
              </article>         
            </div>
            </div>             

          </article>    
          {/* <div className="flex p-4 mt-16">
            <div className="w-3/5 p-4 h-auto">
              <h1 className="text-white font-shireTypesPro lg:text-2xl text-xl">
                {item[0].title}
              </h1>
              <p className="text-white mt-3 mb-10 font-unilevershilling text-base">
                {item[0].author}
              </p>
              {item[0]?.content.map((article) => (
                <div className="flex flex-col mb-10">
                  <h2 className="text-white font-unilevershillingMedium text-2xl mb-5">
                    {article.title}
                  </h2>
                  <p className="text-white font-unilevershilling text-base">
                    {article.section}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-2/5 flex flex-col items-center">
              <h1 className="text-2xl text-center text-white mb-4 font-unilevershillingBold">
                Eco Hacks
              </h1>
              <div className="flex flex-col items-center space-y-6">
                {remList.map((item) => (
                  <div
                    className="w-3/5 rounded-2xl bg-white cursor-pointer"
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
                    <div className="p-2">
                      <h1 className="font-unilevershillingBold text-xl">
                        {item.title}
                      </h1>
                      <p className="text-lg font-unilevershilling">
                        {`By ${item.author}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="text-primary-green cursor-pointer w-3/5 mt-6 text-lg bg-white border-4 font-bold py-3 px-6 rounded-lg"
                type="button"
                onClick={handleEco}
              >
                View All
              </button>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default ArticleDetailPage;
