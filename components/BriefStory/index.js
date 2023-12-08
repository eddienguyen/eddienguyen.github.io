import ReactPlayer from "react-player";

import StringExtra from "@/plugins/utils/StringExtra";
import AppLink from "../AppLink";
import APP_ROUTES from "@/modules/constants/app_routes";
import { VIDEO_TYPE } from "@/modules/constants/media";
import { solitude } from "@/styles/theme/variables";
import { useRef, useState } from "react";

/**
 * return brief story which layout based on number (odd, even)
 * @param {Object} props
 * @returns
 */
function BriefStory({
  number = 1,
  data = {},
  className: _class = "",
  ...props
}) {
  const playerVideoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const onVideoReady = (player) => {
    // console.log("player ready", player);
    // playerVideoRef?.current?.player?.player?.play()
  };

  const isEven = parseInt(Math.round(number)) % 2 === 0;

  const title = data?.title || "playground elem";
  const date = data?.date || "2017";
  const thumbnail = data?.thumbnail || "RTR-portrait.jpg";
  const description = data?.description || "Webapp";
  const video = data?.video || null;
  const videoType = data?.videoType || VIDEO_TYPE.LOCAL;

  const renderMedia = () =>
    video ? (
      // videoType == "FB"
      //     <div
      //       className="fb-video"
      //       data-href={video}
      //       // data-width="500"
      //       data-allowfullscreen="true"
      //     />
      <div
        className="reactVideoPlayer w-100 scale-ratio"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
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
        />
      </div>
    ) : (
      <div
        className="img img-cover w-100 scale-ratio"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      />
    );

  return (
    <div
      className={`brief-story brief--${
        isEven ? "even" : "odd"
      } ${_class} relative `}
    >
      <div className="w-full grid grid-cols-12">
        <div className="media col-span-7">
          <div
            className="media__holder relative ml-auto"
            data-scroll
            data-scroll-speed="0.1"
          >
            <div className="story__date absolute uppercase text-xs text-blue-rock">
              {date}
            </div>
            {renderMedia()}
          </div>
        </div>
        <div className="typo col-span-5">
          <div
            className="typo__title relative mb-3"
            data-scroll
            data-scroll-speed="0.2"
          >
            <h3 className="title__index text-9xl text-solitude tracking-widest font-extrabold">
              {StringExtra.makeSpecificDigitNumber(number, 2)}
            </h3>
            <h4 className="title__main absolute w-full left-0 text-4xl leading-snug text-primary-black font-bold font-serif">
              {title}
            </h4>
          </div>

          <p
            className="typo__para mt-9 mb-16 italic text-sm font-light text-blue-rock"
            data-scroll
            data-scroll-speed="0.25"
          >
            &ldquo;{description}&rdquo;
          </p>
          {/* <AppLink
            href={APP_ROUTES.STORIES.INDEX}
            className="link-spacing"
          >
            read more
          </AppLink> */}
        </div>
      </div>

      <style jsx>{`
        .brief--even {
          .typo {
            order: 3;
          }
          .media__holder {
            width: 70%;
          }
          .story__date {
            left: -20px;
            transform-origin: top left;
            transform: rotateZ(90deg);
          }
        }
        .brief--odd {
          .typo {
            order: 1;
          }
          .story__date {
            right: -20px;
            transform: rotatez(-90deg);
            transform-origin: top right;
          }
        }
        .media {
          order: 2;
        }
        .typo {
          padding-left: 4.8vw;
          padding-right: 4.8vw;
          padding-bottom: 12px;
        }
        .typo__title {
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 2rem;
            background-color: ${solitude};
          }
        }
        .title__main {
          bottom: 0;
          padding-bottom: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .story__date {
          top: 0;
          letter-spacing: 0.6em;
        }
        .media__holder {
        }
      `}</style>
      <style jsx global>{`
        .brief--odd {
          .media {
            .scale-ratio {
              &:before {
                padding-top: 58%;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}

export default BriefStory;
