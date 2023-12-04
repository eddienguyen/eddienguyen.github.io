"use client";

import AppLink from "@/components/AppLink";
import Container from "@/components/Container";
import {
  IconFacebook,
  IconInsta,
  IconYoutube,
  IconArrowLeft,
} from "@/styles/theme/icons";
import personalInfo from "public/data/about.json";
import { sideNavW } from "@/styles/theme/variables";

function BotNav({ onGoLeftClick = null, ...props }) {
  const handleArrLeftClick = (e) => {
    e.preventDefault();
    if (onGoLeftClick) onGoLeftClick(e);
  };

  const _class = props.className || "";
  return (
    <div className={`bot-nav ${_class}`}>
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
              onClick={handleArrLeftClick}
            >
              <IconArrowLeft className="h-4" />
            </button>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .nav__holder {
          height: ${sideNavW}px;
        }
      `}</style>
    </div>
  );
}

export default BotNav;
