import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";

interface HomePageProps {
  id: string;
}

function HomePage({ id }: HomePageProps) {
  return (
    <div
      id={`HomePage__container__${id}`}
      className="w-full h-full"
    >
      <Menu id={`HomePage__menu__${id}`} />
      <Header id={`HomePage__header__${id}`} />
    </div>
  );
}

export default HomePage;
