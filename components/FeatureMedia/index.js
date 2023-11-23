import Section from "@/components/Section";
import Container from "@/components/Container";
import AppLink from "@/components/AppLink";
import { IconPlay } from "@/styles/theme/icons";
import APP_ROUTES from "@/modules/constants/app_routes";
import asset from "@/plugins/assets";

/**
 * Lead to about page
 * @param {Objects} props
 * @returns
 */
function FeatureMedia(props) {
  const renderImage = (imgSrc) => (
    <div
      className="img w-100 img-cover scale-ratio"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    />
  );

  const renderVideo = (src, thumbnail = "") => (
    // TODO: update this fn
    <>
      <div
        className="img w-100 scale-ratio img-cover"
        style={{
          backgroundImage: `url(${"img/examples/ft-2.jpg"})`,
        }}
      />
      <div className="absolute-center">
        <button className="btn-icon xl bg-primary-white hover:bg-solitude">
          <IconPlay className="w-3" />
        </button>
      </div>
    </>
  );

  return (
    <Section className="section__media">
      <Container>
        <div className="relative w-full">
          <div
            className="media__left w-1/2"
            data-scroll
            data-scroll-speed="0.3"
          >
            {renderImage(asset("/img/examples/ft-1.jpg"))}
          </div>
          <div
            className="media__text relative w-full grid grid-cols-12"
            data-scroll
            data-scroll-speed="0.1"
          >
            {/*     <div className="col-span 1" /> */}
            <div className="text__holder col-span-4">
              <p className="text-blue-rock text-sm font-light leading-6">
                Experiences, Education, Skills,...
              </p>
              <AppLink href={APP_ROUTES.ABOUT.INDEX} className="link-spacing">
                About me ?
              </AppLink>
            </div>
          </div>
          <div
            className="media__right absolute left-0 top-0 w-full grid grid-cols-12"
            data-scroll
            data-scroll-speed="0.8"
          >
            <div className="img__holder relative inline-block">
              {renderImage(asset("/img/examples/DSC03209.jpeg"))}

              {/* <div
                className="img w-100 scale-ratio img-cover"
                style={{
                  backgroundImage: `url(${"img/examples/ft-2.jpg"})`,
                }}
              />
              <div className="absolute-center">
                <button className="btn-icon xl bg-primary-white hover:bg-solitude">
                  <IconPlay className="w-3" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .media__text {
          margin-top: 55px;
          z-index: 2;
        }
        .text__holder {
          grid-column-start: 2;
          padding-right: 2rem;
        }
      `}</style>
      <style jsx global>{`
        .section__media {
          min-height: 100vh;
          padding-top: 80px;
          padding-bottom: 80px;

          .media__left {
            .img {
              &:before {
                padding-top: 61%;
              }
            }
          }
          .media__right {
            margin-top: 45px;
            .img {
              &:before {
                padding-top: 78%;
              }
            }
            .img__holder {
              box-shadow: -2px -2px 35px 0px rgba(2, 7, 15, 0.19);
              grid-column-start: -1;
              grid-column-end: 6;
            }
          }
        }
      `}</style>
    </Section>
  );
}

export default FeatureMedia;
