import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className="container w-[580px] mx-auto flex-1 hidden lg:block pb-4">
      <ul className="flex lg:gap-8 md:gap-6 items-center">
        <li className=''>
          <a href="#" className="text-[rgba(13,13,14,0.6)]  text-base font-medium px-3 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
            Home
          </a>
        </li>
        <li>
          <Link href="Peer" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
            Peer Groups
          </Link>
        </li>
        <li>
          <a href="#" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
            Reviews
          </a>
        </li>
        <li>
          <a href="#" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="text-[rgba(13,13,14,0.6)] text-base font-medium px-2 py-4 hover:text-BtnColor rounded-[8px] hover:bg-MenuHColor duration-300 ">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu