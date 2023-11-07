import { ParallaxBanner } from "react-scroll-parallax";

// import { ImageResponsive } from "./ViewCard.style";
// import 6 ViewCards
// with props: label & content
// grid style
function ViewCard({
  label = "PropTypes.string.isRequired",
  content = "PropTypes.string.isRequired",
}) {
  // const {label,
  // content,
  // icon
  // } = props;

  return (
    <div className="flex flex-col sm:flex-row h-full bg-white text-black floating">
      <div>
        <div className="image-responsive">
          <ParallaxBanner
            className="class-name"
            layers={[
              {
                image:
                  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg",
                // amount: 0.1,
                // slowerScrollRate: false,
                speed: 5,
              },
            ]}
            style={{ height: "300px" }}
          >
            <h1>Banner Children</h1>
          </ParallaxBanner>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <h3>h3</h3>
        <p>paragraph</p>
      </div>
      <style jsx global>{`
        .image-responsive {
          align-self: flex-start;
          img {
            width: 100%;
          }
          @media all and (min-width: 640px) {
            img {
              width: auto;
            }
          }
        }
      `}</style>
    </div>
  );
}

export default ViewCard;
