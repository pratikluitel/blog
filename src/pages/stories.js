import React from "react"
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import {RenderCard} from '../Components/PostsListComponent'
import {Helmet} from 'react-helmet'
import {Link, graphql, useStaticQuery} from 'gatsby'

export default function Stories() {

  const data = useStaticQuery(graphql`
  query storyQuery {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "Stories"}}},sort: { order:DESC, fields: frontmatter___date}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`)
  
    return (
      <Layout>
        <Helmet>
          <title>Stories -- Pratik Luitel</title>
          <link rel="canonical" href="http://pratikl.com.np/stories" />
        </Helmet>
        <Navigation/>
        <section className="Blog"  id="main">
            <div className="text-center" id="bloghead">
                <h1><strong>Stories</strong></h1>
                <br />
                <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4" id="blognav">
                    <div className="row align-self-center">
                        <div className="col-4 active">
                            <Link to="/stories" className="stretched-link">Stories</Link>
                        </div>
                        <div className="col-4">
                            <Link to="/essays" className="stretched-link">Essays</Link>
                        </div>
                        <div className="col-4">
                            <Link to="/poems" className="stretched-link">Poems</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-8 offset-sm-2">
                <div className="row">
                    {data.allMarkdownRemark.edges.map(
                        ({node})=>(
                            <div className="col-md-6" key={node.id}>{RenderCard({node})}</div>
                        ))}
                </div>
            </div>
        </section>
      </Layout>
    )
}