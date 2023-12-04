"use client";
import StringExtra from "@/plugins/utils/StringExtra";
import asset from "@/plugins/assets";
import AppLink from "@/components/AppLink";
import APP_ROUTES from "@/modules/constants/app_routes";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MathExtra from "@/plugins/utils/MathExtra";
import { blueBell, solitude } from "@/styles/theme/variables";

const BACK_SCALE = 1.1;
const FRONT_SCALE = 1.05;

function ProjectItem({
  data = {},
  index = 0,
  className = "",
  setCurrentHover = null,
  currentHover = -1,
  ...props
}) {
  const mainRef = useRef(null);
  const backRef = useRef(null);
  const frontRef = useRef(null);

  const handleMouseLeave = (event) => {
    if (setCurrentHover) {
      setCurrentHover(-1);
    }
    // gsap.killTweensOf(backRef.current);
    // gsap.to(backRef.current, {
    //   x: 0,
    //   y: 0,
    // });
    // gsap.to(frontRef.current, {
    //   x: 0,
    //   y: 0,
    //   // scale: 1,
    //   autoAlpha: 1,
    // });
  };

  const handleMouseMove = (event) => {
    const { left, top, width, height } =
      mainRef.current.getBoundingClientRect();

    // extract to get relative mouse position to the ref
    // const x = event.clientX - left;
    // const y = event.clientY - top;

    // extract 1/2 offset to set mouse position to the center of the ref
    // const x = event.clientX - (left + width / 2);
    // const y = event.clientY - (top + height / 2);

    // extract to get relative mouse position to the ref(normalize to 1)
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    // const _x = x * (deltaX1 * 2) - deltaX1;
    // const _y = y * (deltaY1 * 2) - deltaY1;
    const deltaX1 = (BACK_SCALE * width - width) / 2;
    const deltaY1 = (BACK_SCALE * height - height) / 2;
    const deltaX2 = (FRONT_SCALE * width - width) / 2;
    const deltaY2 = (FRONT_SCALE * height - height) / 2;

    const x1 = MathExtra.lerp(-deltaX1, deltaX1, x);
    const y1 = MathExtra.lerp(-deltaY1, deltaY1, y);
    const x2 = MathExtra.lerp(-deltaX2, deltaX2, x);
    const y2 = MathExtra.lerp(-deltaY2, deltaY2, y);
    gsap.to(backRef.current, {
      x: x1,
      y: y1,
    });
    gsap.to(frontRef.current, {
      x: x2,
      y: y2,
      // scale: FRONT_SCALE,
      // autoAlpha: 0.5,
    });
    // send index to parent
    if (setCurrentHover) {
      setCurrentHover(index);
    }
  };

  const _slug = data.slug || null;
  const _thumbnail = data.thumbnail || null;
  const _isHovered = currentHover !== -1;
  const _activeClass =
    _isHovered && (currentHover === index ? "active" : "inactive");

  useEffect(() => {
    const node = mainRef.current;
    const backNode = backRef.current;
    const frontNode = frontRef.current;
    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(backNode);
      gsap.killTweensOf(frontNode);
    };
  }, []);

  return (
    <div
      className={`project-item ${_activeClass} ${className}`}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onMouseMove={handleMouseMove}
      ref={mainRef}
    >
      <h3 className="item__index text-right text-3xl text-solitude font-black">
        {StringExtra.makeSpecificDigitNumber(index + 1, 2)}
      </h3>
      <div className="item__figure bg-primary-white">
        <div className="figure__wrap relative scale-ratio overflow-hidden">
          <div
            className="figure__back absolute-cover img-cover"
            style={{
              backgroundImage: `url(${_thumbnail})`,
            }}
            ref={backRef}
          />
          <img
            src={_thumbnail}
            alt={`project_${_slug}`}
            className="figure__front w-full absolute left-1/2 top-1/2"
            ref={frontRef}
          />
        </div>
      </div>
      {_slug && (
        <AppLink
          href={APP_ROUTES.PROJECT_DETAIL.INDEX + _slug}
          className="absolute-cover"
        />
      )}

      <style jsx>{`
        .project-item {
          &.active {
            .figure__front {
              opacity: 0.6;
              filter: saturate(200%) hue-rotate(150deg);
              transition: opacity 0s, filter 0s;
            }
            .item__index {
              color: ${blueBell};
            }
          }
          &.inactive {
            .item__figure {
              filter: grayscale(1);
            }
          }
        }
        .item__index {
          padding-right: 10px;
          transition: all 0.25s ease-in;
        }
        .item__figure {
          padding: 10px;
          border-style: solid;
          border-width: 1px 1px 1px 0;
          border-color: rgba(88, 88, 88, 0.1);
          transition: all 0.4 ease-in;
          filter: grayscale(0);
        }
        .scale-ratio {
          &:before {
            padding-top: 68%;
          }
        }
        .figure__back {
          transform: scale(${BACK_SCALE});
          filter: saturate(6) blur(1px);
          opacity: 0.8;
        }
        .figure__front {
          transform: translate(-50%, -50%) scale(${FRONT_SCALE});
          opacity: 1;
          transition: opacity 0.7s ease-in, filter 0.4s ease-in;
        }
      `}</style>
    </div>
  );
}

export default ProjectItem;
