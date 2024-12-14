"use client";
import React from 'react'
import ReviewCard from './shared/reviewCard'
import Review_icon from '../assets/review_icon.svg'
import Review_profile from '../assets/review_profile.png'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
 const Reviews = () => {
   return (
     <section className='pt-[100px]'>
        <div className="container">
          <h3 className='font-bold text-[32px] text-center'>Customer Reviews</h3>
             <div className="">
             <Splide
            options={{
              type: "loop",
              perPage: 1,
              perMove: 1,
              arrows: true,
              pagination: false,
              gap: 10,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <ReviewCard 
             src1={Review_icon}
             alt="Review_icon"
             name={`ranshishi`}
             description={`“We have choosed this option against competitors based on the Customers reviews. After 9 months of using we have never regreted. Right now we are more effective in communication and managing the customer flows.”`}
             src2={Review_profile}
             h4text={`Laura Klamrs,`}
             ptext={`Marketing Manager @TheVercile`}
             />
            </SplideSlide>
            <SplideSlide>
              <ReviewCard 
             src1={Review_icon}
             alt="Review_icon"
             name={`ranshishi`}
             description={`“We have choosed this option against competitors based on the Customers reviews. After 9 months of using we have never regreted. Right now we are more effective in communication and managing the customer flows.”`}
             src2={Review_profile}
             h4text={`Laura Klamrs,`}
             ptext={`Marketing Manager @TheVercile`}
             />
            </SplideSlide>
            <SplideSlide>
              <ReviewCard 
             src1={Review_icon}
             alt="Review_icon"
             name={`ranshishi`}
             description={`“We have choosed this option against competitors based on the Customers reviews. After 9 months of using we have never regreted. Right now we are more effective in communication and managing the customer flows.”`}
             src2={Review_profile}
             h4text={`Laura Klamrs,`}
             ptext={`Marketing Manager @TheVercile`}
             />
            </SplideSlide>
            </Splide>
             </div>
        </div>
     </section>
   )
 }
 
 export default Reviews

 