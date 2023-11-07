import AppLink from "components/AppLink";
import { color } from "styles/theme/variables";

function NavItem(props) {
  const _zIndex = props.opacity === 1 ? 100 : -1;
  const _opacity = props.opacity ? Math.max(props.opacity, 0.2) : 1;
  return (
    <AppLink className="nav-item anchor" href={props.href}>
      {props.children}
      <style jsx global>{`
        .nav-item {
          position: relative;
          text-decoration: none;
          margin: 0 15px;
          font-size: 0.8em;
          cursor: pointer;
          color: ${color.white};

          &:after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0;
            background-color: ${color.white};
            transition: height 0.1s;
          }
          &:hover {
            color: ${color.lightBlue};

            &:after {
              height: 90%;
              z-index: -3;
            }
          }
        }
      `}</style>
    </AppLink>
  );
}

export default NavItem;
