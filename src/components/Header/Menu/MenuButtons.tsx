const buttons = [
  { text: "Accueil", border: "border-orange-400" },
  { text: "Portfolio", border: "border-blue-400" },
  { text: "Compétences", border: "border-red-400" },
  { text: "Joindre", border: "border-green-400" },
] as const;

interface MenuButtonsProps {
  id: string;
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuButtons({ id, menuIsOpen, setMenuIsOpen }: MenuButtonsProps) {
  return (
    <div
      id={`MenuButtons__container__${id}`}
      className="pt-30 h-screen w-full flex flex-col gap-6 px-5"
    >
      {buttons.map(({ text, border }, index: number) => (
        <a
          id={`MenuButtons__button__${text}__${id}`}
          href={`#${text}`}
          onClick={() => setMenuIsOpen(false)}
          key={index}
          style={{
            transitionDelay: `${menuIsOpen ? 150 + index * 100 : 0}ms`,
          }}
          className={`${
            menuIsOpen
              ? "opacity-100"
              : "opacity-0 -translate-x-full  hover:scale-110"
          } border-2 rounded-xl p-2 ${border} hover:scale-110 transition-all`}
        >
          {text}
        </a>
      ))}
    </div>
  );
}

export default MenuButtons;
