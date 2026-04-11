import React from 'react'
import Header from './_components/Header'
import Footer from './_components/Footer'


const DashboardLayout = ({children}) => {
  return (
    <>
    <Header></Header>
    <div  className='mx-5 md:mx-20 lg:mx-36'>
      {children}</div>
      <Footer></Footer>
    </>
  )
}

export default DashboardLayout