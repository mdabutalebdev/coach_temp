import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import PeerGroupPage from '@/Components/peerGroupPage'
import Menu from '@/Components/shared/menu'
 
import React from 'react'

const page = () => {
  return (
    <>
        <div>
            <Navbar />
            <Menu />
        </div>
         <PeerGroupPage />
      

       <Footer />
    </>
  )
}

export default page