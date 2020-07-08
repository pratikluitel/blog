import React from "react"

import Navigation from "../components/NavComponent"
import Header from "../components/HeaderComponent"
import PostList from "../components/PostsListComponent"
import Footer from "../components/FooterComponent"
import Helmet from "react-helmet"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Helmet>
        <title>Home -- Pratik Luitel</title>
    </Helmet>
    <Navigation typenav='nav'/>
    <Header />
    <PostList />
    <Footer />
  </>
)

export default IndexPage
