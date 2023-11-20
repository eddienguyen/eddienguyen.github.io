import Tabs from "components/Tabs";
import Container from "../Container";
import Section from "../Section";

function Features() {
  // tabs: Introduction, about, features
  // each tab content holds: img (parallax) with h4 as title && paragraph, all in row

  return (
    <>
      <Section className="section__feature">
        <Container className="h-screen">
          <div className="flex flex-col items-center justify-center">
            <span>Features</span>
            <h3 className="my-7 font-bold text-3xl">Who am I ?</h3>
          </div>

          <Tabs>
            <div label="Experiences">4 years in web development industry.</div>
            <div label="Education">
              {`
            I'm completing my Bachelor's degree at HaNoi University of Bussiness
            and Technology - Information Technology Engineering
            `}
            </div>
            <div label="Features">
              My main features are:
              <em> HTML</em>,<em> CSS</em>,<em> Javascript</em>,
              <em> ReactJS</em>,<em> NodeJS </em> and
              <em> Java</em>
            </div>
          </Tabs>
        </Container>
      </Section>
      <style jsx global>{`
        .section__feature {
          padding-top: 90px;
          padding-bottom: 90px;
        }
      `}</style>
    </>
  );
}

export default Features;
