import { color } from "styles/theme/variables";

/**
 * SCROLLING NAV with dynamic opacity and border-bottom
 * default(when at top) => not showing(opacity = 0);
 * if opacity existed(start scrolling away from top) => start showing this NavBar
 * if opacity is fully 1 (away from top) => show border-bottom
 */
function ScrollingNav(props) {
  const _zIndex = props.opacity === 1 ? 100 : -1;
  const _opacity = props.opacity === 1 ? Math.max(props.opacity, 0.2) : 0;
  const _bbw = props.opacity === 1 ? props.borderBottomWidth : 0;

  return (
    <div className="scrolling-nav">
      {props.children}
      <style jsx>{`
        .scrolling-nav {
          position: fixed;
          display: flex;
          position: fixed;
          justify-content: flex-end;
          align-items: center;
          padding-bottom: 30px;
          z-index: ${_zIndex};
          opacity: ${_opacity};
          width: 100%;
          border-bottom: solid ${color.lightBlue};
          background-color: ${color.black};
          border-bottom-width: ${_bbw};
        }
      `}</style>
    </div>
  );
}

export default ScrollingNav;
