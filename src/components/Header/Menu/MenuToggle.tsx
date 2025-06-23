interface MenuToggleProps {
  id: string;
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuToggle({ id, menuIsOpen, setMenuIsOpen }: MenuToggleProps) {
  return (
    <button
      id={`MenuToggle__button__${id}`}
      onClick={() => setMenuIsOpen(!menuIsOpen)}
      className="transition-all z-20 hover:scale-110 gap-1.5 absolute top-4 left-5 duration-200 ease-in-out h-16 w-16 rounded-full aspect-square flex flex-col justify-center items-center"
    >
      <span
        id={`MenuToggle__span__1__${id}`}
        className={`bg-black w-8 h-1 transform transition-transform duration-150 ${
          menuIsOpen ? "rotate-45 translate-y-2.5" : "rotate-0 translate-y-0 "
        }`}
      />
      <span
        id={`MenuToggle__span__2__${id}`}
        className={`bg-black w-8 h-1 transition-opacity duration-100 ${
          menuIsOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        id={`MenuToggle__span__3__${id}`}
        className={`bg-black w-8 h-1 transform transition-transform duration-150 ${
          menuIsOpen ? "-rotate-45 -translate-y-2.5" : "rotate-0 translate-y-0"
        }`}
      />
    </button>
  );
}

export default MenuToggle;
