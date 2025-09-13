import Link from "next/link";
import React from "react";

const HistoryPage = () => {
  return (
    <div>
      <h2>Do you want to know about History.</h2>
      <Link
        className="border rounded-md px-2 font-semibold"
        href={"/about/history/vision"}
      >
        Vision
      </Link>
    </div>
  );
};

export default HistoryPage;
