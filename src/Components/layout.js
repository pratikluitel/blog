import React from "react"
import Footer from './FooterComponent'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import './layout.css'



export default function Layout({children}) {
  return (
    <>
        {children}
        <Footer/>
    </>
  )
}

