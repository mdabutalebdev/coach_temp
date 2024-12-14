import React from "react";
import UserTabs from "../naim/Component/userTabs";
import Navbar from "@/Components/navbar";
import Menu from "@/Components/shared/menu";
import Footer from "@/Components/footer";

const page = async ({ params }) => {
  const { profile } = await params;

  if (profile == "profile" || profile == "setting") {
    return (
      <div>
        <Navbar />
        <Menu />
        <div className="container">
          <UserTabs />
          {/* {profile === "setting" && profile}
        {profile === "profile" && profile} */}
        </div>
        <Footer />
      </div>
    );
  } else {
    return <div>page not fonund</div>;
  }
};

export default page;
