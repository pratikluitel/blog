import React from "react"
import Layout from '../Components/layout'
import { graphql } from "gatsby"
import Navigation from '../Components/NavComponent'
import Recommend from '../Components/RecommendComponent'
import Share from '../Components/ShareComponent'
import {Helmet} from 'react-helmet'
import Img from 'gatsby-image'

export default function Post( {data} ) {
    const post = data.markdownRemark
    let featuredImg = post.frontmatter.featuredImage;
    return (
        <Layout>
            <Helmet>
                <title>{post.frontmatter.title} -- {data.site.siteMetadata.author}</title>
                <link rel="canonical" href={`${data.site.siteMetadata.site}${post.fields.slug}`} />
            </Helmet>
            <Navigation isPostPage= {true} />
            <section className="Blog">
                <div id="main" className="container-fluid" style={{paddingBottom: 0+'px'}}>
                    <div className="row">
                        <div className="col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3">
                            <div className="row row-header justify-content-center" style={{marginTop: 100+'px'}} id="title">
                                <h1 style={{color:"#22a39f"}}><strong>{ post.frontmatter.title }</strong></h1>
                            </div>
                            <div className="row justify-content-center" style={{marginBottom: 20+'px'}} >
                                {featuredImg != null?<Img fluid={featuredImg.childImageSharp.fluid} style={{marginBottom: 5+'px', width:90+'%', borderRadius:5+'px'}} alt={`${post.frontmatter.image}`}/>:null}
                                <p className="caption">{ post.frontmatter.caption }</p>
                            </div>
                            <div className="row row-content" id="conttt">
                                <div dangerouslySetInnerHTML={{ __html: post.html }}/>
                            </div>
                            <div className="row row-content" style={{marginBottom:'20px',marginTop:'30px', justifyContent:'right'}}>
                                <p className="lowcaption"> Posted on {post.frontmatter.date}</p>
                            </div>
                        </div>
                    </div>
                    <Share slug={post.fields.slug}/>
                    <Recommend ttl={post.frontmatter.title}/>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
        site
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        caption
        featuredImage {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
      fields{
        slug
      }
    }
  }
`