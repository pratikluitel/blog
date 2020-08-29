import React, { Component } from "react"
import { Collapse } from "reactstrap"
import { Link } from "gatsby"
import $ from "jquery"

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false,
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  componentDidMount() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction()
    }

    // for homescreen (that has the 'nav' id), display navbar only when scrolling down one page
    function myFunction() {
      if (window.pageYOffset >= $(window).height()) {
        if (document.getElementById("nav")) {
          $("#nav").css("opacity", "1")
          $("#nav").css("top", "0")
        }
      } else {
        if (document.getElementById("nav")) {
          $("#nav").css("opacity", "0")
          $("#nav").css("top", "-80px")
        }
      }
    }

    //navbar scroll highlighting
    ;(function () {
      var navlinks = $("nav ul li"),
        navH = $("nav").height(),
        section = $("section"),
        documentl = $(document)

      var targetClass = "." + $("section").attr("class") + "-marker"
      $(targetClass).addClass("active")

      documentl.on("scroll", function () {
        var currentScrollPos = documentl.scrollTop() + 100
        section.each(function () {
          var self = $(this)
          if (
            self.offset().top < currentScrollPos + navH &&
            currentScrollPos + navH < self.offset().top + self.outerHeight()
          ) {
            var targetClass = "." + self.attr("class") + "-marker"
            navlinks.removeClass("active")
            $(targetClass).addClass("active")
          }
        })
      })
    })()
    if (this.props.isPostPage === true) {
      $("#toggling").css("position", "absolute")
      $("#togglingb").css("position", "absolute")
    }
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }

  render() {
    return (
      <div className="container-fluid" id="#navigation">
        <nav
          className="nav nav-sm nav-smol nav-justified d-block d-md-none"
          id={this.props.typenav}
        >
          <button
            onClick={this.toggleNav}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#Navbar"
            style={{ color: "white" }}
          >
            <span className="fa fa-bars"></span>
          </button>
          <Collapse isOpen={this.state.isNavOpen} id="Navbar">
            <ul className="navbar-nav menu">
              <li className="nav-item Home-marker">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item Blog-marker">
                <Link className="nav-link" to="/#main">
                  Blog
                </Link>
              </li>
              <li className="nav-item Contact-marker">
                <Link className="nav-link" to="#contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item About-marker">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </Collapse>
        </nav>

        <nav
          className="nav nav-sm nav-not-sm nav-justified d-none d-md-block d-lg-none"
          id="toggling"
        >
          <ul className="navbar-nav">
            <li className="nav-item Home-marker">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item Blog-marker">
              <Link className="nav-link" to="/#main">
                Blog
              </Link>
            </li>
            <li className="nav-item Contact-marker">
              <Link className="nav-link" to="#contact">
                Contact
              </Link>
            </li>
            <li className="nav-item About-marker">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <nav
          className="nav nav-sm nav-for-lg nav-justified d-none d-lg-block"
          id="togglingb"
        >
          <ul className="navbar-nav">
            <li className="nav-item Home-marker">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item Blog-marker">
              <Link className="nav-link" to="/#main">
                Blog
              </Link>
            </li>
            <li className="nav-item Contact-marker">
              <Link className="nav-link" to="#contact">
                Contact
              </Link>
            </li>
            <li className="nav-item About-marker">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

Navigation.defaultProps = {
  typenav: "alt-nav",
  isPostPage: false,
}

export default Navigation
