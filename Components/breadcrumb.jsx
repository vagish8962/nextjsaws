import React from "react";
import Link from "next/link";


function Breadcrumb() {
  return (

    <nav className="w-full py-10">
      <ol className="list-reset flex font-unilevershilling">
        <li>
          <Link href="/" className="">Home</Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>

        <li>
          <Link href="/" className="">Products</Link>
        </li>

        <li>
          <span className="mx-2">/</span>
        </li>
        <li className="">Data</li>
      </ol>
    </nav>

  );
}
export default Breadcrumb;
