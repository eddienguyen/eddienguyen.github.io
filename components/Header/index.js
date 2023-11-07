import React, { Component } from "react";
import Container from "../Container";
import asset from "@/plugins/assets";

// import { Container } from "theme/grid";
// import { Background, Intro, IntroBanner } from "./Header.style";

// import { color } from "theme/variables";
// import { lightBlue } from "theme/variables";

class Header extends Component {
  render() {
    return (
      <div
        // style={{ borderBottom: `2px solid ${color.lightBlue}` }}
        className="border-b-light-blue border-b-2 border-solid"
      >
        <div className="background bg-primary-black" />
        <Container>
          <div className="flex flex-col">
            <div className="h-screen w-100 lg:w-1/2 flex flex-nowrap overflow-hidden items-center text-2xl intro_banner">
              <h1 className="flex-auto text-6xl leading-tight font-bold underline">
                Hi,
                <br />
                {`I'm `}
                <span
                  className="text-light-blue"
                  // style={{ color: lightBlue }}
                >
                  Eddie
                </span>
                ,
                <br />
                Front-end developer.
              </h1>
              {/* <Image src={require('public/Ava-portrait.jpg')} alt='portrait' /> */}
            </div>
          </div>
        </Container>

        <style jsx>{`
          .background {
            position: fixed;
            background-image: url(${asset("/Ava-portrait.jpg")});
            background-repeat: no-repeat;
            background-size: 50%;
            background-position: right;
            // background-color: $black;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: -99;
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
      </div>
    );
  }
}

export default Header;
