import React from "react"
import Footer from './FooterComponent'
import './layout.css'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'



export default function Layout({children}) {
  const data = useStaticQuery(graphql
  `query linkQuery {
    site {
      siteMetadata {
        author
        contact {
          pos_1 {
            type
            font
            url
          }
          pos_3 {
            type
            font
            url
          }
          pos_4 {
            type
            font
            url
          }
          pos_5 {
            type
            font
            url
          }
        }
      }
    }
  }`)
  return (
    <>
        <Helmet>
          <link rel="shortcut icon" href="/public/favicon.png" type="image/png" />
          <meta name="author" content={data.site.siteMetadata.author}/>
        </Helmet>
        {children}
        <Footer contact={data.site.siteMetadata.contact}/>
    </>
  )
}




