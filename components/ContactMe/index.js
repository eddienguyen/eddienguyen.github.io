import Section from "@/components/Section";
import Container from "@/components/Container";
import { IconArrowRight } from "@/styles/theme/icons";

function SectionContactMe(props) {
  return (
    <Section className="section__contact">
      <Container className="">
        <div className="contact__form text-center w-1/2 mx-auto">
          <h2
            className="contact__title font-serif font-bold text-5xl text-primary-black"
            data-scroll
            data-scroll-speed="0.4"
          >
            Email me
          </h2>
          <p
            className="contact__para my-8 text-sm font-light text-blue-rock"
            data-scroll
            data-scroll-speed="0.2"
          >
            By better understanding through words and expressions, we will
            improve faster and have more fun working together.
          </p>
          <form>
            <div
              className="form__holder w-full flex"
              data-scroll
              data-scroll-speed="0.1"
            >
              <div className="form-control flex-1">
                <input
                  type="text"
                  placeholder="Your message"
                  id="text"
                  className="form__input w-full py-1 px-3 bg-primary-white text-xs  font-bold text-primary-black"
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="form__submit btn-icon rounded-none bg-blue-periwinkle color-primary-black"
              >
                <IconArrowRight className="w-3" />
              </button>
            </div>
          </form>
        </div>
      </Container>
      <style jsx>{`
        .form-control {
          min-height: 32px;
        }
        .form__input {
          height: 50px;
          text-overflow: ellipsis;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.03) inset;

          &::placeholder {
            color: rgba(2, 7, 15, 0.9);
            font-size: 10px;
            letter-spacing: 0.6em;
            text-transform: uppercase;
          }
        }
        .form__submit {
          height: 50px;
          width: 50px;
          box-shadow: none;
        }
      `}</style>
      <style jsx global>{`
        .section__contact {
          padding-top: 64px;
          padding-bottom: 75px;
        }
      `}</style>
    </Section>
  );
}

export default SectionContactMe;
