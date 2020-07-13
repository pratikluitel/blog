import React from "react"
import Footer from './FooterComponent'
import './layout.css'
import {Helmet} from 'react-helmet'



export default function Layout({children}) {
  return (
    <>
        <Helmet>
          <link rel="shortcut icon" href="/public/favicon.png" type="image/png" />
          <meta name="author" content="Pratik Luitel"/>
        </Helmet>
        {children}
        <Footer/>
    </>
  )
}

