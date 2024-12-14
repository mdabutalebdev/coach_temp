"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
  let list = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Peer Groups",
      path: "/peer-group"
    },
    {
      name: "Reviews",
      path: "/Reviews"
    },
    {
      name: "About us",
      path: "/about-us"
    },
    {
      name: "Contact Us",
      path: "/contact-us"
    },
  ]

  const [active, setactive] = useState(0)
  return (
    <div className="container w-[580px] mx-auto flex-1 hidden lg:block pb-4">
      <ul className="flex justify-between items-center">
        {
          list.map((el, idx) => (
            <Link key={idx} href={el.path}>
              <li onClick={() => setactive(idx)} className={`text-[rgba(13,13,14,0.6)]  text-base font-medium  duration-300 ${active == idx ? "!text-BtnColor" : "!text-[rgba(13,13,14,0.6)]"}`}>
                {el.name}
              </li>
            </Link>
          ))
        }

      </ul>
    </div>
  )
}

export default Menu