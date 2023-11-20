import { headerIndex } from "@/styles/theme/variables";
import { color } from "styles/theme/variables";

/**
 * SCROLLING NAV with dynamic opacity and border-bottom
 * default(when at top) => not showing(opacity = 0);
 * if opacity existed(start scrolling away from top) => start showing this NavBar
 * if opacity is fully 1 (away from top) => show border-bottom
 */
function ScrollingNav(props) {
  const _zIndex = props.opacity === 1 ? headerIndex : -1;
  const _opacity = props.opacity === 1 ? Math.max(props.opacity, 0.2) : 0;
  // const _bbw = props.opacity === 1 ? props.borderBottomWidth : 0;
  const _y = props.opacity === 1 ? 0 : -100;
  return (
    <div className="scrolling-nav fixed top-0 h-screen flex items-center bg-primary-white dark:bg-primary-black transition-all duration-500">
      {props.children}
      <style jsx>{`
        .scrolling-nav {
          padding-bottom: 30px;
          z-index: ${headerIndex};
          opacity: ${_opacity};
          width: 100%;
          border-bottom: solid ${color.blueDeepSky};
          border-bottom-width: 5px;
          transform: translateY(${_y}%);
        }
      `}</style>
      {/* border-bottom-width: ${_bbw}; */}
      {/* z-index: ${_zIndex}; */}
    </div>
  );
}

export default ScrollingNav;
