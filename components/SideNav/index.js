"use client";

import { headerIndex, sideNavW, color } from "@/styles/theme/variables";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

import AppLink from "@/components/AppLink";
import {
  IconFacebook,
  IconInsta,
  IconYoutube,
  IconArrowUp,
} from "@/styles/theme/icons";
import personalInfo from "public/data/about.json";
import pkg from "package.json";
import { UIContext } from "@/components/contexts/UIProvider";

function SideNav(props) {
  const sideNavRef = useRef();
  const [show, setShow] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const { visibleMenu, visibleNav, setVisibleMenu } = useContext(UIContext);

  const handleScrollToTopClick = (e) => {
    e.preventDefault();

    gsap.to(window, { scrollTo: 0, duration: 2, ease: "sine.inOut" });
  };

  const handleBurgerClick = () => {
    setVisibleMenu(!visibleMenu);
    // setOpenMenu(!openMenu);
    // setVisibleDrawer(false);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.to(sideNavRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(sideNavRef.current, {
            x: 0,
            duration: 0.65,
            ease: "sine.out",
          });
        },
        onEnterBack: () => {
          gsap.to(sideNavRef.current, {
            x: sideNavW,
            duration: 0.65,
            ease: "sine.in",
          });
        },
      },
    });
    return () => {};
  }, []);

  return (
    <div className="side-nav fixed top-0 bottom-0 right-0" ref={sideNavRef}>
      <div className="nav__holder w-full h-full flex flex-col justify-between items-center">
        <div className="nav__name">
          <h3 className="uppercase whitespace-nowrap font-normal text-blue-rock ">
            folio - {pkg.version}
          </h3>
        </div>
        <div className="nav__socials flex flex-col">
          <AppLink
            href={personalInfo?.facebook}
            target="_blank"
            className="social__link w-4 h-4 my-4 inline-block text-solitude hover:text-blue-deep-sky transition-sm"
          >
            <IconFacebook />
          </AppLink>
          <AppLink
            href={personalInfo?.instagram}
            target="_blank"
            className="social__link w-4 h-4 my-4 inline-block text-solitude hover:text-blue-deep-sky transition-sm"
          >
            <IconInsta />
          </AppLink>
          <AppLink
            href={personalInfo?.youtube}
            target="_blank"
            className="social__link w-4 h-4 my-4 inline-block text-solitude hover:text-blue-deep-sky transition-sm"
          >
            <IconYoutube />
          </AppLink>
        </div>
        <div className="nav__btns flex flex-col">
          <button
            className="btn-icon bg-primary-white hover:bg-solitude text-base"
            onClick={handleScrollToTopClick}
          >
            <IconArrowUp className="w-4" />
          </button>
        </div>

        <button
          className="btnMenu burger absolute btn-icon lg bg-primary-black cursor-pointer"
          onClick={handleBurgerClick}
        >
          <span className="hamburgerMenu block mx-auto w-6 h-5">
            <span
              className={`bar ${
                visibleMenu ? "animate bg-transparent" : "bg-primary-white"
              } relative block `}
            />
          </span>
        </button>
      </div>

      <style jsx>{`
        .side-nav {
          width: ${sideNavW}px;
          z-index: ${headerIndex};
          transform: translateX(${sideNavW}px);
        }
        .nav__holder {
          padding-top: 55px;
          padding-bottom: 55px;
        }
        .nav__name {
          // writing-mode: tb;
          direction: rtl;
          transform-origin: bottom right;
          transform: rotate(-90deg) translateY(-${sideNavW / 2}px);
          font-size: 10px;
          letter-spacing: 0.5em;
        }
        .nav__btns {
          .btn-icon {
          }
        }

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
      <style jsx global>{`
        .side-nav {
          .nav__btns {
            .btn-icon {
              &:hover {
                .anticon {
                  opacity: 1;
                }
              }
              .anticon {
                opacity: 0.5;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}

export default SideNav;
