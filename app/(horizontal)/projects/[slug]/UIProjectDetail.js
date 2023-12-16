"use client";

import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

import Section from "@/components/Section";
import Container from "@/components/Container";
import Background from "@/components/Background";
import BotNav from "@/components/NavBar/BotNav";
import { headerHeight, sideNavW } from "@/styles/theme/variables";
import { UIContext } from "@/components/contexts/UIProvider";

// TODO: external link
function UIProjectDetail({ data = {}, slug, ...props }) {
  const router = useRouter();

  const containerRef = useRef();
  const scroller = useRef(null);
  const waitGS = useRef(null); // wait for dom changed ?

  const { handlePageLoaded } = useContext(UIContext);

  // const [_list, setList] = useState([data?.]);
  const [horizontalLength, setHorizontalLength] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const awake = async () => {
    // load extra stuffs
    gsap.registerPlugin(ScrollTrigger);
    return true;
  };

  const init = async () => {
    await awake();
    // sendEvent(AppEvent.PAGE_LOADED);
    handlePageLoaded();
  };

  const initScroll = async () => {
    // remember the current scroll position:
    let scrollPosition = window.scrollY;

    // let pinWrap = containerRef.current;
    // let pinWrapWidth = pinWrap.offsetWidth;
    // let scrollContainer = document.querySelector("[data-scroller-container]");
    // let containerWidth = scrollContainer.offsetWidth;

    let scrollContainer =
      document && document.querySelector("[data-scroller-container]");

    scroller.current = gsap.to(containerRef.current, {
      x: -horizontalLength,
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        pin: true,
        scrub: 1.23,
        // anticipatePin: 1,
        invalidateOnRefresh: true,
        // start: "left left",
        end: () => "+=" + horizontalLength,
        onUpdate: (self) => {
          setScrollProgress(self.progress.toFixed(2));
        },
      },
    });

    // scroll to previous pos
    scroller.current.scrollTrigger.scroll(scrollPosition);
  };

  const handleScrollToBegin = () => {
    if (scroller.current && scroller.current.scrollTrigger) {
      scroller.current.scrollTrigger.scroll(0);
    }
    // if (containerRef.current) {
    //   gsap.to(containerRef.current, {
    //     x: 0,
    //     ease: "sine.out",
    //   });
    // }
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    router.back();
  };

  useEffect(() => {
    init();

    return () => {};
  }, []);

  useEffect(() => {
    // if (loadingState === AppEvent.DONE_INIT) {
    //   initScroll();
    // }
    clearTimeout(waitGS.current);
    waitGS.current = setTimeout(() => {
      setHorizontalLength(containerRef.current.offsetWidth - window.innerWidth);
    }, 16);

    return () => {
      clearTimeout(waitGS.current);
    };
  }, [JSON.stringify(data)]);

  useEffect(() => {
    if (horizontalLength !== 0) {
      /**
       * Update GSAP
       */
      // gsap.killTweensOf(containerRef.current);
      // destroy the current scroller control:
      if (scroller.current && scroller.current.scrollTrigger) {
        //   scroller.current.scrollTrigger.kill()
        scroller.current.scrollTrigger.kill();
      }
      initScroll();
    }
    return () => {
      if (scroller.current && scroller.current.scrollTrigger) {
        scroller.current.scrollTrigger.kill();
      }
      if (containerRef.current) {
        gsap.killTweensOf(containerRef.current);
      }
    };
  }, [horizontalLength]);

  const calculateImgPos = (index) => {
    switch (index) {
      case 0:
        return "full";
        break;
      case 3:
        return "top";
        break;
      case 5:
        return "bot";
        break;
      default:
        return "mid h-full";
        break;
    }
  };

  const _title = data?.title || "";
  const _thumb = data?.thumbnail || "";
  const _desc = data?.opening || "";
  const _media = data?.media || [];
  return (
    <>
      <Background pos="absolute" />
      <Section
        className="page__holder relative h-screen"
        data-scroller-container
      >
        <div
          className="relative h-full pad-half scroll-container"
          data-scroller
          ref={containerRef}
        >
          <div className="content absolute-cover w-screen h-full">
            <Container className="h-full">
              <div className="text__holder w-1/2 h-full flex flex-col items-start justify-between">
                <h1 className="section-title mt-0 mb-8 font-bold text-5xl text-center text-primary-red uppercase font-serif">
                  {_title}
                </h1>

                <div className="text__bottom ">
                  <table className="table table-info w-full">
                    <tbody>
                      <tr>
                        <td className="px-3">
                          <h4 className="text-base font-light italic ">
                            Year:
                          </h4>
                        </td>
                        <td className="px-3">
                          <h4 className="text-base font-semibold ">
                            {data?.year}
                          </h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3">
                          <h4 className="text-base font-light italic ">
                            Role:
                          </h4>
                        </td>
                        <td className="px-3">
                          <h4 className="text-base font-semibold ">
                            {data?.role}
                          </h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3">
                          <h4 className="text-base font-light italic ">
                            Team size:
                          </h4>
                        </td>
                        <td className="px-3">
                          <h4 className="text-base font-semibold ">
                            {data?.teamSize}
                          </h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <h3>Selected works from 2019</h3>
                  <h3>Scroll to discover</h3> */}
                </div>
              </div>
            </Container>
          </div>
          <div className="flex project-wrap h-full">
            <div className="project__thumbnail thumbnail--first content">
              <div
                className="img img-cover w-full h-full"
                style={{
                  backgroundImage: `url(${_thumb})`,
                }}
              />
            </div>
            <div className="project__desc content ">
              <div className="desc__container py-3 px-5">
                <p>{_desc}</p>
              </div>
            </div>
            {_media.length > 0 &&
              _media.map((mediaSrc, index) => (
                <div
                  className={`project__thumbnail thumbnail--img ${calculateImgPos(
                    index
                  )}`}
                  key={index}
                >
                  {/* <div
                    className="img img-cover w-full h-full"
                    style={{
                      backgroundImage: `url(${mediaSrc})`,
                    }}
                  /> */}
                  <img src={mediaSrc} className="img" alt={`thumb_${index}`} />
                </div>
              ))}

            {/* <div className="project__cta">
              <p>next project</p>
            </div> */}
          </div>
        </div>
      </Section>
      {/* <Section className="first page__holder absolute h-screen left-1/2 top-0">
        <div className="flex h-full"></div>
      </Section> */}
      <BotNav
        className=" fixed bottom-0 left-0 right-0"
        onGoLeftClick={handleScrollToBegin}
        onEscapeClick={handleGoBack}
        progress={scrollProgress}
      />
      <style jsx>{`
        .scroll-container {
          width: fit-content;
        }
        .project-wrap {
          width: 100%;
          min-width: 100vw;
          justify-content: space-between;
          flex-wrap: nowrap;

          > * {
            flex: none;
          }
        }
        .content {
          padding-top: ${headerHeight}px;
          padding-bottom: ${sideNavW}px;
        }
        .pad-half {
          padding-left: 50vw;
        }
        .half {
          width: 50vw;
        }
        .thumbnail--first {
          margin-right: 15vw;
          width: 50vw;
        }
        .thumbnail--img {
          margin-left: 175px;
          margin-right: 175px;
          width: 100vw;

          &.full {
            align-self: stretch;
            .img {
              height: 100%;
              object-fit: cover;
            }
          }
          &.top {
            align-self: flex-start;
            width: 45vw;
            max-height: 50vh;
          }
          &.bot {
            align-self: flex-end;
            width: 45vw;
            max-height: 50vh;
          }
          &.mid {
            align-self: center;
            padding-top: ${headerHeight}px;
            padding-bottom: ${sideNavW}px;
            .img {
              height: 100%;
              object-fit: cover;
            }
          }
        }
        .project__desc {
          width: 30vw;
        }
        .project__cta {
          width: 30vw;
        }
      `}</style>
    </>
  );
}

export default UIProjectDetail;
