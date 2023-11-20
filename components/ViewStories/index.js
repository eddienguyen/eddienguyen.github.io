import Section from "@/components/Section";
import BriefStory from "@/components/BriefStory";
import Container from "@/components/Container";
import stories from "public/data/stories.json";
import { useEffect, useState } from "react";
import { bluePeriwinkle } from "@/styles/theme/variables";

/**
 * render story cards
 * @param {Object} props
 * @returns
 */
function SectionViewStories(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const data = [...stories?.data];
    setList(data.slice(0, Math.min(2, data.length)));
  }, []);
  return (
    <Section className="section__story">
      <Container>
        {list.length > 0 ? (
          list.map((each, index) => (
            <BriefStory
              number={index + 1}
              key={index}
              className="w-full story-item"
              data={each}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Container>
      <style jsx global>{`
        .section__story {
          padding-bottom: 100px;
          .story-item {
            margin-bottom: 8rem;
          }
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

export default SectionViewStories;
