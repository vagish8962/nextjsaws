import Loading from "@/Commons/loading";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GeneralResultsPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <div className="bg-green-500 h-[70vh]">
      <Loading></Loading>
    </div>
  );
};

export default GeneralResultsPage;
