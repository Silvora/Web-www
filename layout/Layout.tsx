import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({children}:any,) {
  return (
    <>
        <Header></Header>
        {/* <Intro posts={props.posts}></Intro> */}
	     {children}
       <Footer></Footer>    
    </>
  )
}
