"use client";
import React, { Component, memo } from "react";
import Container from "components/Container";
import NavItem from "./NavItem";
import ScrollingNav from "./ScrollingNav";
import DefaultNav from "./DefaultNav";
import NavBrand from "./NavBrand";
import APP_ROUTES from "@/modules/constants/app_routes";
import { UIContext } from "../contexts/UIProvider";
import { IconDownload } from "@/styles/theme/icons";
import { color } from "@/styles/theme/variables";
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
    position: "absolute",
  };

  constructor(props) {
    super(props);

    this.state = {
      navOpacity: 0,
    };
    // bind functions
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }
  // componentDidMount() {
  // this.updateNavOpacity();
  // window.addEventListener("scroll", this.updateNavOpacity);
  // }

  // componentWillUnmount() {
  // window.removeEventListener("scroll", this.updateNavOpacity);
  // }

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

  handleBurgerClick = () => {
    if (this.context.setVisibleMenu) {
      setVisibleMenu(!visibleMenu);
    }
    // setOpenMenu(!openMenu);
    // setVisibleDrawer(false);
  };

  render() {
    const { visibleMenu, device } = this.context;
    const defaultPos = this.props.position;
    return (
      <div>
        <DefaultNav position={defaultPos}>
          <Container>
            <div className="grid grid-cols-6">
              <div className="col-span-1 flex">
                <button
                  className="btnMenu burger btn-icon lg bg-primary-black cursor-pointer"
                  onClick={this.handleBurgerClick}
                >
                  <span className="hamburgerMenu block mx-auto w-6 h-5">
                    <span
                      className={`bar ${
                        visibleMenu
                          ? "animate bg-transparent"
                          : "bg-primary-white"
                      } relative block `}
                    />
                  </span>
                </button>
                <NavBrand className="navbar__logo" />
              </div>
              {["lg", "xl", "xl2"].includes(device) && (
                <MMDesktopMenu className="" />
              )}
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

        <style jsx>{`
          // burger
          .btnMenu {
            top: 20px;
            left: 50%;
            transform: translateX(-50%);

            .hamburgerMenu {
              z-index: 3;
              transition: all 0.3s;
            }

            .bar {
              top: 50%;
              height: 2px;
              width: 100%;
              border-radius: 20px;
              transition: all 0ms 100ms;

              &.animate {
                // background: transparent;

                &:before {
                  bottom: 0;
                  transform: rotate(-45deg);
                  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1),
                    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
                }
                &:after {
                  top: 0;
                  transform: rotate(45deg);
                  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1),
                    transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
                }
              }
              &:before,
              &:after {
                content: "";
                position: absolute;
                background: ${color.white};
                width: 100%;
                right: 0;
                height: 2px;
                border-radius: inherit;
              }
              &:before {
                bottom: 7px;
                transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
                  transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
              }
              &:after {
                top: 7px;
                transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
                  transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
              }
            }
          }
        `}</style>
      </div>
    );
  }
}

export const DesktopMenu = (props) => (
  <div className={`${props.className} menu lg:col-span-5`}>
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
);

export const MMDesktopMenu = memo(DesktopMenu);
const MemoizedNavBar = memo(NavBar);
export default MemoizedNavBar;
