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
      <link rel="canonical" href={data.site.siteMetadata.site} />
      <meta name="description" content={data.site.siteMetadata.siteDesc}/>
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
      site
      author
      description
    }
  }
}`