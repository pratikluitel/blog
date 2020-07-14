import React from "react"
import Header from '../Components/HeaderComponent'
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"
import {Helmet} from "react-helmet"
import {graphql} from 'gatsby'


const Home = ({data}) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="http://pratikl.com.np/" />
      <meta name="description" content="A blog where I share my writings -- stories (fiction and otherwise), poems and some hot takes on things I see areound me"/>
    </Helmet>
    <Navigation typenav='nav'/>
    <Header author={data.site.siteMetadata.author} desc={data.site.siteMetadata.description}/>
    <PostsList/>
  </Layout>
)
export default Home;

export const PageQuery = graphql`query metaQuery {
  site {
    siteMetadata {
      title
      author
      description
    }
  }
}`