"use client";

import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createRef,
  Fragment,
  useContext,
} from "react";
import { useKeenSlider } from "keen-slider/react";
import gsap from "gsap";

import Container from "@/components/Container";
import Section from "@/components/Section";
import projects from "public/data/projects.json";
import Background from "@/components/Background";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { sideNavW } from "@/styles/theme/variables";
import { sendEvent } from "@/plugins/utils/events.js";
import AppEvent from "@/modules/constants/event_names";
import ProjectItem from "./ProjectItem";
import BotNav from "@/components/NavBar/BotNav";
import AppLink from "@/components/AppLink";
import APP_ROUTES from "@/modules/constants/app_routes";
import { UIContext } from "@/components/contexts/UIProvider";

// const WheelControls = (slider) => {
//   let touchTimeout;
//   let position;
//   let wheelActive;

//   function dispatch(e, name) {
//     position.x -= e.deltaX;
//     position.y -= e.deltaY;
//     slider.container.dispatchEvent(
//       new CustomEvent(name, {
//         detail: {
//           x: position.x,
//           y: position.y,
//         },
//       })
//     );
//   }

//   function wheelStart(e) {
//     position = {
//       x: e.pageX,
//       y: e.pageY,
//     };
//     dispatch(e, "ksDragStart");
//   }

//   function wheel(e) {
//     dispatch(e, "ksDrag");
//   }

//   function wheelEnd(e) {
//     dispatch(e, "ksDragEnd");
//   }

//   function eventWheel(e) {
//     e.preventDefault();
//     const direction =
//       Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
//     if (direction > 0) {
//       slider.next();
//     }

//     if (direction < 0) {
//       slider.prev();
//     }
//     // if (!wheelActive) {
//     //   wheelStart(e);
//     //   wheelActive = true;
//     // }
//     // wheel(e);
//     // clearTimeout(touchTimeout);
//     // touchTimeout = setTimeout(() => {
//     //   wheelActive = false;
//     //   wheelEnd(e);
//     // }, 50);
//   }

//   slider.on("created", () => {
//     slider.container.addEventListener("wheel", eventWheel, {
//       passive: false,
//     });
//   });
// };

const TEXT_DURATION = 0.7;

function ProjectsPage(props) {
  const mainRef = useRef();
  const titleRef = useRef();
  const prevTitle = useRef(-1);

  const { handlePageLoaded } = useContext(UIContext);

  const [list, setList] = useState(projects?.data);

  const [textRefs, setTextRefs] = useState([]); // project title (DOM Elements)
  const [currentHover, setCurrentHover] = useState(-1); // index
  const [titleFirstTimeInit, setTitleFirstTimeInit] = useState(false); // first time initialize

  const [isSliderCreated, setIsSliderCreated] = useState(false);
  const slideOptions = {
    slides: {
      perView: 4,
    },
    created(slider) {
      setIsSliderCreated(true);
      // slider.container.addEventListener("wheel", handleWheelEvent, {
      //   passive: false,
      // });
    },
    // slideChanged() {},
  };

  const handleSlideToFirstClick = (event) => {
    if (slider.current) slider.current.moveToIdx(0);
  };

  const handleWheelEvent = (event) => {
    event.preventDefault();
    const direction =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;
    if (direction > 0) {
      if (slider.current) slider.current.next();
    }

    if (direction < 0) {
      if (slider.current) slider.current.prev();
    }
  };

  // TODO: add animation ease like locomotive scroll
  const [sliderRef, slider] = useKeenSlider(slideOptions, [
    // plugins
    // WheelControls,
  ]);

  const initWheel = () => {
    try {
      if (slider.current) {
        // wheel on main => slider moves
        mainRef.current.addEventListener("wheel", handleWheelEvent, true);
      }
    } catch (error) {
      console.warn("[initWheel] error:", error);
    }

    // when initWheel is done, call init to execute next initial func(s)
    init();

    return () => {
      mainRef.current?.removeEventListener("wheel", handleWheelEvent);
    };
  };

  /**
   *  map refs to every project title
   */
  const initTexts = async () => {
    setTextRefs(
      Array(list.length)
        .fill()
        .map((val, i) => textRefs[i] || createRef())
    );

    return true;
  };

  const initAnimateTexts = () => {
    for (let i = 0; i < textRefs.length; i++) {
      gsap.set(textRefs[i].current, {
        opacity: 0,
        // y: "100%",
        // y: "-50%",
        // x: "-50%",
        top: "100%",
      });
    }
  };

  const awake = async () => {
    // load extra stuffs
    initTexts();
    // console.log("textRefs[i]", textRefs.length);
    setTitleFirstTimeInit(true);
    return true;
  };

  const init = async () => {
    await awake();

    // console.log("[Projectpage] init");
    // emit event loaded to preloader here ?
    // sendEvent(AppEvent.PAGE_LOADED);
    handlePageLoaded();
  };

  useEffect(() => {
    // let removeListener = initWheel();
    let removeListener;
    if (isSliderCreated) {
      removeListener = initWheel();
    }

    return removeListener;
  }, [isSliderCreated]);

  useEffect(() => {
    if (list.length > 0) {
      if (titleFirstTimeInit) {
        // initTexts in awake at the first time
        // set refs to textRefs
        initTexts();
      }

      // refresh keen-slider
      if (slider?.current) {
        slider?.current.track.init();
        slider?.current.update(slideOptions);
      }
    } else {
      // run once
      // TODO: should init after fetching data, currently at mounting time
      init();
    }
  }, [JSON.stringify(list)]);

  useLayoutEffect(() => {
    if (textRefs.length) {
      initAnimateTexts();
    }
  }, [textRefs.length]);

  useEffect(() => {
    // slider out focus (-1) => reanimate title

    if (currentHover !== -1) {
      // project hovered
      gsap.killTweensOf(textRefs[currentHover]?.current);

      gsap.to(titleRef.current, {
        opacity: 0,
        y: "-120%",
        duration: TEXT_DURATION,
        ease: "sine.out",
      });
      gsap.fromTo(
        textRefs[currentHover]?.current,
        {
          autoAlpha: 0,
          // y: "100%",
          top: "120%",
        },
        {
          autoAlpha: 1,
          // y: "-50%",
          top: "50%",
          duration: TEXT_DURATION,
          ease: "sine.out",
        }
      );
    } else {
      // project leave
      gsap.killTweensOf(titleRef.current);
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: "100%" },
        {
          duration: TEXT_DURATION,
          opacity: 1,
          y: "0%",
          ease: "sine.out",
        }
      );
    }
    // console.log("prevTitle.current", prevTitle.current);
    if (prevTitle.current != -1) {
      gsap.killTweensOf(textRefs[prevTitle.current].current);

      gsap.to(textRefs[prevTitle.current].current, {
        duration: TEXT_DURATION,
        // y: "-200%",
        top: "-70%",
        autoAlpha: 0,
        ease: "sine.out",
      });
    }

    prevTitle.current = currentHover;
  }, [currentHover]);
  // const fakeUpdateList = async () => {
  //   setList([...list, ...projects?.data]);
  // };

  return (
    <main className="projects-page relative" ref={mainRef}>
      {/* <button className="btn fixed z-[800]" onClick={fakeUpdateList}>
        test
      </button> */}

      <Background />
      <Section className="first page__holder h-screen w-screen overflow-hidden">
        <Container className="h-full">
          <div className="flex flex-col h-full">
            <div className="text__holder mx-auto w-2/3 flex-auto flex items-center justify-center">
              <h3 className="text__left text-xl font-light italic">
                Selected works <br /> from 2019
              </h3>
              <div className="text__title relative flex-1 py-4 overflow-hidden">
                <h1
                  className="text-content--main font-bold text-8xl text-center text-primary-red uppercase font-serif"
                  ref={titleRef}
                >
                  Projects
                </h1>
                {list.length > 0 &&
                  list.map((each, index) => (
                    <h3
                      key={`t_${index}`}
                      className="absolute-center w-full text-content--sub break-words font-bold text-8xl text-center text-blue-bell uppercase font-serif"
                      ref={textRefs[index]}
                    >
                      {each.title}
                    </h3>
                  ))}
              </div>

              <h3 className="text__right text-xl font-light italic text-right">
                Scroll to <br /> discover
              </h3>
            </div>
            {list.length ? (
              <div className="projects w-full keen-slider" ref={sliderRef}>
                {list.map((each, index) => (
                  <div className="keen-slider__slide project__wrap" key={index}>
                    <ProjectItem
                      index={index}
                      data={each}
                      setCurrentHover={setCurrentHover}
                      currentHover={currentHover}
                    />
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
      <BotNav
        className="fixed bottom-0 left-0 right-0"
        onGoLeftClick={handleSlideToFirstClick}
      />

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
          flex: 0 1 18%;
        }
        .projects {
          overflow: visible;
        }

        .text-content--main {
          line-height: 150%;
        }
        .text-content--sub {
          line-height: 80%;
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
      `}</style>
      <style jsx global>{`
        .projects-page {
          .page__holder {
            padding-bottom: ${sideNavW}px;
          }
          .project__wrap {
            &:first-of-type {
              .item__figure {
                border-left-width: 1px;
              }
            }
          }
        }
      `}</style>
    </main>
  );
}

export default ProjectsPage;
