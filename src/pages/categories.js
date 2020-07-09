import React, {Component} from "react"
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"
import {Helmet} from 'react-helmet'

class Categories extends Component {
  render(){
    return (
      <Layout>
        <Helmet>
          <title>Essays -- Pratik Luitel</title>
          <link rel="canonical" href="http://pratikl.com.np/essays" />
        </Helmet>
        <Navigation/>
        <PostsList/>
      </Layout>
    )
  }
}

export default Categories;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
