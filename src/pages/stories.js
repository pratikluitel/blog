import React, {Component} from "react"
import Layout from '../Components/layout'
import Navigation from "../Components/NavComponent"
import PostsList from "../Components/PostsListComponent"

class Stories extends Component {
  render(){
    return (
      <Layout>
        <Navigation/>
        <PostsList/>
      </Layout>
    )
  }
}

export default Stories;
