import CyclingSkills from "@/components/Fragments/CyclingSkills";
import FadingSkills from "@/components/Fragments/FadingSkills";
import MyHeadline from "@/components/Fragments/MyHeadline";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";

interface HomePageProps {
  id: string;
}

function HomePage({ id }: HomePageProps) {
  return (
    <div
      id={`HomePage__container__${id}`}
      className="w-full h-[2000px] relative bg-red-500"
    >
      <Menu id={`HomePage__menu__${id}`} />
      <Header id={`HomePage__header__${id}`} />
      <div
        id={`HomePage__myHeadline__container__${id}`}
        className="absolute top-30 left-10"
      >
        <MyHeadline id={`HomePage__myHeadline__${id}`} />
        <CyclingSkills id={`HomePage__cyclingSkills__${id}`} />
      </div>
      <div
        id={`HomePage__fadingSkills__container__${id}`}
        className="absolute top-180 right-10"
      >
        <FadingSkills id={`HomePage__fadingSkills__${id}`} />
      </div>
    </div>
  );
}

export default HomePage;
