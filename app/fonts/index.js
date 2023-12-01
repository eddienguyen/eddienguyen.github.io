// import {
//   Montserrat,
//   Playfair_Display
// } from "next/font/google";
import localFont from "next/font/local";

// Font files can be colocated inside the "/app"
// const montserrat = Montserrat({
//   display: "swap",
//   variable: "--font-montserrat",
//   subsets: ["latin", "vietnamese"],
//   adjustFontFallback: false,
// });

// const playfair = Playfair_Display({
//   display: "swap",
//   variable: "--font-playfair",
//   subsets: ["latin", "vietnamese"],
// });

const localPlayfair = localFont({
  src: [
    {
      path: "./PlayfairDisplay/PlayfairDisplay-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-ExtraBold.woff",
      weight: "800",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-ExtraBold.eot'",
    // },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-ExtraBold.ttf",
      weight: "800",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-ExtraBold.svg'",
    // weight: "800",
    // },
    // 700:
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Bold.woff2",
      weight: "700",
    },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Bold.woff",
      weight: "700",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-Bold.eot'",
    // weight: "700",
    // },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Bold.ttf",
      weight: "700",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-Bold.svg'",
    // weight: "700",
    // },
    // 400:
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Regular.woff2",
      weight: "400",
    },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Regular.woff",
      weight: "400",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-Regular.eot'",
    // weight: "400",
    // },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Regular.ttf",
      weight: "400",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-Regular.svg'",
    // weight: "400",
    // },
    // 400 italic
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Italic.woff",
      weight: "400",
      style: "italic",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-Italic.eot'",
    // weight: "400",
    // style: "italic"
    // },
    {
      path: "./PlayfairDisplay/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    // {
    //   path: "'./PlayfairDisplay/PlayfairDisplay-Italic.svg'",
    // weight: "400",
    // style: "italic"
    // },
  ],
  display: "swap",
  variable: "--font-playfair-local",
  adjustFontFallback: false,
  subsets: ["latin", "vietnamese"],
  declarations: [{ prop: "ascent-override", value: "90%" }],
});

const localMontserrat = localFont({
  src: [
    {
      path: "./Montserrat/Montserrat-Black.woff2",
      weight: "900",
    },
    {
      path: "./Montserrat/Montserrat-Black.woff",
      weight: "900",
    },
    {
      path: "./Montserrat/Montserrat-Black.ttf",
      weight: "900",
    },

    {
      path: "./Montserrat/Montserrat-Bold.woff2",
      weight: "700",
    },
    {
      path: "./Montserrat/Montserrat-Bold.woff",
      weight: "700",
    },
    {
      path: "./Montserrat/Montserrat-Bold.ttf",
      weight: "700",
    },

    {
      path: "./Montserrat/Montserrat-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Montserrat/Montserrat-Regular.woff",
      weight: "400",
    },
    {
      path: "./Montserrat/Montserrat-Regular.ttf",
      weight: "400",
    },
  ],
  display: "swap",
  variable: "--font-montserrat",
  adjustFontFallback: false,
  subsets: ["latin", "vietnamese"],
  declarations: [{ prop: "ascent-override", value: "90%" }],
});

export {
  // montserrat,
  //  playfair,
  localPlayfair,
  localMontserrat,
};
