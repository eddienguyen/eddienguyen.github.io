import React, { Component } from "react";

import Container from "@/components/Container";
import pkg from "package.json";
import NavItem from "@/components/NavBar/NavItem";
import APP_ROUTES from "@/modules/constants/app_routes";
import profileInfo from "public/data/about.json";

import {
  IconDownload,
  IconFacebook,
  IconInsta,
  IconYoutube,
} from "@/styles/theme/icons";
import AppLink from "../AppLink";
import { black } from "@/styles/theme/variables";
import asset from "@/plugins/assets";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <footer className="footer py-8 bg-transparent text-xs ">
        <Container className="text-center">
          <h2
            className="brand mb-9 text-4xl font-bold text-blue-deep-sky font-serif"
            data-scroll
            data-scroll-speed="0.05"
          >
            <span className="brand__lg">E</span>
            <span className="brand__sm">ddie </span>
            <span className="brand__sm " onClick={this.toggle}>
              N
            </span>
            <span className="brand__sm">g</span>
          </h2>
          <div className="menu mb-7">
            <NavItem href={APP_ROUTES.ABOUT.INDEX} className="uppercase">
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
            </NavItem>
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
          <div className="socials">
            <AppLink
              href="/"
              className="social__link inline-block mx-4 text-solitude text-lg"
            >
              <IconFacebook />
            </AppLink>
            <AppLink
              href="/"
              className="social__link inline-block mx-4 text-solitude text-lg"
            >
              <IconInsta />
            </AppLink>
            <AppLink
              href="/"
              className="social__link inline-block mx-4 text-solitude text-lg"
            >
              <IconYoutube />
            </AppLink>
          </div>
        </Container>
        <div className="flex justify-between absolute left-0 right-0 bottom-0 footer__holder">
          <ul
            className={`overflow-hidden footer__list ${
              this.state.show ? "show" : "hide"
            }`}
          >
            <li className="">
              <p>Version: {pkg.version}</p>
            </li>
            <li>
              <p>Environment: {process.env.NODE_ENV}</p>
            </li>
            {/* <li>
                                        {typeof window !== 'undefined' && (
                                            <>
                                                <p>Browser: {Browser.browser.toString()}</p>
                                                <p>isFacebookWebview: {Browser.isFacebookWebview.toString()}</p>
                                                <p>isInAppWebview: {Browser.isInAppWebview.toString()}</p>
                                            </>
                                        )}
                                    </li> */}
          </ul>
        </div>
        <style jsx>{`
          .footer {
            position: relative;
            min-height: 1px;
            overflow: hidden;
          }
          .footer__list {
            &.show {
              height: auto;
            }
            &.hide {
              height: 0;
            }
          }
          .brand {
          }
          .brand__lg {
            // text-3xl = 30
            font-size: 1.06em;
          }
          .menu {
          }
          .socials {
          }
        `}</style>
        <style jsx global>{`
          .footer {
            .social__link {
              vertical-align: middle;
              transition: all 0.1s ease-in-out;
              &:hover {
                color: ${black};
              }
            }
          }
        `}</style>
      </footer>
    );
  }
}

export default Footer;
