import React, {Component} from "react"
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"
import {Helmet} from 'react-helmet'

class Stories extends Component {
  render(){
    return (
      <Layout>
        <Helmet>
          <title>Stories -- Pratik Luitel</title>
          <link rel="canonical" href="http://pratikl.com.np/stories" />
        </Helmet>
        <Navigation/>
        <PostsList/>
      </Layout>
    )
  }
}

export default Stories;
