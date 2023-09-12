import React, { useEffect, useState } from "react";

function ProductRating({ rating }) {
  const [totalRating, setTotalRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [filledStars, setFilledStars] = useState(0);
  const [remainingStars, setRemainingStars] = useState(0);

  useEffect(() => {
    if (rating?.ratingValue && rating?.reviewCount) {
      setTotalRating(rating.ratingValue);
      setTotalReviews(rating.reviewCount);
      setFilledStars(Math.floor(rating.ratingValue));
    }
  }, [rating]);

  useEffect(() => {
    setRemainingStars(5 - filledStars);
  }, [filledStars]);

  const showStarsFinal = () => {
    return (
      <div className="star-rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`star ${index < filledStars ? "filled" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d={`M12 1.64l1.96 6.19h6.27l-5.05 3.67 1.96 6.18-5.05-3.66-5.05 3.66 1.96-6.18-5.05-3.67h6.27z`}
              fill={index < filledStars ? "#1d7d6d" : "none"}
            />
            {index === filledStars &&
              filledStars !== Math.floor(filledStars) && (
                <path
                  d={`M${
                    12 + 3.7
                  } 1.64l1.96 6.19h6.27l-5.05 3.67 1.96 6.18-5.05-3.66-5.05 3.66 1.96-6.18-5.05-3.67h6.27z`}
                  fill="#1d7d6d"
                />
              )}
          </svg>
        ))}
      </div>
    );
  };

  return (
    <article className="mb-5 p-5 bg-white rounded-lg">
      <h3 className="font-bold">Customer product rating</h3>

      <div className="flex justify-between">
        <div>
          <h4 className="text-2xl font-bold">
            {totalRating.toFixed(1)} <span className="text-xs">/5</span>
          </h4>
          <p className="text-xs">Based on {totalReviews} reviews</p>
        </div>
        <ul
          className="my-1 flex list-none gap-1 p-0"
          data-te-rating-init
          data-te-readonly="true"
          data-te-value={totalRating}
        >
          {showStarsFinal()}
        </ul>
      </div>
    </article>
  );
}

export default ProductRating;
