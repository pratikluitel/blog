import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Button } from "@material-ui/core"

function Header({ author, desc, image }) {
  return (
    <section className="Home">
      <div className="jumbotron vertical-center">
        <div className="bgim">
          <Img
            fluid={image}
            alt="man staring at a peculiar cloud"
            style={{
              position: "static",
              objectFit: "cover",
              overflow: "hidden",
              height: "100%",
            }}
          />
        </div>
        <div className="overlay"></div>
        <div className="container" id="hd-jumbo">
          <div className="row row-header text-center">
            <div className="col-12">
              <h2 style={{ color: "#ffffff" }}>
                <strong>{author}</strong>
              </h2>
            </div>
            <div className="col-12 d-none d-sm-block">
              <hr style={{ width: 300 + "px" }} />
            </div>
            <div className="col-12 d-block d-sm-none">
              <hr style={{ width: 90 + "%" }} />
            </div>
            <div className="col-12">
              <h5 style={{ color: "#ffffff" }}>{desc}</h5>
            </div>
            <div className="col-12">
              <br />
            </div>
            <div className="col-12">
              <h4>
                <Link to="#main">
                  <Button className="btn btn-secondary">
                    <span
                      className="fa fa-angle-double-down"
                      style={{ color: "white", fontSize: "large" }}
                    ></span>
                  </Button>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
