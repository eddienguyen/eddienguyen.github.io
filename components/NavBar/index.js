"use client";
import React, { Component } from "react";
import Container from "components/Container";
import NavItem from "./NavItem";
import ScrollingNav from "./ScrollingNav";
import DefaultNav from "./DefaultNav";
import NavBrand from "./NavBrand";
import APP_ROUTES from "@/modules/constants/app_routes";
import { UIContext } from "../contexts/UIProvider";
import { IconDownload } from "@/styles/theme/icons";
import asset from "@/plugins/assets";
import profileInfo from "public/data/about.json";
import navMenuItems from "@/modules/constants/menu";

class NavBar extends Component {
  static contextType = UIContext;

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
    // this.updateNavOpacity();
    // window.addEventListener("scroll", this.updateNavOpacity);
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.updateNavOpacity);
  }

  // componentDidUpdate(prevProps, prevState) {

  // }

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
    const { visibleMenu } = this.context;
    return (
      <div>
        <DefaultNav>
          <Container>
            <div className="grid grid-cols-6">
              <div className="col-span-1">
                <NavBrand className="navbar__logo" />
              </div>
              <div className="menu col-span-5">
                {navMenuItems.length > 0 &&
                  navMenuItems.map((eachItem, index) => (
                    <NavItem
                      href={eachItem.path}
                      className="uppercase"
                      key={index}
                    >
                      {eachItem.name}
                    </NavItem>
                  ))}
                {/* <NavItem href={APP_ROUTES.ABOUT.INDEX} className="uppercase">
                  About
                </NavItem>
                <NavItem href={APP_ROUTES.PROJECTS.INDEX} className="uppercase">
                  Projects
                </NavItem>
                <NavItem href={APP_ROUTES.STORIES.INDEX} className="uppercase">
                  Stories
                </NavItem>
                <NavItem
                  href={APP_ROUTES.PLAYGROUND.INDEX}
                  className="uppercase"
                >
                  Playground
                </NavItem> */}
                <NavItem
                  href={asset(profileInfo.pdf)}
                  className="uppercase"
                  target="_blank"
                  directLink
                  rel="noopener"
                >
                  <IconDownload className="text-base mr-3 align-text-bottom" />
                  My cv
                </NavItem>
              </div>
            </div>
          </Container>
        </DefaultNav>
        <ScrollingNav
          // opacity={this.state.navOpacity} by state
          opacity={visibleMenu ? 1 : 0}
          borderBottomWidth={this.props.bottomBorderWidth}
        >
          <Container className="flex flex-col justify-center items-baseline md:flex-row">
            {navMenuItems.length > 0 &&
              navMenuItems.map((eachItem, index) => (
                <NavItem href={eachItem.path} className="uppercase" key={index}>
                  {eachItem.name}
                </NavItem>
              ))}
            {/* <NavItem href={APP_ROUTES.ABOUT.INDEX} className="uppercase">
              About
            </NavItem>
            <NavItem href={APP_ROUTES.PROJECTS.INDEX} className="uppercase">
              Projects
            </NavItem>
            <NavItem href={APP_ROUTES.STORIES.INDEX} className="uppercase">
              Stories
            </NavItem>
            <NavItem href={APP_ROUTES.PLAYGROUND.INDEX} className="uppercase">
              Playground
            </NavItem> */}
            <NavItem
              href={asset(profileInfo.pdf)}
              className="uppercase"
              target="_blank"
              directLink
              rel="noopener"
            >
              <IconDownload className="text-base mr-3 align-text-bottom" />
              My cv
            </NavItem>
          </Container>
        </ScrollingNav>
      </div>
    );
  }
}

export default NavBar;
