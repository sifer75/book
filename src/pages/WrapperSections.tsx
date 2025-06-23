import CyclingSkills from "@/components/Fragments/CyclingSkills";
import FadingSkills from "@/components/Fragments/FadingSkills";
import MyHeadline from "@/components/Fragments/MyHeadline";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import Section from "@/components/Section";
import FontIcons from "@/components/FontIcons";

interface HomePageProps {
  id: string;
}

function WrapperSections({ id }: HomePageProps) {
  return (
    <div
      id={`WrapperSections__container__${id}`}
      className="w-full h-screen relative flex"
    >
      <Header id={`WrapperSections__header__${id}`} />
      <div
        id={`WrapperSections__menu__container__${id}`}
        className="h-full bg-blue-500"
      >
        <Menu id={`WrapperSections__menu__${id}`} />
      </div>
      <div className="z-0 inset-0 absolute lg:block">
        <FontIcons />
      </div>
      <Section id={`HomePage__section__${id}`}>
        <div
          id={`WrapperSections__components__container__${id}`}
          className="top-30 left-10 h-full bg-blue-500 flex flex-col justify-between"
        >
          <div
            id={`WrapperSections__myHeadline__cyclingSkills__container__${id}`}
          >
            <MyHeadline id={`WrapperSections__myHeadline__${id}`} />
            <CyclingSkills id={`WrapperSections__cyclingSkills__${id}`} />
          </div>
          <div
            id={`WrapperSections__fadingSkills__container__${id}`}
            className="w-full flex justify-end"
          >
            <FadingSkills id={`WrapperSections__fadingSkills__${id}`} />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default WrapperSections;
