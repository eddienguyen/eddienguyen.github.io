import AppLink from "components/AppLink";
import { color } from "styles/theme/variables";

function NavItem(props) {
  const { className: _className = "", ..._props } = props;

  return (
    <AppLink
      className={`nav-item text-primary-black dark:text-primary-white font-bold text-xs ${_className}`}
      {..._props}
    >
      {props.children}
      <style jsx global>{`
        .nav-item {
          position: relative;
          text-decoration: none;
          margin: 0 15px;
          cursor: pointer;
          transition: all 0.1s;
          letter-spacing: 0.6em;
          opacity: 0.9;

          &:first-child {
            margin-left: 0;
          }

          &:hover {
            color: ${color.blueDeepSky};
            opacity: 1;
          }
        }
      `}</style>
    </AppLink>
  );
}

export default NavItem;
