import CyclingSkills from "@/components/Fragments/CyclingSkills";
import FadingSkills from "@/components/Fragments/FadingSkills";
import MyHeadline from "@/components/Fragments/MyHeadline";
import Header from "@/components/Header/Header";
import Section from "@/components/Section";
import Description from "@/components/Description";

interface HomePageProps {
  id: string;
}

function WrapperSections({ id }: HomePageProps) {
  return (
    <div
      id={`WrapperSections__container__${id}`}
      className="w-full h-screen relative flex flex-col"
    >
      <div
        id={`HomePage__container__${id}`}
        className="w-full h-screen flex"
      >
        <Header id={`WrapperSections__HomePage__header__${id}`} />
        <Section id={`WrapperSections__HomePage__section__${id}`}>
          <div
            id={`WrapperSections__components__container__${id}`}
            className="h-full flex flex-col justify-between"
          >
            <div
              id={`WrapperSections__myHeadline__cyclingSkills__container__${id}`}
              className="flex flex-col justify-center items-center md:items-start pt-10 md:pt-0"
            >
              <MyHeadline id={`WrapperSections__myHeadline__${id}`} />
              <CyclingSkills id={`WrapperSections__cyclingSkills__${id}`} />
            </div>
            <div
              id={`WrapperSections__fadingSkills__container__${id}`}
              className="w-full flex justify-center sm:justify-end"
            >
              <FadingSkills id={`WrapperSections__fadingSkills__${id}`} />
            </div>
          </div>
        </Section>
      </div>
      <Section id={`WrapperSections__description__section__${id}`} viewHeight>
        <Description id={`WrapperSections__description__${id}`} />
      </Section>
    </div>
  );
}

export default WrapperSections;
