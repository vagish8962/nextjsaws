import React, { useEffect } from "react";
import Image from "next/image";
//import Link from "next/link";
import rewardimg from "@/assets/images/reward-claim.png";
import Donate from "@/assets/images/donate-a-meal.png"
import Plant from "@/assets/images/plant-a-tree.png"
import walmarticon from "@/assets/images/walmarticon.png";
import useFetchData from "@/Hooks/useFetchData";

function RewardCoupons() {
  const [{ response, error, isLoading }, fetchData] = useFetchData();
  const [{ response2, error1, IsLoading1 }, fetchDataCoupons] = useFetchData();

  useEffect(() => {
    const url = "https://na-lesp.unileversolutions.com/user/ca/initiatives-statistics";
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": "BXElVrdvo1ay5HE3v95ib1TQbHgc4I6faMBWUjuh",
      Authorization: `Bearer eyJraWQiOiIwbEg3V3J3SjgxczA5dW4yanUrQkE1YTdkY0RcL001VjV2TVoyRWd1MkIyND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlZWEyMTU1OS02MDdiLTQ1ODktYjViNy02MzBjMTE0NzYxNzUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfWWg2NFBlRjdKIiwiY29nbml0bzp1c2VybmFtZSI6ImVlYTIxNTU5LTYwN2ItNDU4OS1iNWI3LTYzMGMxMTQ3NjE3NSIsIm9yaWdpbl9qdGkiOiJkZmE2MDlhNC0yYjJhLTQ2MDQtODkxNS1jMWRiOTM4ODlhNTciLCJhdWQiOiJxMDYxaGRzYjlsbjJudTBxYTM0bzQxZTliIiwiZXZlbnRfaWQiOiJhYjk3NTMyMi0wMGNkLTQyMzgtODAwOS0xOTE1ZjE3YTVhOTIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY5NDE2OTYwMCwiZXhwIjoxNjk0MTczMjAwLCJpYXQiOjE2OTQxNjk2MDAsImp0aSI6IjJlNDJhZDRiLWEzNDYtNDZiYy1iZjhkLWU5MTY3NzQyMmU0OSIsImVtYWlsIjoicHJpeWFuc2guZ3VwdGFAbGFuZ29vci5jb20ifQ.n0jy56a7JgQX9lrEZSo-0slG10pYvsd5XqpbnXfC1p04uZ30NbX8RyNw6MlmpTRjIVAwgdPTRBjkGur77_7fjP7s36oM6yGjRnZzS6MTiCkaLP8BVz7vksgdmcMrg4aq2Xqd3uAVgdUW6C1BCQFVSo3jm5ppjd-I5auyN6GEw-TvH94h8h40sXovMdvYZnD3CJjRg4aaik_h0vCegDrPs0VdTEfVIQKjFPGU7QKrCC1SSMpUQWjtiiy_5c9iqjEhB79pFUpwbnMChKqwkvIs6ZJdJlY52P4L7OxXbRiOGTBirhigY7JVZqb1OBjgwoqI1IclUnEGzSsDvduj95Z8rA`,
    };
    const method = "GET";
    fetchData(url, headers, method, {});

    const url1 = "https://lesp-uat.unileversolutions.com/user/ca/coupons-aggregated";
    fetchDataCoupons(url1, headers, method, {});
  }, []);

  if (response) console.log(response);

  console.log(response2)

  return (
    <>
      <section className="relative bg-green-500 pt-20">
        <div className="container mx-auto">
          <article className="flex space-x-10">
            <div className="basis-1/2">
              <div className="mb-4">
                <p className="text-black text-lg mb-2 font-unilevershillingBold">
                  Do Good Rewards
                </p>
              </div>

              <article className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                {/* <div className="group cursor-pointer relative rounded-2xl overflow-hidden bg-white p-1.5">
                  <Image
                    src={Donate}
                    alt="Reward Icon"
                    // width={25}
                    // height={25}
                    layout="intrinsic"
                    className="w-full rounded-2xl "
                  />
                  <div className="px-0 p-3 flex flex-col items-center">
                    <div className="bg-orange-900 inline-block rounded-full w-full text-center py-3 text-sm font-unilevershilling">
                      Donate a meal
                    </div>
                    <div className="bg-orange-500 inline-block rounded-full px-3 py-1 text-sm font-unilevershilling">
                      {response?.DonateAMeal.availableInitiatives} Available
                    </div>
                  </div>
                </div> */}
                <div className="group cursor-pointer relative rounded-2xl overflow-hidden bg-white p-1.5">
                  <Image
                    src={Plant}
                    alt="Reward Icon"
                    // width={25}
                    // height={25}
                    layout="intrinsic"
                    className="w-full rounded-2xl "
                  />
                  <div className="px-0 flex flex-col items-center p-3">
                    <div className="bg-orange-900  inline-block rounded-full w-full text-center py-3 text-sm font-unilevershilling">
                      Plant a tree
                    </div>
                    <div className="bg-orange-500 inline-block rounded-full px-3 py-1 text-sm font-unilevershilling">
                      {response?.PlantATree.availableInitiatives} Available
                    </div>
                  </div>
                </div>
              </article>

            </div>

            <div className="basis-1/2">
              <div className="mb-4">
                <p className="text-black text-lg mb-2 font-unilevershillingBold">
                  Coupons
                </p>
              </div>

              <article className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                <div className="group cursor-pointer relative rounded-2xl overflow-hidden bg-white p-1.5">
                  <Image
                    src={rewardimg}
                    alt="Reward Icon"
                    // width={25}
                    // height={25}
                    layout="intrinsic"
                    className="w-full rounded-2xl "
                  />
                  <div className="flex justify-between bg-green-500 rounded-full mt-2 items-center p-0.5">
                    <span className="text-xs font-unilevershilling pl-2">Only at Walmart</span>
                    <span><Image src={walmarticon} width={25} height={25} alt="Reward Icon" /></span>
                  </div>
                  <div className="px-0 p-1.5 flex flex-col items-center">
                    <div className="bg-orange-900 inline-block rounded-full w-full text-center py-1 text-sm font-unilevershilling">
                      Claim a $2 coupon
                    </div>
                    <div className="bg-orange-500 inline-block rounded-full px-3 py-1 text-sm font-unilevershilling">
                      for 200 points
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer relative rounded-2xl overflow-hidden bg-white p-1.5">
                  <Image
                    src={rewardimg}
                    alt="Reward Icon"
                    // width={25}
                    // height={25}
                    layout="intrinsic"
                    className="w-full rounded-2xl "
                  />
                  <div className="flex justify-between bg-green-500 rounded-full mt-2 items-center p-0.5">
                    <span className="text-xs font-unilevershilling pl-2">Only at Walmart</span>
                    <span><Image src={walmarticon} width={25} height={25} alt="Reward Icon" /></span>
                  </div>
                  <div className="px-0 p-1.5 flex flex-col items-center">
                    <div className="bg-orange-900 inline-block rounded-full w-full text-center py-1 text-sm font-unilevershilling">
                      Claim a $1 coupon
                    </div>
                    <div className="bg-orange-500 inline-block rounded-full px-3 py-1 text-sm font-unilevershilling">
                      for 200 points
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
export default RewardCoupons;
