import React from "react"
import Layout from '../Components/layout'
import Navigation from '../Components/NavComponent'
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';

export default function Err() {
  return (
    <Layout>
      <Helmet>
        <title>You sure? -- Pratik Luitel</title>
        <link rel="canonical" href="http://pratikl.com.np/about" />
      </Helmet>
      <Navigation/>
      <div id="main" className="container" style={{marginTop:80+'px'}}>
        <div className="row">
            <div className="col-10 col-sm-8 offset-1 offset-sm-2">
                <div className="row row-header" id="title">
                    <div className="col-8 offset-2" style={{marginTop: 30+'px'}}>
                        <h1><strong>Looks like you're lost!</strong></h1>
                    </div>
               </div>
                <div className="row row-content justify-content-center">
                    <div className="text-content" style={{marginTop: 20+'px'}}>
                        <p>You're lost in the wrong place, friend.
                            <Link href="/#main"> Here's a better place!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}
