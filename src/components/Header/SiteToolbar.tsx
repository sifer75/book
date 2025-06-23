import SocialLinks from "./SocialLinks/SocialLinks";
import Theming from "./Theming";

interface SiteToolbarProps {
  id: string;
}

function SiteToolbar({ id }: SiteToolbarProps) {
  return (
    <div
      id={`SiteToolbar__container__${id}`}
      className="w-fit h-fit z-20 top-5 right-5 lg:top-10 lg:right-12 fixed flex items-center gap-5"
    >
      <SocialLinks id={`SiteToolbar__socialLinks__${id}`} />
      <Theming />
    </div>
  );
}

export default SiteToolbar;
