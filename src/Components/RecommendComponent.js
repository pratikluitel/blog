import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

function RenderCard({node}){
    return(
        <div className="card hoverable" style={{backgroundColor:"white"}}>
            <div className="card-body">
                <div className="imgcont">
                {node.frontmatter.featuredImage != null ? <Img className="card-img-top" fluid={node.frontmatter.featuredImage.childImageSharp.fluid} alt={`${node.frontmatter.alt}`}/>: null }
                    <div id="date">
                        {node.frontmatter.date}
                    </div>
                </div>
                <div className="card-title" style={{backgroundColor:"white"}}>
                    <p style={{fontSize: 'xx-large'}}>{node.frontmatter.title}</p>
                </div>
                <div className="card-content">
                    <p style={{fontSize: 'small'}}>{node.excerpt}</p>
                </div>  
                <div className="card-content" style={{color:'grey', fontSize: 'small'}}>
                    <p style={{fontSize: 'x-small'}}>{node.timeToRead} min read</p>
                </div>
                <Link to={node.fields.slug} className="stretched-link"> </Link>
            </div>
        </div>
    )
}


export default function Recommend({ttl}){
    const big_data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}, limit: 2) {
          edges {
            node {
              timeToRead
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                featured
                alt
                featuredImage {
                    childImageSharp {
                      fluid(maxHeight: 300) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
              }
              id
            }
          }
        }
      }
    `
    )
    return(
        <div className="row row-content recomm">
            <div className="col-10 col-md-8 offset-1 offset-md-2">
                <h4 style={{color: 'lightseagreen'}}><strong>More Posts</strong></h4>
                <hr style={{borderTop: "1px solid #aab4b5"}}/>
                <div className="row row-content">
                {
                big_data.allMarkdownRemark.edges.map
                (
                    ({node})=>
                        (
                            node.frontmatter.title !== ttl ? 
                                <div className="col-md-6" key={node.id}>
                                    {RenderCard({node})}
                                </div> 
                            : null
                    )
                )
                }
                </div>
            </div>
        </div>
    )
}