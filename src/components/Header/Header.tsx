import SocialLinks from "./SocialLinks/SocialLinks";
import Theming from "./Theming";

interface HeaderProps {
  id: string;
}

function Header({ id }: HeaderProps) {
  return (
    <div
      id={`Header__container__${id}`}
      className="w-full flex items-center justify-end py-3 px-5 gap-5 bg-gray-100"
    >
      <SocialLinks id={`Header__socialLinks__${id}`} />
      <Theming />
    </div>
  );
}

export default Header;
