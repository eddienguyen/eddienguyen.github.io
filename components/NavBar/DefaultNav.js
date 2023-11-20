import { headerIndex, headerSpace } from "@/styles/theme/variables";

function DefaultNav(props) {
  return (
    <div className="default-nav">
      {props.children}
      <style jsx>{`
        .default-nav {
          position: absolute;
          width: 100%;
          padding-top: ${headerSpace}px;
          padding-bottom: ${headerSpace}px;
          z-index: ${headerIndex};
          mix-blend-mode: exclusion;
          filter: invert(100%);
        }
      `}</style>
    </div>
  );
}

export default DefaultNav;