import React from "react";
import Results from "./results";

function ProductListing(props) {
  // console.log(props.productsData);
  return (
    <>
      <div className="basis-3/4">
        <Results changePage={props.changePage} productsData={props.productsData} />
      </div>
    </>
  );
}
export default ProductListing;
