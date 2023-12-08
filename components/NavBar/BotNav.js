"use client";

import AppLink from "@/components/AppLink";
import Container from "@/components/Container";
import {
  IconFacebook,
  IconInsta,
  IconYoutube,
  IconArrowLeft,
  IconClose,
} from "@/styles/theme/icons";
import personalInfo from "public/data/about.json";
import { sideNavW } from "@/styles/theme/variables";

/**
 * @param {Object} props - BotNav's properties
 * @param {Number} [props.progress]=(0) - BotNav's scroll progress
 * @returns ReactComponent
 */
function BotNav({
  progress = 0,
  onGoLeftClick = null,
  onEscapeClick = null,
  ...props
}) {
  const handleArrLeftClick = (e) => {
    e.preventDefault();
    if (onGoLeftClick) onGoLeftClick(e);
  };

  const _class = props.className || "";
  return (
    <div className={`bot-nav ${_class}`}>
      <Container>
        <div className="nav__holder relative w-full flex justify-between items-center">
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
          {onEscapeClick && (
            <div className="nav__back absolute left-1/2 -translate-x-1/2">
              <button
                className="btn-icon lg btn--esc relative bg-primary-white hover:bg-solitude text-base overflow-hidden"
                onClick={onEscapeClick}
              >
                <IconClose className="h-4 relative z-10" />
              </button>
            </div>
          )}

          <div className="nav__btns">
            <button
              className="btn-icon relative bg-primary-white hover:bg-solitude text-base overflow-hidden"
              onClick={handleArrLeftClick}
            >
              <IconArrowLeft className="h-4 relative z-10" />
              <span
                className="progress absolute bg-blue-rock left-0 top-0 h-full z-0"
                style={{ width: `${progress * 100}%` }}
              />
            </button>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .nav__holder {
          height: ${sideNavW}px;
        }
        .progress {
          transition: width 0.2s ease-in 0.1s;
          will-change: width;
        }
        .btn--esc {
          transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          will-change: transform;
          &:hover {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export default BotNav;
