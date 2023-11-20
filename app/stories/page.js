"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";

function StoriesPage(props) {
  return (
    <main className="stories-page">
      <Section className="first">
        <Container>
          <h1 className="mt-0 mb-8 font-bold text-5xl text-center text-primary-red uppercase section-title ">
            Stories
          </h1>
          <h3>
            Unleash a world of creativity! Dive into my captivating videos and
            mesmerizing photos, each frame a story waiting for an immersive
            experience!
          </h3>
        </Container>
      </Section>
    </main>
  );
}

export default StoriesPage;
