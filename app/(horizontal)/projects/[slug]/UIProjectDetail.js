"use client";

import { useEffect } from "react";

import Section from "@/components/Section";
import Container from "@/components/Container";
import { sendEvent } from "@/plugins/utils/events";
import AppEvent from "@/modules/constants/event_names";
import Background from "@/components/Background";
import BotNav from "@/components/NavBar/BotNav";
import { sideNavW } from "@/styles/theme/variables";

function UIProjectDetail({ data = {}, slug, ...props }) {
  const init = async () => {
    await awake();

    sendEvent(AppEvent.PAGE_LOADED);
  };

  const awake = async () => {
    // load extra stuffs
    return true;
  };

  useEffect(() => {
    init();

    return () => {};
  }, []);

  const _title = data?.title || "";
  const _thumb = data?.thumbnail || "";
  const _desc = data?.opening || "";
  const _media = data?.media || [];
  return (
    <>
      <Background />
      <Section className="first page__holder relative h-screen">
        <div className="relative h-full pad-half">
          <div className="absolute-cover w-screen h-full">
            <Container className="h-full">
              <div className="text__holder w-1/2 h-full flex flex-col items-start justify-between">
                <h1 className="section-title mt-0 mb-8 font-bold text-5xl text-center text-primary-red uppercase font-serif">
                  {_title}
                </h1>

                <div className="text__bottom">
                  <h3>Selected works from 2019</h3>
                  <h3>Scroll to discover</h3>
                </div>
              </div>
            </Container>
          </div>
          <div className="flex project-wrap h-full">
            <div className="project__thumbnail thumbnail--first">
              <div
                className="img img-cover w-full h-full"
                style={{
                  backgroundImage: `url(${_thumb})`,
                }}
              />
            </div>
            <div className="project__desc py-3 px-5">
              <p>{_desc}</p>
            </div>
            {_media.length > 0 &&
              _media.map((mediaSrc, index) => (
                <div className="project__thumbnail thumbnail--img" key={index}>
                  {/* <div
                    className="img img-cover w-full h-full"
                    style={{
                      backgroundImage: `url(${mediaSrc})`,
                    }}
                  /> */}
                  <img src={mediaSrc} alt={`thumb_${index}`} />
                </div>
              ))}
          </div>
        </div>
      </Section>
      {/* <Section className="first page__holder absolute h-screen left-1/2 top-0">
        <div className="flex h-full"></div>
      </Section> */}
      <BotNav className=" fixed bottom-0 left-0 right-0" />
      <style jsx>{`
        .project-wrap {
          width: 100%;
          min-width: 100vw;
          justify-content: space-between;

          > * {
            flex: none;
          }
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
        }
        .project__desc {
          width: 30vw;
        }
      `}</style>
      <style jsx global>{`
        .page__holder {
          padding-bottom: ${sideNavW}px;
        }
        .pad-half {
          padding-left: 50vw;
        }
      `}</style>
    </>
  );
}

export default UIProjectDetail;
