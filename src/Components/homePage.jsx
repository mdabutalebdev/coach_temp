import React from 'react'
 
import Navbar from './navbar'
import Header from './header'
import FeturedCategories from './feturedCategories'
import PeerGroup from './peerGroup'
import Works from './works'
import Reviews from './reviews'
import Footer from './footer'
import Blog from './blog'
import Menu from './shared/menu'

const HomePage = () => {
  return (
    <>
     <div className="shadow">
     <Navbar />
     <Menu />
     </div>
     <Header />
     <FeturedCategories />
     <PeerGroup />
     <Works />
     <Reviews />
     <Blog />
     <Footer />
    </>
  )
}

export default HomePage