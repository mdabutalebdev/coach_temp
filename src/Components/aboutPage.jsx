import React from "react";
import AboutStoryCard from "./shared/aboutStoryCard";
import O_S_one from "../assets/o_s_one.svg";
import O_S_two from "../assets/o_s_two.svg";
import O_S_three from "../assets/o_s_three.svg";
import BusinessGoalCard from "./shared/businessGoalCard";
import A_B_G_one from "../assets/a_b_g_one.svg";
import A_B_G_two from "../assets/a_b_g_two.svg";
import A_B_G_three from "../assets/a_b_g_three.svg";
import Button from "./shared/button";

const AboutPage = () => {
  return (
    <section className="py-20 bg-BgColor">
      <div className="container">
        <h3 className="font-semibold text-[55px] text-primaryColor text-center leading-[80px]">
          Factory of{" "}
          <span className="text-BtnColor">Future Tech, Creativity,</span>{" "}
          Innovation
        </h3>
        <p className="text-[#60666C] text-[18px] font-medium text-center w-[800px] mx-auto">
          Anchored to the future, empowers businesses through forwarding designs
          and tech products with limitless possibilities.
        </p>
      </div>
      {/* our story part start */}
      <div className="flex justify-between gap-x-6 container mt-20">
        <div className="flex gap-6">
          <div className="mt-36">
            <AboutStoryCard
              src={O_S_one}
              text={`Vision`}
              perageaph={`Simple and minimalist design approach to enhance user experience`}
            />
          </div>
          <div className="">
            <AboutStoryCard
              className="pb-6"
              src={O_S_two}
              text={`Mission`}
              perageaph={`Hundreds of dynamic digital assets ready to provide you a leading edge`}
            />
            <div className="pt-6">
              <AboutStoryCard
                src={O_S_three}
                text={`Goal`}
                perageaph={`Well-organized SOPs with high customer centrism to deliver best experience`}
              />
            </div>
          </div>
        </div>
        <div className="mt-14">
          <h3 className="text-primaryColor text-[56px] font-normal">
            Our <span className="text-BtnColor">Story</span>{" "}
          </h3>
          <p className="font-normal text-base text-[#60666C] w-[560px]">
            INTELLI Digital is a platform where design ideas unify with
            collaboration, empathy unifies with economics and inspiration
            streams from the vision of transforming the world into a better
            place. We believe in the power of details, accuracy of
            communication, diversity of ideas and the potentials of connection
            through the use of cutting edge technology. With a vision to rise as
            the most innovative tech platform in the world, we commit to
            empower, collaborate, co-create, and co-exist with our clients in
            our journey to transform the world we live in through innovation and
            original design and technologies. Our mission is to serve the world
            with transformative digital products that lead the next generation
            technology.
          </p>
        </div>
      </div>
      {/* our story part end */}
      {/* business goal part start */}
      <div className="container mt-[120px]">
        <h3 className="text-primaryColor text-[56px] font-normal w-[650px] text-center mx-auto">
          Accomplish <span className="text-BtnColor">Business Goals</span> With
          Us
        </h3>
        <div className="flex justify-between gap-6">
          <BusinessGoalCard
            src={A_B_G_one}
            text={`Bring your brand to light`}
            perageaph={`A business without a website is faceless and non recognizable in the digital world aka the world of the future. Build the right website for your brand, create the right brand image through impactful UI/UX experience`}
          />
          <BusinessGoalCard
            src={A_B_G_two}
            text={`Create your Identity`}
            perageaph={`Create your brand identity, make it stand out from the rest. Choose the right logo and digital content from a list of thousands that meet and exceed your business needs`}
          />
          <BusinessGoalCard
            src={A_B_G_three}
            text={`Grow on social media platforms`}
            perageaph={`Dominate the digital verse with professional graphics and multimedia content. Our contents are designed and developed based on original ideas and rigorous market research aimed to achieve maximum impact. `}
          />
        </div>
      </div>
      {/* business goal part end */}
      {/* last */}
      <div className="bg-BtnColor container rounded-[24px] p-[84px] mt-[120px]">
         <h3 className="font-normal text-[56px] text-white text-center">Have a question to ask?</h3>
         <p className="font-normal text-[18px] text-white text-center">Our dedicated Customer Service is available from 10:00 AM to 10:00 PM (GMT +6), 7 days a week</p>
          
         <div className="flex justify-center mt-10">
          <Button className="!bg-white !text-BtnColor !px-14 h-[48px]">Get a quote Now</Button>
        </div>
      </div>
      {/* last */}
    </section>
  );
};

export default AboutPage;
