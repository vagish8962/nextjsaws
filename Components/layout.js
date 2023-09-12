import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link"; // Import Link from next/link

const Breadcrumbs = dynamic(() => import("./Breadcrumbs"), { ssr: false });

const Layout = ({ children }) => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const routeSegments = currentUrl
    .split("/")
    .filter((segment) => segment !== ""); // Split the route into segments

  const crumbs = [
    { label: "Home", route: "/" },
    ...routeSegments.map((segment, index) => ({
      label: segment == "home" ? "" : segment,
      route: `/${routeSegments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <div>
      <Navbar />
      {crumbs.length > 1 && <Breadcrumbs crumbs={crumbs}></Breadcrumbs>}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
