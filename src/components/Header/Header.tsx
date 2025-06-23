import SocialLinks from "./SocialLinks/SocialLinks";
import Theming from "./Theming";

interface HeaderProps {
  id: string;
}

function Header({ id }: HeaderProps) {
  return (
    <div
      id={`Header__container__${id}`}
      className="w-fit h-fit z-20 top-5 right-5 lg:top-10 lg:right-12 fixed flex items-center gap-5"
    >
      <SocialLinks id={`Header__socialLinks__${id}`} />
      <Theming />
    </div>
  );
}

export default Header;
