import AboutPage from '@/Components/aboutPage'
import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import Menu from '@/Components/shared/menu'
import React from 'react'

const page = () => {
  return (
     <>
     <div className='shadow'>
        <Navbar />
        <Menu />
     </div>
     <AboutPage />
     <Footer />
     </>
  )
}

export default page