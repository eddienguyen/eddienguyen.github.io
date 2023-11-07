import { sizes } from "styles/theme/media";

function Container(props) {
  const { className: _className = "", ..._props } = props;
  return (
    <div className={`container mx-auto ${_className}`}>
      {props.children}
      <style jsx>{`
         {
          /* update using tailwind container */
        }
         {
          /* update using mobile up */
        }
        .container {
          // padding: 30px 120px 0 120px;
          padding: 15px 10px 0 10px;

          @media all and (min-width: ${sizes.tablet}px) {
            padding: 15px 30px 0 30px;
          }

          @media all and (min-width: ${sizes.desktop}px) {
            padding-top: 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default Container;
