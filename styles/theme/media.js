// import { css } from 'styled-components';

/** devices width definition */
/** inherited froom tailwind breakpoints */
/**
 * extra small : phones, less than 659px
 * small : tablets, 640px and up
 * medium : large tablet, 768px and up
 * large : desktops, 1024px and up
 * extralarge : extra large desktops, 1280px and up
 * extralarge2 : extra large desktops, 1536px and up
 */
const sizes = {
  xs: 0,
  sm: 640,
  md: 768,
  // md2: 820,
  lg: 1024,
  xl: 1280,
  xl2: 1536,
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
