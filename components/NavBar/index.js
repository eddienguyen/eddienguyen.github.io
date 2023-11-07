"use client";
import React, { Component } from "react";
import Container from "components/Container";
import NavItem from "./NavItem";
import ScrollingNav from "./ScrollingNav";
import DefaultNav from "./DefaultNav";

class NavBar extends Component {
  static defaultProps = {
    bottomBorderWidth: 2,
    // headerHeight: typeof window !== undefined ? window.innerHeight : 0,
    headerHeight: 0,
    fadeInDistance: 40,
  };

  constructor(props) {
    super(props);

    this.state = {
      navOpacity: 0,
    };
    // bind functions
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
  }
  componentDidMount() {
    this.updateNavOpacity();
    window.addEventListener("scroll", this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateNavOpacity);
  }

  /**
   * fading SrollingNavBar when scrolldown
   * endFade: show full ScrollingNavBar when scrolled all away from DefaultNavBar
   */
  updateNavOpacity() {
    const navbarHeight = 50; //defaultNavBar height
    const { bottomBorderWidth, fadeInDistance } = this.props;

    let _headerHeight = this.props.headerHeight;

    if (typeof window !== undefined) {
      _headerHeight = window.innerHeight;
    }

    const endFade = _headerHeight - navbarHeight - bottomBorderWidth;
    const startFade = endFade - fadeInDistance;
    const scrollY = window.scrollY;

    if (scrollY < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 });
      return;
    }

    if (scrollY > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 });
      return;
    }

    const pxPastStartFade = scrollY - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }

  render() {
    return (
      <div>
        <DefaultNav>
          <Container className="text-center">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/about">About</NavItem>
          </Container>
        </DefaultNav>
        <ScrollingNav
          opacity={this.state.navOpacity}
          borderBottomWidth={this.props.bottomBorderWidth}
        >
          <Container className="flex justify-center md:justify-end">
            {/* NavBrand here (at start) */}
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/about">About</NavItem>
          </Container>
        </ScrollingNav>
      </div>
    );
  }
}

export default NavBar;
