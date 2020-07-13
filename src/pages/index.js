import React from "react"
import Header from '../Components/HeaderComponent'
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"
import {Helmet} from "react-helmet"


const Home = () => (
  <Layout>
    <Helmet>
      <title>Home -- Pratik Luitel</title>
      <link rel="canonical" href="http://pratikl.com.np/" />
      <meta name="description" content="A blog where I share my writings -- stories (fiction and otherwise), poems and some hot takes on things I see areound me"/>
    </Helmet>
    <Navigation typenav='nav'/>
    <Header/>
    <PostsList/>
  </Layout>
)
export default Home;