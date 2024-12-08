import React from "react";
import BlogCard from "./shared/blogCard";

const Blog = () => {
  return (
    <section className="bg-BgColor mt-20 py-10">
      <div className="container text-center">
        <h3 className="text-primaryColor font-extrabold text-[48px]">
        News and Blog
        </h3>
        <p className="text-primaryColor text-base font-medium  ">
        Get the latest news, updates and tips
        </p>
      </div>
      <div className="container ">
         <div className="">
            <BlogCard />
         </div>
      </div>
    </section>
  );
};

export default Blog;
