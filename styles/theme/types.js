// import styled from 'styled-components';

import { blue, blueDeepSky, bluePeriwinkle } from "./variables";

// export const Anchor = styled.a`
//     color: ${blueDeepSky};
//     text-decoration: none;
//     position: relative;

//     &:after{
//         content: ' ';
//         position: absolute;
//         left: 0;
//         bottom: 0;
//         height: 0%;
//         width: 100%;
//         background-color: ${blueDeepSky};
//         z-index: -3;
//         transition: height .1s, background-color .1s;
//     }

//     &:hover:after {
//         height: 90%;
//         background-color: ${blue};
//         z-index: -1;
//     }
// `;

const TypeStyles = () => (
  <style jsx global>{`
    .anchor {
      position: relative;
      color: ${blueDeepSky};
      text-decoration: none;
      cursor: pointer;

      &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0%;
        width: 100%;
        background-color: ${blueDeepSky};
        transition: height 0.1s, background-color 0.1s;
        z-index: -3;
      }

      &:hover {
        &:after {
          height: 90%;
          background-color: ${blue};
          z-index: -1;
        }
      }
    }
    .link-spacing {
      letter-spacing: 0.6em;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      padding-bottom: 0.8em;

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${bluePeriwinkle};
        transition: inherit;
      }

      &:hover {
        letter-spacing: 0.8em;
        &:after {
          background-color: ${blueDeepSky};
        }
      }
    }
  `}</style>
);

export default TypeStyles;
