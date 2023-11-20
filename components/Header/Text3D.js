import { red } from "@/styles/theme/variables";

function Text3D({ primary = "primary", secondary = "secondary", ...props }) {
  const _class = props.className || "";

  return (
    <div className={`text3D relative ${_class}`}>
      <p className="primary">{primary}</p>
      <p className="secondary absolute top-0">{secondary}</p>

      <style jsx>{`
        .text3D {
          transform-style: preserve-3d;
          transition: transform 0.4s;
          white-space: nowrap;
          &:hover {
            transform: rotateX(90deg);

            .primary {
              transform: translateY(-100%);
              opacity: 0;
            }
            .secondary {
              opacity: 1;
            }
          }
        }
        .primary {
          // testing with color-dodge
          // color: #696969;
        }
        .primary,
        .secondary {
          transition: all 0.4s;
        }
        .secondary {
          color: ${red};
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Text3D;
