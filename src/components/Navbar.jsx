"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];
  const handler = () => {
    router.push("/contact");
  };
  return (
    <div className="bg-red-400">
      <nav className="flex justify-between gap-20 mx-4 px-4">
        <h2 className="font-semibold  text-white ">
          Next<span className="text-gray-600">Hero</span>
        </h2>
        <ul className="flex justify-evenly gap-10">
          {links?.map((link) => (
            <Link
              className={`${
                pathName === link.path && " text-blue-600 font-bold"
              }`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <div>
          <button
            className="px-1 rounded-lg font-semibold shadow-2xl hover:bg-white"
            onClick={handler}
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
