import React, {Component} from "react"
import Header from '../Components/HeaderComponent'
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"

class Home extends Component {
  render(){
    return (
      <Layout>
        <Navigation typenav='nav'/>
        <Header/>
        <PostsList/>
      </Layout>
    )
  }
}

export default Home;
