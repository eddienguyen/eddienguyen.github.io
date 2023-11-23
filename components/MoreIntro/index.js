// import WhenInView from "components/WhenInView";
import { black, bluePeriwinkle } from "@/styles/theme/variables";
import AppLink from "../AppLink";
import Container from "../Container";
import Section from "../Section";
import personalInfo from "public/data/about.json";
import APP_ROUTES from "@/modules/constants/app_routes";

function MoreIntro() {
  const thisYear = new Date().getFullYear();

  return (
    <Section className="section__more-intro">
      <Container>
        <div className="content text-center font-serif" data-scroll data-scroll-speed="0.2">
          A {thisYear - personalInfo.birthyear} year old web developer based in
          Hanoi, Viet Nam. I enjoy building everything from web applications to
          rich interactive website. I have worked with small projects and for
          large company over the last year. My core skills are HTML/CSS, JS,
          React and Nodejs. If you are a bussiness seeking for a web presence or
          an employer looking to hire, you can get in touch with me{" "}
          <AppLink className="anchor" href={APP_ROUTES.ABOUT.INDEX}>
            here
          </AppLink>
          .
        </div>
        {/* <WhenInView>
          {({ isInView }) => (
            <div
              className={`reveal-para text-center font-serif ${
                isInView ? "in-view" : "out-view"
              }`}
            >
              something show up
            </div>
          )}
        </WhenInView> */}
      </Container>

      <style jsx>{`
        .reveal-para {
          position: relative;
          &:after {
            content: " ";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;

            transition: transform 1s;
            transform-origin: left;
            transform: rotateY(90deg);
          }
          &.out-view {
            &:after {
              transform: rotateY(0deg);
            }
          }
        }
        .content{
          margin-bottom : 1rem;
        }
      `}</style>

      <style jsx global>{`
        .section__more-intro {
          padding-top: 90px;
          padding-bottom: 90px;

          &:after {
            content: "";
            position: absolute;
            left: 50%;
            width: 1px;
            height: 100px;
            background-color: ${bluePeriwinkle};
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
}

export default MoreIntro;
