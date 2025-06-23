import { useEffect, useRef, useState } from "react";
import MenuButtons from "./MenuButtons";
import MenuToggle from "./MenuToggle";

interface MenuBarProps {
  id: string;
}

function Menu({ id }: MenuBarProps) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      id={`Menu__container__${id}`}
      ref={menuRef}
      className="w-fit h-fit z-20 top-5 left-5 flex items-center gap-5"
    >
      <MenuToggle
        id={`Menu__menuToggle__${id}`}
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
      <div
        id={`Menu__menuButtons__container__${id}`}
        className={`flex flex-col transition-all duration-700 overflow-hidden ease-in-out bg-white z-10 ${
          menuIsOpen
            ? "h-screen w-60"
            : "h-16 w-16 rounded-[48px] ml-5 mt-4 hover:scale-125"
        }`}
      >
        <MenuButtons
          id={`Menu__menuButtons__${id}`}
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
      </div>
    </div>
  );
}

export default Menu;
