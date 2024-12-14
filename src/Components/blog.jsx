"use client";

import React from "react";
import BlogCard from "./shared/blogCard";
import Blog_one from "../assets/blog_one.jpg";
import Blog_two from "../assets/blog_two.jpg";
import Blog_three from "../assets/blog_three.jpg";
import Blog_p_one from "../assets/blog_p_one.png";
import Blog_p_two from "../assets/blog_p_two.png";
import Blog_p_three from "../assets/blog_p_three.png";
import Dot from "../assets/dot.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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
        <div className="my-10">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              arrows: false,
              pagination: true,
              gap: 10,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <BlogCard
                srcmain={Blog_one}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_one}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_two}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_two}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_three}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_three}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_one}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_one}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_two}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_two}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_three}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_three}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_one}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_one}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            
            <SplideSlide>
              <BlogCard
                srcmain={Blog_three}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_three}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_one}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_one}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            
            <SplideSlide>
              <BlogCard
                srcmain={Blog_three}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_three}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            <SplideSlide>
              <BlogCard
                srcmain={Blog_one}
                title={`Graphic`}
                h3text={`21 Job Interview Tips: How To Make a Great Impression....`}
                h4text={`Darrell Steward`}
                description={`21 Job Interview Tips: How To Make a Great Impression.Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.`}
                srcProfile={Blog_p_one}
                date={`11 Jan 2022`}
                time={`5 min read`}
                src3={Dot}
              />
            </SplideSlide>
            
             
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Blog;
