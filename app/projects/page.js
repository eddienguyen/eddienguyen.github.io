"use client";

import ReactPlayer from "react-player";
import { useRef, useState } from "react";

import AppLink from "@/components/AppLink";
import Container from "@/components/Container";
import Section from "@/components/Section";
import asset from "@/plugins/assets";
// import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function ProjectsPage(props) {
  const playerVideoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="projects-page">
      {/* <ParallaxProvider> */}
      <Section className="first">
        <Container>
          <h1 className="mt-0 mb-8 font-bold text-5xl text-center text-primary-red uppercase font-serif section-title ">
            Projects
          </h1>
        </Container>
      </Section>
      <Section className="mb-24">
        <div className="flex flex-col justify-center items-center">
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
            {/* <ImageParallax
                            src={require('public/ProfilePage.png')}
                            reduceHeight={1 / 3}
                        /> */}
            <img
              src={asset("ProfilePage_thumbnail.png")}
              alt="project_figure_1"
            />
          </div>
        </div>
      </Section>

      <Section className="mb-24">
        <Container>
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
            {/* <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Feddie.aquarious.96%2Fvideos%2F1461503510571314&width=560&show_text=false&height=400&appId"
            title="SiS-video"
            width="560"
            height="400"
            style={{ border: "none", overflow: "hidden" }}
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
            allowFullScreen="true"
          ></iframe> */}
          </div>
        </Container>
      </Section>

      <Section className="mb-24">
        <div className="flex flex-col justify-center items-center ">
          <h3 className="project-title">Demo with react-scroll-parallax</h3>
          <div className="overflow-hidden parallax-container">
            <img src={asset("img/MainPage.png")} alt="project_figure_3" />

            {/* <Parallax
                //  reduceHeight={1 / 3}
                speed={30}
              ></Parallax> */}
          </div>
        </div>
      </Section>
      {/* </ParallaxProvider> */}
      <style jsx>{`
        .projects-page {
        }
        .section-title {
        }
        .project-title {
          margin: 1.75rem 0;
        }
        .parallax-container {
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
    </main>
  );
}

export default ProjectsPage;
