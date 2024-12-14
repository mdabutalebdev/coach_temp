import React from 'react'
import UserTabs from '../naim/Component/userTabs';

const page = async ({ params }) => {
  const { profile } = await params;

  if (profile == "profile" || profile == "setting") {
    return (
      <div className='container'>
        <UserTabs />
        {/* {profile === "setting" && profile}
        {profile === "profile" && profile} */}
      </div>
    )
  }

  else {
    return (
      <div>
        page not fonund
      </div>
    )
  }
}

export default page