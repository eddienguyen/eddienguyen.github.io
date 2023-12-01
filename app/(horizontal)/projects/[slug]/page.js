"use client";

import { useRef, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

// export async function generateMetadata({ params, searchParams }) {
//   // read route params
//   const slug = params.slug;
import projects from "public/data/projects.json";
import Section from "@/components/Section";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

//   console.log("[generateMetadata] slug:", slug);

//   return {
//     title: slug,
//     openGraph: {
//       // images: ["/some-specific-page-image.jpg", ...previousImages],
//     },
//   };
// }

export default function ProjectDetail({ params: { slug = "" }, ...props }) {
  const [list, setList] = useState(projects?.data);
  const [sliderRef, slider] = useKeenSlider(
    {
      slides: {
        perView: 3,
      },
      // slideChanged() {},
    },
    [
      // plugins
    ]
  );
  return (
    <main>
      <Section className="first page__holder h-screen w-screen">
        <Container className="h-full">
          <div className="text__holder flex-1 flex items-center justify-center">
            <h3>Selected works from 2019</h3>

            <h1 className="section-title mt-0 mb-8 font-bold text-5xl text-center text-primary-red uppercase font-serif">
              ProjectDetail - {slug}
            </h1>
            <h3>Scroll to discover</h3>
          </div>
        </Container>
      </Section>
      <div className="bot-nav fixed bottom-0 left-0 right-0">
        <Container></Container>
      </div>
    </main>
  );
}
