import React from "react"
import Layout from "../Components/layout"
import Navigation from "../Components/NavComponent"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default function About({ data }) {
  const content = data.allMarkdownRemark.nodes[0]
  return (
    <Layout>
      <Helmet>
        <title>About -- {data.site.siteMetadata.author}</title>
        <link rel="canonical" href={`${data.site.siteMetadata.site}/about`} />
        <meta
          name="description"
          content={`${data.site.siteMetadata.siteDesc}`}
        />
      </Helmet>
      <Navigation />
      <section class="About">
        <div id="main" class="container" style={{ marginTop: 80 + "px" }}>
          <div class="row">
            <div class="col-10 col-sm-8 offset-1 offset-sm-2">
              <div
                class="row row-header"
                id="title"
                style={{
                  marginTop: 30 + "px",
                  marginBottom: 20 + "px",
                  paddingBottom: 0 + "px",
                }}
              >
                <div class="col-8 offset-2">
                  <h1>
                    <strong>About</strong>
                  </h1>
                </div>
              </div>
              <div class="row row-content justify-content-center">
                <div class="author-pic">
                  <Img
                    fluid={
                      content.frontmatter.featuredImage.childImageSharp.fluid
                    }
                    alt="Photo of the author"
                  />
                </div>
              </div>
              <div class="row row-content" style={{ marginTop: 30 + "px" }}>
                <div class="text-content">
                  <div dangerouslySetInnerHTML={{ __html: content.html }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        site
        siteDesc
      }
    }
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "About" } } }) {
      nodes {
        frontmatter {
          featuredImage {
            childImageSharp {
              fluid(maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
`
