"use client";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

import { bluePeriwinkle } from "@/styles/theme/variables";
import { VIDEO_TYPE } from "@/modules/constants/media";

function ProjectCard({ data = {}, ...props }) {
  const playerVideoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const onVideoReady = (player) => {
    // console.log("[ProjectCard] player ready", player);
    // playerVideoRef?.current?.player?.player?.play()
  };

  const handleMouseEnter = (event) => {
    if (playerVideoRef.current) {
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = (event) => {
    if (playerVideoRef.current) {
      setIsPlaying(false);
    }
  };

  const title = data?.title || "Folio";
  const year = data?.year || "2017";
  const category = data?.category || "Webapp";
  const thumbnail = data?.thumbnail || "Ava-portrait.jpg";
  const video = data?.video || null;
  const videoType = data?.videoType || VIDEO_TYPE.LOCAL;

  const renderMedia = () =>
    video ? (
      // videoType == "FB"
      <>
        <div className="reactVideoPlayer w-100 scale-ratio">
          <ReactPlayer
            ref={playerVideoRef}
            allowFullScreen={true}
            onReady={onVideoReady}
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            muted={true}
            playsinline={isPlaying}
            playing={isPlaying}
            loop
            className="react-player content"
            url={video}
            controls={true}
            width="100%"
            height="100%"
            pip={true}
            // light={<img src={thumbnail} alt={title} />}
          />
        </div>
        {/* <div
          className="fb-video"
          data-href={video}
          // data-width="500"
          data-allowfullscreen="true"
        /> */}
      </>
    ) : (
      <div
        className="img img-cover scale-ratio"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      />
    );

  return (
    <div
      className="pj-card cursor-pointer relative flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="media relative">
        <div className="media__bg scale-ratio" />
        <div className="media__main absolute">{renderMedia()}</div>
      </div>

      <div className="info absolute">
        <h5 className="info__date text-xs tracking-widest text-indigo-500 font-light italic">
          {year}
        </h5>
        <h3 className="info__title text-2xl text-primary-black font-normal font-serif">
          {title}
        </h3>
        <div className="info__extra">
          <h4 className="type text-xl tracking-tight font-light text-primary-red">
            {category}
          </h4>
          {/* <span className="cta uppercase text-xs font-bold text-primary-black">
            view
          </span> */}
        </div>
      </div>

      <style jsx>{`
        .pj-card {
          margin-top: 20px; // prevent hidden overflowing in sliders
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
          * {
            transition: inherit;
          }
          &:hover {
            z-index: 1;
            &:after {
              width: 100%;
            }
            .media {
              opacity: 1;
            }
            .media__main {
              width: 92%;
              transform: translate(-50%, -70%);
              transition-duration: 0.55s;
            }
            .info {
              // left: 50%;
            }
            .info__date {
              // transition-delay: 0.05s;
            }
          }

          &:after {
            // content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 0;
            background-color: ${bluePeriwinkle};
            transition: inherit;
            transition-duration: 0.75s;
            z-index: -1;
          }
        }
        .media {
          flex: 0 0 62%;
          opacity: 0.4;
        }
        .media__bg {
          background-color: ${bluePeriwinkle};
        }
        .media__main {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 92%;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0px 5px 10px 0px rgba(11, 12, 17, 0.2);
        }

        .info {
          top: 20%;
          // left: 0%;
          left: 50%;
          width: 55%;
          padding-left: 1rem;

          .info__date {
            // transform: translateX(-23%);
            // transition-delay: 0s;
          }
          .info__title {
            // transform: translateX(-23%);
          }
        }

        .info__extra {
          margin-left: 30%;
          margin-top: 12px;
        }
        .type {
          line-height: 0;
        }
        .cta {
          letter-spacing: 0.6em;
        }
      `}</style>
      <style jsx global>{`
        .pj-card {
          .media__main {
            .scale-ratio {
              &:before {
                padding-top: 85%;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectCard;
