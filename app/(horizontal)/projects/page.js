"use client";

import ReactPlayer from "react-player";
import { useRef, useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import dynamic from "next/dynamic";

import AppLink from "@/components/AppLink";
import Container from "@/components/Container";
import Section from "@/components/Section";
import asset from "@/plugins/assets";
import projects from "public/data/projects.json";
import personalInfo from "public/data/about.json";
import Background from "@/components/Background";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import {
  IconFacebook,
  IconInsta,
  IconYoutube,
  IconArrowLeft,
} from "@/styles/theme/icons";
import { border, sideNavW } from "@/styles/theme/variables";
import StringExtra from "@/plugins/utils/StringExtra";
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  ssr: false,
});


const WheelControls = (slider) => {
  let touchTimeout;
  let position;
  let wheelActive;

  function dispatch(e, name) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e) {
    e.preventDefault();
    const direction =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (direction > 0) {
      slider.next();
    }

    if (direction < 0) {
      slider.prev();
    }
    // if (!wheelActive) {
    //   wheelStart(e);
    //   wheelActive = true;
    // }
    // wheel(e);
    // clearTimeout(touchTimeout);
    // touchTimeout = setTimeout(() => {
    //   wheelActive = false;
    //   wheelEnd(e);
    // }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

function ProjectsPage(props) {
  const [list, setList] = useState(projects?.data);
  const [isSliderCreated, setIsSliderCreated] = useState(false);
 
  const handleWheelEvent = (event) => {
    event.preventDefault();
    const direction =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
    if (direction > 0) {
      if(slider.current) slider.current.next();
    }

    if (direction < 0) {
      if(slider.current) slider.current.prev();
    }
  };

  // TODO: add animation ease like locomotive scroll
  const [sliderRef, slider] = useKeenSlider(
    {
      slides: {
        perView: 4,
      },
      created(slider) {
        setIsSliderCreated(true);
        // console.log("slider was created", slider.container);
        // slider.container.addEventListener("wheel", handleWheelEvent, {
        //   passive: false,
        // });
      },
      // slideChanged() {},
    },
    [
      // plugins
      // WheelControls,
    ]
  );

  const initWheel = () => {

  }
  

  useEffect(() => {
    
    initWheel();

    return () => {
      
    }
  }, [isSliderCreated])
  
  return (
    <main className="projects-page relative">
      <Background />
      <Section className="first page__holder h-screen w-screen overflow-hidden">
        <Container className="h-full">
          <div className="flex flex-col h-full">
            <div className="text__holder mx-auto w-2/3 flex-auto flex items-center justify-center">
              <h3 className="text__left text-xl font-light italic">
                Selected works <br /> from 2019
              </h3>
              <h1 className="text__title font-bold text-8xl text-center text-primary-red uppercase font-serif  ">
                Projects
              </h1>
              <h3 className="text__right text-xl font-light italic text-right">
                Scroll to <br /> discover
              </h3>
            </div>
            {list.length ? (
              <div className="projects w-full keen-slider" ref={sliderRef}>
                {list.map((each, index) => (
                  <div className="keen-slider__slide project__wrap" key={index}>
                    <div className="project-item">
                      <h3 className="item__index text-right">
                        {StringExtra.makeSpecificDigitNumber(index + 1, 2)}
                      </h3>
                      <div className="item__figure bg-primary-white">
                        <div
                          className="img img-cover w-100 scale-ratio"
                          style={{
                            backgroundImage: `url(${asset(
                              "/img/examples/w-1.jpg"
                            )})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>Currently there are no project(s) available</>
            )}
          </div>
        </Container>
      </Section>
      {/* bottomnav */}
      <div className="bot-nav fixed bottom-0 left-0 right-0">
        <Container>
          <div className="nav__holder w-full flex justify-between items-center">
            <div className="nav__socials flex items-center">
              <AppLink
                href={personalInfo?.facebook}
                target="_blank"
                className="social__link flex items-center w-4 h-4 mx-4 text-solitude hover:text-blue-deep-sky transition-sm"
              >
                <IconFacebook />
              </AppLink>
              <AppLink
                href={personalInfo?.instagram}
                target="_blank"
                className="social__link flex items-center w-4 h-4 mx-4 text-solitude hover:text-blue-deep-sky transition-sm"
              >
                <IconInsta />
              </AppLink>
              <AppLink
                href={personalInfo?.youtube}
                target="_blank"
                className="social__link flex items-center w-4 h-4 mx-4 text-solitude hover:text-blue-deep-sky transition-sm"
              >
                <IconYoutube />
              </AppLink>
            </div>
            <div className="nav__btns">
              <button
                className="btn-icon bg-primary-white hover:bg-solitude text-base"
                // onClick={handleScrollToTopClick}
              >
                <IconArrowLeft className="h-4" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        <h3 className="project-title">
          <AppLink
            href="https://leapthew3-webapp.herokuapp.com/"
            target="_blank"
            className="anchor"
          >
            Leap The World-wide-web
          </AppLink>
        </h3>
        <div className="img-container">
          <img
            src={asset("ProfilePage_thumbnail.png")}
            alt="project_figure_1"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h3 className="project-title">
          <AppLink
            href="https://drive.google.com/file/d/1frwwbry_qbg_fP2cE4HMibmxYoJP3Iiw/view"
            target="_blank"
            className="anchor"
          >
            Smith-it Smith
          </AppLink>
        </h3>
        <div className="reactVideoPlayer w-full scale-ratio">
          <ReactPlayer
            ref={playerVideoRef}
            allowFullScreen={true}
            // onReady={onVideoReady}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            muted={true}
            playsinline={isPlaying}
            playing={isPlaying}
            loop
            className="react-player content"
            url={
              "https://www.facebook.com/eddie.aquarious.96/videos/1461503510571314"
            }
            controls={true}
            width="100%"
            height="100%"
            pip={true}
            // light={<img src={thumbnail} alt={title} />}
          />
        </div>
        <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Feddie.aquarious.96%2Fvideos%2F1461503510571314&width=560&show_text=false&height=400&appId"
            title="SiS-video"
            width="560"
            height="400"
            style={{ border: "none", overflow: "hidden" }}
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="true"
          ></iframe>
      </div> */}

      <style jsx>{`
        .text__title {
          //flex: 1 1 64%;
        }
        .text__left,
        .text__right {
          flex: 1 1 18%;
        }
        .projects {
          overflow: visible;
        }
        .project-title {
          margin: 1.75rem 0;
        }
        .img-container {
          // cursor: pointer;
          overflow: hidden;
          display: inline-block;
          & > img {
            transition: transform 0.3s;
          }
          &:hover {
            & > img {
              filter: blur(3px);
              transform: scale(1.05);
            }
          }
        }
        .bot-nav {
          // test
          // border-top: 1px solid red;
        }
        .nav__holder {
          height: ${sideNavW}px;
        }
        .project__wrap {
          &:first-of-type {
            .item__figure {
              border-left-width: 1px;
            }
          }
        }
        .item__figure {
          padding: 10px;
          border-style: solid;
          border-width: 1px 1px 1px 0;
          border-color: rgba(88, 88, 88, 0.1);
        }
      `}</style>
      <style jsx global>{`
        .projects-page {
          .page__holder {
            padding-bottom: ${sideNavW}px;
          }
        }
      `}</style>
    </main>
  );
}

export default ProjectsPage;
