import React from "react"
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import {Helmet} from 'react-helmet'
import {Link, graphql, useStaticQuery} from 'gatsby'

function RenderCard({node}){
  return(
      <div className="card hoverable">
          <div className="card-body">
              <div className="imgcont">
                  {node.frontmatter.image != null ? <img className="card-img-top" src={`${node.frontmatter.image}`} alt=""/>: null }
                  <div id="date">
                      {node.frontmatter.date}
                  </div>
              </div>
              <div className="card-title">
                  <p style={{fontSize: 'xx-large'}}>{node.frontmatter.title}</p>
              </div>
              <div className="card-content">
                  <p>{node.excerpt}</p>
              </div>  
              <div className="card-content" style={{color:'grey', fontSize: 'small'}}>
                  <p>{node.timeToRead} min read</p>
              </div>
              <Link to={node.fields.slug} className="stretched-link"> </Link>
          </div>
      </div>
  )
}

export default function Poems() {

  const data = useStaticQuery(graphql`
  query poemQuery {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "Poems"}}},sort: { order:DESC, fields: frontmatter___date}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            image
            title
          }
        }
      }
    }
  }
`)
  
    return (
      <Layout>
        <Helmet>
          <title>Poems -- Pratik Luitel</title>
          <link rel="canonical" href="http://pratikl.com.np/poems" />
        </Helmet>
        <Navigation/>
        <section className="Blog"  id="main">
            <div className="text-center" id="bloghead">
                <h1><strong>Poems</strong></h1>
                <br />
                <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-4 offset-md-4" id="blognav">
                    <div className="row align-self-center">
                        <div className="col-4">
                            <Link to="/stories" className="stretched-link">Stories</Link>
                        </div>
                        <div className="col-4">
                            <Link to="/essays" className="stretched-link">Essays</Link>
                        </div>
                        <div className="col-4 active">
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