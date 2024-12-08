import React from 'react'
 
import Navbar from './navbar'
import Header from './header'
import FeturedCategories from './feturedCategories'
import PeerGroup from './peerGroup'
import Works from './works'
import Reviews from './reviews'
import Footer from './footer'
import Blog from './blog'

const HomePage = () => {
  return (
    <>
     <Navbar />
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