import React from "react"
import Header from '../Components/HeaderComponent'
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"
import {Helmet} from "react-helmet"

const Home = (props) => (
  <Layout>
    <Helmet>
      <title>Home -- Pratik Luitel</title>
      <link rel="canonical" href="http://pratikl.com.np/" />
      <meta name="description" content="A blog where I share my writings -- stories (fiction and otherwise), poems and some hot takes on things I see areound me"/>
    </Helmet>
    <Navigation typenav='nav'/>
    <Header image={props.data.imageOne.childImageSharp.fluid}/>
    <PostsList/>
  </Layout>
)
export default Home;

export const pageQuery = graphql`
    query {
        imageOne: file(relativePath: { eq: "images/img/personal/jumbotron.jpeg" }) {
        childImageSharp {
            fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `;