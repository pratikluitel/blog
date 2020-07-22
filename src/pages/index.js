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
      <meta property="og:title" content={data.site.siteMetadata.title}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={data.site.siteMetadata.site}/>
      <meta property="og:image" content='./images/img/personal/jumbotron.webp'/>
      <meta property="og:site_name" content={`${data.site.siteMetadata.author} -- A Blog`}/>
      <meta property="og:description" content={data.site.siteMetadata.siteDesc}/>
    </Helmet>
    <Navigation typenav='nav'/>
    <Header author={data.site.siteMetadata.author} desc={data.site.siteMetadata.description} image={data.allImageSharp.nodes[0].fluid}/>
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
    allImageSharp(filter: {fluid: {originalName: {eq: "jumbotron.webp"}}}) {
      nodes {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

}`