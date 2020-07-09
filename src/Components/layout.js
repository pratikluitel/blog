import React from "react"
import Footer from './FooterComponent'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import './layout.css'
import {Helmet} from 'react-helmet'



export default function Layout({children}) {
  return (
    <>
        <Helmet>
          <link rel="shortcut icon" href="/public/favicon.png" type="image/png" />
        </Helmet>
        {children}
        <Footer/>
    </>
  )
}

