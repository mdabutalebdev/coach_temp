import React from "react";
import Button from "./shared/button";
import GroupCard from "./shared/groupCard";
 
import Group_profile from "../assets/group_profile.png";
import Map from "../assets/map.svg";
import Star from "../assets/star.svg";
import Person from "../assets/person.svg";
import Clock from "../assets/clock.svg";
import Audi from '../assets/audi.png'
import { Label } from "./ui/label";
import PeerGroupLeft from "./shared/peerGroupLeft";
 

const PeerGroupPage = () => {
  return (
    <section className="py-20">
      <div className="container flex justify-between">
        <div className="flex gap-5">
          <Button className=" text-white bg-BtnColor border">All</Button>
          <Button className="!text-primaryColor hover:text-white bg-transparent hover:bg-BtnColor border duration-300">Popular</Button>
          <Button className="!text-primaryColor hover:text-white bg-transparent hover:bg-BtnColor border duration-300">Recent</Button>
          <Button className="!text-primaryColor hover:text-white bg-transparent hover:bg-BtnColor border duration-300">Next Cohort Window</Button>
        </div>
        <div className="">
          <form action="/action_page.php" className="border w-[276px] py-3 rounded-[6px]">
             
            <Label htmlFor="name" className="pl-5 font-normal text-[18px] text-[#9DA6BA]">Sort by</Label>
            <select name="cars" id="cars" className="outline-none pl-5 pr-14">
              <option value="Populer">Populer</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </form>
        </div>
      </div>
      <div className="container mt-10 flex justify-between gap-5">
           <div className="w-[22%]">
                  <PeerGroupLeft />
           </div>

           {/* card */}
          <div className="w-[78%] flex flex-wrap gap-5"> 
          <GroupCard
            className ="!w-[435px] "
            src1={Group_profile}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
         
          <GroupCard
            className ="!w-[435px] "
            src1={Audi}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
          <GroupCard
            className ="!w-[435px] "
            src1={Group_profile}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
          <GroupCard
            className ="!w-[435px] "
            src1={Audi}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
          <GroupCard
            className ="!w-[435px] "
            src1={Audi}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
          <GroupCard
            className ="!w-[435px] "
            src1={Audi}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
          <GroupCard
            className ="!w-[435px] "
            src1={Audi}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
          <GroupCard
            className ="!w-[435px] "
            src1={Audi}
            src2={Map}
            src3={Star}
            src4={Person}
            src5={Clock}
            CardTitleOne={`Infrastructure Development Company Limited (IDCOL)`}
            secontTitle={`Meeting Format`}
            loceation={`New York,USA`}
            review={`4.6(35 reviews)`}
            person={`Meeting Format`}
            time={`1 Hour`}
            description={`Lorem ipsum dolor sit amet consectetur. Urna ultrices leo amet lobortis nisl vel eu dapibus a. Sit mauris scelerisque maecenas at sit at arcu imperdiet....`}
            cardOne={`Communication`}
            cardTwo={`Influence`}
            cardThree={`Strategic Thinking`}
            cardFour={`Strategic Thinking`}
            price={`$250`}
            Hour={`/Hour`}
            lastBtn={`View Details`}
          />
          </div>
      </div>
    </section>
  );
};

export default PeerGroupPage;
