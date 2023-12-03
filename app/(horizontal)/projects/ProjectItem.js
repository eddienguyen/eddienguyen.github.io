import StringExtra from "@/plugins/utils/StringExtra";
import asset from "@/plugins/assets";
import AppLink from "@/components/AppLink";
import APP_ROUTES from "@/modules/constants/app_routes";

function ProjectItem({
  data = {},
  index = 0,
  className = "",
  setCurrentHover = null,
  ...props
}) {
  const handleMouseEnter = (event) => {
    console.log("hovering", data.title);

    if (setCurrentHover) {
      setCurrentHover(index);
    }
  };

  const handleMouseLeave = (event) => {
    if (setCurrentHover) {
      setCurrentHover(-1);
    }
  };

  const _slug = data.slug || null;

  return (
    <div
      className={`project-item  ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="item__index text-right  text-3xl text-solitude font-black">
        {StringExtra.makeSpecificDigitNumber(index + 1, 2)}
      </h3>
      <div className="item__figure bg-primary-white">
        <div
          className="img img-cover w-100 scale-ratio"
          style={{
            backgroundImage: `url(${asset("/img/examples/w-1.jpg")})`,
          }}
        />
      </div>
      {_slug && (
        <AppLink
          href={APP_ROUTES.PROJECT_DETAIL.INDEX + _slug}
          className="absolute-cover"
        />
      )}

      <style jsx>{`
        .project-item {
        }
        .item__index {
          padding-right: 10px;
        }
        .item__figure {
          padding: 10px;
          border-style: solid;
          border-width: 1px 1px 1px 0;
          border-color: rgba(88, 88, 88, 0.1);
        }
        .scale-ratio {
          &:before {
            padding-top: 68%;
          }
        }
      `}</style>
    </div>
  );
}

export default ProjectItem;
