import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logos } from "../lib/logo.utils";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface FontIconsProps {
  id: string;
}

const shuffleArray = (array: IconDefinition[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const renderIcons = () => {
  const shuffleLogos = shuffleArray([...logos]);
  return shuffleLogos.map((icon, index: number) => (
    <FontAwesomeIcon
      key={index}
      icon={icon}
      size="2xl"
      className="i text-gray-900"
    />
  ));
};
function FontIcons({ id }: FontIconsProps) {
  return (
    <div
      id={`FontIcons__container__${id}`}
      className="w-full overflow-hidden h-screen text-3xl border border-black relative"
    >
      <div
        id={`FontIcons__logo__container__${id}`}
        className="w-full h-full flex -left-[13%] relative items-center justify-center flex-col gap-10"
      >
        {[...Array(45)].map((_, index) => (
          <div
            id={`FontIcons__logo__${index}__${id}`}
            key={index}
            className="-rotate-45 flex gap-5 min-h-fit w-full"
          >
            {renderIcons()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FontIcons;
