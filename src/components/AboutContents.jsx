import Link from "next/link";
import React from "react";

const AboutContents = () => {
  return (
    <div className="flex gap-20">
      <Link
        className="border rounded-md px-2 font-semibold"
        href={"/about/history"}
      >
        History
      </Link>
      <Link
        className="border rounded-md px-2 font-semibold"
        href={"/about/mission"}
      >
        Mission
      </Link>
    </div>
  );
};

export default AboutContents;
