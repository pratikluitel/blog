import React, {Component} from "react"
import Header from '../Components/HeaderComponent'
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"
import {Helmet} from "react-helmet"

class Home extends Component {
  render(){
    return (
      <Layout>
        <Helmet>
          <title>Home -- Pratik Luitel</title>
          <link rel="canonical" href="http://pratikl.com.np/" />
        </Helmet>
        <Navigation typenav='nav'/>
        <Header/>
        <PostsList/>
      </Layout>
    )
  }
}

export default Home;
