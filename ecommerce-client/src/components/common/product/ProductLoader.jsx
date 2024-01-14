import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

export default function ProductLoader() {
  return (
    <>
      <div>
        <Skeleton height={200} />
        <Skeleton count={3} className="mx-auto w-3/4" />
      </div>
    </>
  );
}
