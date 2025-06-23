import SiteToolbar from "@/components/Header/SiteToolbar";
import Menu from "@/components/Header/Menu/Menu";
import FontIcons from "@/components/FontIcons";

interface HeaderProps {
  id: string;
}

function Header({ id }: HeaderProps) {
  return (
    <div id={`Header__container__${id}`}>
      <SiteToolbar id={`Header__siteToolbar__${id}`} />
      <div
        id={`Header__menu__container__${id}`}
        className="h-full bg-blue-500 hidden lg:block"
      >
        <Menu id={`Header__menu__${id}`} />
      </div>
      <div
        id={`Header__fontIcons__container__${id}`}
        className="z-0 inset-0 absolute lg:block"
      >
        <FontIcons id={`Header__fontIcons__${id}`} />
      </div>
    </div>
  );
}

export default Header;
