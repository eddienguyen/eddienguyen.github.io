// import { css } from 'styled-components';

/** devices width definition */
/**
 * extra small : phones, less than 768px
 * small : tablets, 768px and up
 * medium : desktops, 992px and up
 * large : large desktops, 1170px and up
 */
const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  large: 1170,
};

// pass in multiple arguments when call this function, so that it will css with the value of args
// function phone (...args) {
//     return css`
//         @media(max-width: ${sizes.phone}px){
//             ${css(...args)};
//         }
//     `
// }

// function tablet (...args) {
//     return css`
//         @media(max-width: ${sizes.tablet}px){
//             ${css(...args)};
//         }
//     `
// }

// function desktop (...args) {
//     return css`
//         @media(max-width: ${sizes.desktop}px){
//             ${css(...args)};
//         }
//     `
// }

// function large (...args) {
//     return css`
//         @media(max-width: ${sizes.large}px){
//             ${css(...args)};
//         }
//     `
// }

// const media = {
//     phone,
//     tablet,
//     desktop,
//     large
// };

// Iterate over sizes.properties with 'Object.keys(sizes).reduce()'
// reduce: 1st argument: function callback with (currentValue=(finalValue), currentItemInTheArrayOrObject(in this case: size), indexOfCurrentItem, theArrayOrObject)
// reduce: 2nd argument: default or initial value of the currentValue
const media = Object.keys(sizes).reduce((finalMedia, size) => {
  // return an object
  return {
    ...finalMedia,
    [size]: function (...args) {
      return `@media (max-width: ${sizes[size]}px) {            }`;
      // return css`
      //     @media(max-width: ${sizes[size]}px) {
      //         ${css(...args)}
      //     }
      // `;
    },
  };
}, {});
export { sizes };
export default media;