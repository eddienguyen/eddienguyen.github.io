import { useKeenSlider } from "keen-slider/react";
import dynamic from "next/dynamic";

import { IconArrowLeft, IconArrowRight } from "@/styles/theme/icons";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { black } from "@/styles/theme/variables";
import AppLink from "../AppLink";
import projects from "public/data/projects.json";
import { useState } from "react";

const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  ssr: false,
});

/**
 * Prefer video over thumbnail
 * when hover, autoplay video
 */
function SectionViewProjects(props) {
  const [list, setList] = useState(projects?.data);

  const [sliderRef, slider] = useKeenSlider(
    {
      slides: {
        perView: 3,
      },
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // plugins
    ]
  );

  const handlePrevSlide = (e) => {
    e.preventDefault();

    if (slider.current) slider.current.prev();
  };
  const handleNextSlide = (e) => {
    e.preventDefault();
    if (slider.current) slider.current.next();
  };

  return (
    <Section className="section__projects">
      <div id="fb-root"></div>
      {/* <script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>
  <h1>My Video Player</h1>
  <div class="fb-video"
    data-href="https://www.facebook.com/eddie.aquarious.96/videos/1461503510571314"
    data-width="500"
    data-allowfullscreen="true"></div> */}

      <Container>
        <div
          className="title mb-20 text-center"
          data-scroll
          data-scroll-speed="0.1"
        >
          <h4 className="sub uppercase text-sm text-blue-rock">view</h4>
          <h2 className="main font-serif font-bold text-5xl text-primary-black">
            Projects
          </h2>
        </div>
        {list.length ? (
          <div className="projects__showcase relative">
            <button
              className="prev showcase__nav absolute"
              onMouseUp={handlePrevSlide}
            >
              <IconArrowLeft />
            </button>
            <div className="projects__list keen-slider w-full" ref={sliderRef}>
              {list.map((each, index) => (
                <div className="keen-slider__slide" key={index}>
                  <ProjectCard data={each} />
                </div>
              ))}
            </div>
            <button
              className="next showcase__nav absolute"
              onMouseUp={handleNextSlide}
            >
              <IconArrowRight />
            </button>
          </div>
        ) : (
          <>Currently there are no project(s) available</>
        )}

        <div className="mt-20 text-center" data-scroll data-scroll-speed="0.25">
          <AppLink href="/projects" className="link-spacing">
            show all
          </AppLink>
        </div>
      </Container>

      <style jsx>{`
        .title {
          .sub {
            letter-spacing: 0.5em;
          }
        }
        .projects__showcase {
          .showcase__nav {
            width: 0.7rem;
            color: ${black};
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.1s ease-in;
            opacity: 0.6;
            &:hover {
              opacity: 1;
            }

            .anticon,
            svg {
              width: 100%;
            }
          }
          .prev {
            left: -2rem;
          }
          .next {
            right: -2rem;
          }
        }
      `}</style>
      <style jsx global>{`
        .section__projects {
          min-height: 100vh;
          padding-top: 70px;
          padding-bottom: 80px;

          .keen-slider {
            .keen-slider__slide {
              overflow: visible;
              z-index: 0;
              &:hover {
                z-index: 1;
              }
            }
          }
        }
      `}</style>
    </Section>
  );
}

export default SectionViewProjects;
