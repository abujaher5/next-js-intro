import React from "react";

const BlogDetails = ({ params }) => {
  console.log(params.slug);

  const { title, description } = blogs.find((blog) => blog.slug == params.slug);
  return (
    <div className="p-10">
      <h2>This page is for blog Details...</h2>
      <div>
        <h3>{title}</h3>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

const blogs = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    description:
      "A beginner-friendly introduction to building web applications with React.",
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS",
    description:
      "Learn how to quickly style modern web apps with Tailwind’s utility-first classes.",
  },
  {
    slug: "nextjs-routing-explained",
    title: "Next.js Routing Explained",
    description:
      "Understand how file-based routing works in Next.js with pages and dynamic routes.",
  },
  {
    slug: "react-query-for-data-fetching",
    title: "React Query for Data Fetching",
    description:
      "Why React Query makes server state management easier and how to use it in your app.",
  },
  {
    slug: "deploying-to-vercel",
    title: "Deploying Your App to Vercel",
    description:
      "Step-by-step guide on how to deploy your Next.js or React project to Vercel.",
  },
];

export default BlogDetails;
