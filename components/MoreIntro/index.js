import WhenInView from "components/WhenInView";
import { black } from "@/styles/theme/variables";
import AppLink from "../AppLink";
import Container from "../Container";
import Section from "../Section";
import personalInfo from "public/data/about.json";

function MoreIntro() {
  const thisYear = new Date().getFullYear();

  return (
    <Section>
      <div className="background" />
      <Container>
        <WhenInView>
          {({ isInView }) => (
            <div
              className={`reveal-para ${isInView ? "in-view" : "out-view"}`}
              //   hide={!isInView}
            >
              A {thisYear - personalInfo.birthyear} year old web developer based in Hanoi, Viet Nam. I enjoy
              building everything from web applications to rich interactive
              website. I have worked with small projects and for large company
              over the last year. My core skills are HTML/CSS, JS, React and
              Nodejs. If you are a bussiness seeking for a web presence or an
              employer looking to hire, you can get in touch with me{" "}
              <AppLink className="anchor" href="/about">
                here
              </AppLink>
              .
            </div>
          )}
        </WhenInView>
      </Container>

      <style jsx>{`
        .background {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${black};
          z-index: -1;
        }

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
      `}</style>
    </Section>
  );
}

export default MoreIntro;
