"use client";

import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Container from "../Container";
import asset from "@/plugins/assets";
import {
  black,
  blueBell,
  headerHeight,
  solitude,
} from "@/styles/theme/variables";
import { IconArrowLeft, IconArrowRight } from "@/styles/theme/icons";
import Text3D from "./Text3D";
import AppLink from "@/components/AppLink";
import RunningTexts from "./RunningTexts";
import { UIContext } from "../contexts/UIProvider";

// import { Container } from "theme/grid";
// import { Background, Intro, IntroBanner } from "./Header.style";

// import { color } from "theme/variables";
// import { blueDeepSky } from "theme/variables";

function Header(props) {
  const { loadingState } = useContext(UIContext);
  const [isInit, setIsInit] = useState(false);
  const persHolder = useRef();
  const galleryMediaRef = useRef();
  const backgroundRef = useRef();

  const MAX_ROTATE_X = 10; // deg
  const MAX_ROTATE_Y = 10; // deg

  let _top, _right, _bot, _left;

  const manageMouseMove = (event) => {
    const x = event.clientX / persHolder.current.offsetWidth;
    const y = event.pageY / persHolder.current.offsetHeight;
    const _rotateX = x * (MAX_ROTATE_X * 2) + -MAX_ROTATE_X;
    const _rotateY = y * (MAX_ROTATE_Y * 2) + -MAX_ROTATE_Y;
    const _perspective = window.innerWidth * 5 + "px"; // long used formula, 5 = some number
    persHolder.current.style.transform = `perspective(${_perspective}) rotateX(${_rotateY}deg) rotateY(${_rotateX}deg)`;
  };

  // useEffect(() => {
  //   const scalePercent =
  //     window.innerWidth / galleryMediaRef.current.clientWidth;
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(galleryMediaRef.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: 0,
  //       end: window.innerHeight,
  //     },
  //     scale: `+=${scalePercent}`,
  //   });

  //   // console.log("scalePercent", scalePercent);

  //   return () => {};
  // }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // backgroundRef.current.style.clipPath = `inset(${_top}px ${_right}px ${_bot}px ${_left}px)`;

    return () => {};
  }, []);

  useEffect(() => {
    // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook

    const init = () => {
      if (isInit) return;

      // capture on resize
      const _rect = galleryMediaRef.current?.getBoundingClientRect();
      _top = _rect.top;
      _bot = window.innerHeight - _rect.bottom;
      _left = _rect.left;
      _right = window.innerWidth - _rect.right;

      let timeline = new gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top",
          end: "+=500px",
          scrub: true,
          // markers: true,
        },
      });
      timeline.from(backgroundRef.current, {
        clipPath: `inset(${_top}px ${_right}px ${_bot}px ${_left}px)`,
      });

      setIsInit(true);
    };

    if (loadingState === "init") {
      setIsInit(false);
      init();
    }
    if (loadingState === "done") {
      init();
    }
    return () => {};
  }, [loadingState]);

  return (
    <section
      // style={{ borderBottom: `2px solid ${color.blueDeepSky}` }}
      className="app-section min-h-screen flex hero relative overflow-hidden"
      onMouseMove={manageMouseMove}
      ref={persHolder}
    >
      <div
        className="background absolute h-full w-full top-0 left-0"
        ref={backgroundRef}
      >
        <img
          src={asset("img/examples/TopGroup7895.jpg")}
          alt="background"
          className="image object-cover w-full h-full"
        />
      </div>
      <Container className="header__container flex-1">
        <div className="perspective-holder relative h-full w-full flex flex-col justify-center">
          <div
            className="gallery w-full grid grid-cols-6"
            // data-scroll
            // data-scroll-speed="0.7"
          >
            <div className="gallery__nav relative flex justify-start items-end">
              {/* <div className="nav__items relative flex items-center">
                <button className="prev nav__btn">
                  <IconArrowLeft />
                </button>
                <div className="value mx-3 inline-block font-bold text-solitude">
                  <span className=" current text-blue-bell">1</span>/
                  <span className=" total text-primary-black">5</span>
                </div>
                <button className="next nav__btn">
                  <IconArrowRight />
                </button>
              </div> */}
            </div>
            <div
              className="gallery__media relative col-span-5"
              ref={galleryMediaRef}
            >
              {/* <div
                className="img w-full h-full"
                style={{
                  backgroundImage: `url(${"img/examples/header-slide-1.png"})`,
                }}
              /> */}
            </div>
          </div>

          <div className="typo relative " data-scroll data-scroll-speed="0.25">
            <div className="relative w-100 lg:w-1/2 flex flex-nowrap  items-center text-2xl intro_banner">
              <div className="typo__holder relative flex-auto leading-tight flex flex-col items-start">
                <AppLink href="/playground" className="first">
                  <Text3D
                    className="text-base text-blue-bell font-bold uppercase"
                    primary="Hi"
                    secondary="Hello"
                  />
                </AppLink>

                <AppLink href="/about" className="second my-1">
                  <Text3D
                    className=" text-6xl font-bold font-serif text-primary-black"
                    primary="I'm Eddie,"
                    secondary="Quân Nguyễn"
                  />
                </AppLink>

                <AppLink href="/projects" className="third">
                  <Text3D
                    className=" block text-3xl text-gray-500"
                    primary="Front-end Developer."
                    secondary="Fulltime Freelancer."
                  />
                </AppLink>
              </div>
              {/* <Image src={require('public/Ava-portrait.jpg')} alt='portrait' /> */}
            </div>
          </div>
        </div>
      </Container>
      <RunningTexts className="absolute w-auto bottom-0 left-0" />

      <style jsx>{`
        .perspective-holder {
          will-change: transform;
        }
        .typo {
          transform-style: preserve-3d;
        }
        .typo__holder {
          z-index: 1;
        }
        .intro_banner {
          transform-style: preserve-3d;
          transform: translateZ(1000px);
        }
        .gallery {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        .gallery__nav {
          z-index: 1;
        }
        .nav__items {
          z-index: 1;
        }

        .gallery__media {
          transform-style: preserve-3d;
          transform: translateZ(-1000px);
          z-index: -99;
          // box-shadow: -16px 25px 65px 0px rgba(0, 0, 0, 0.2);
          // border: 1px solid red; // debugging
        }

        .img {
          background-image: url(${asset("/Ava-portrait.jpg")});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right;
        }

        .value {
          font-size: 0.7rem;
          letter-spacing: 0.4em;
        }

        .background {
          z-index: -99;
          // box-shadow: -16px 25px 65px 0px rgba(0, 0, 0, 0.2);

          .image {
            object-position: top left;
            object-fit: cover;
            // filter: grayscale(1);
          }
          &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${black};
            opacity: 0.2;
            z-index: 1;
          }
        }

        @media all and (max-width: 768px) {
          .background {
            background-size: 100%;
            opacity: 0.4;
          }

          .intro_banner {
            font-size: 1em;
            text-align: center;
          }
        }

        @media all and (max-width: 376px) {
          .background {
            background-size: 100%;
            opacity: 0.4;
          }

          .intro_banner {
            font-size: 1em;
            text-align: center;
          }
        }
      `}</style>
      <style jsx global>{`
        .hero {
          padding-top: ${headerHeight}px;
          padding-bottom: ${headerHeight}px;

          .header__container {
            // mix-blend-mode: color-dodge;
            // filter: invert(100%);
          }

          .nav__btn {
            width: 0.7rem;
            color: ${solitude};
            transition: all 0.1s ease-in;
            &:hover {
              color: ${blueBell};
            }

            .anticon,
            svg {
              width: 100%;
            }
          }
          .typo {
            .first {
              letter-spacing: 0.7em;
            }
            .second {
              // border-bottom: 1px solid black;
            }
            .third {
              margin-top: 0.8rem;
              // line-height: 0.7;
              // border-bottom: 1px solid black;
              letter-spacing: 0.05em;
            }
          }
        }
      `}</style>
    </section>
  );
}

export default Header;
