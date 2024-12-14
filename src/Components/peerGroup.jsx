import React from "react";
import GroupCard from "./shared/groupCard";
import Button from "./shared/button";
import Group_profile from "../assets/group_profile.png"
import Map from "../assets/map.svg"
import Star from "../assets/star.svg"






const PeerGroup = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h3 className="text-primaryColor font-extrabold text-[48px]">
            Top Peer Group
          </h3>
          <Button className="!px-14 h-[48px]">Browse All</Button>
        </div>
        <p className="text-primaryColor text-base font-medium w-[777px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text
        </p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-10">
          <GroupCard
            src1={Group_profile}
            src2={Map}
            src3={Star}

          />
          <GroupCard
            src1={Group_profile}
            src2={Map}
            src3={Star}

          />
          <GroupCard
            src1={Group_profile}
            src2={Map}
            src3={Star}

          />
          <GroupCard
            src1={Group_profile}
            src2={Map}
            src3={Star}

          />

        </div>
        <div className="flex justify-center mt-10">
          <Button className="!px-14 h-[48px]">Browse All</Button>
        </div>
      </div>
    </section>
  );
};

export default PeerGroup;
