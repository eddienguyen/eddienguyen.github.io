// import styled from 'styled-components';

import { blue, lightBlue } from "./variables";

// export const Anchor = styled.a`
//     color: ${lightBlue};
//     text-decoration: none;
//     position: relative;

//     &:after{
//         content: ' ';
//         position: absolute;
//         left: 0;
//         bottom: 0;
//         height: 0%;
//         width: 100%;
//         background-color: ${lightBlue};
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
      color: ${lightBlue};
      text-decoration: none;
      cursor: pointer;

      &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0%;
        width: 100%;
        background-color: ${lightBlue};
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
  `}</style>
);

export default TypeStyles;
