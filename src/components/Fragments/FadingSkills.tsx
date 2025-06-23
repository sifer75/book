import { useEffect, useRef } from "react";

interface FadingSkillsProps {
  id: string;
}

const stack = ["WEB", "DEVELOPER", "FULL STACK"] as const;
const FADE_DELTA = 150;
const START_OFFSET = 10;

function FadingSkills({ id }: FadingSkillsProps) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    function handleScroll() {
      const { scrollY: currentScrollY } = window;
      const { current: stackNode } = stackRef;
      const texts = stackNode?.children as HTMLCollectionOf<HTMLElement>;

      if (!stackNode) return;

      if (currentScrollY <= 0) {
        for (const element of texts) element.style.opacity = "";
      }

      for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        const startFade = FADE_DELTA * i - START_OFFSET;
        const distance = currentScrollY - startFade;
        const opacity = Math.max(0, 1 - distance / FADE_DELTA);

        text.style.opacity = String(opacity);
      }
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <h2
      id={`FadingSkills__container__${id}`}
      className="leading-[1] transition-opacity z-10 duration-500 font-merich text-yellow-100"
      ref={stackRef}
    >
      {stack.map((value, k) => (
        <span
          id={`FadingSkills__text__${value}__${id}`}
          key={k}
          className="block text-4xl xs:text-5xl sm:text-6xl lg:text-7xl"
        >
          {value}
        </span>
      ))}
    </h2>
  );
}

export default FadingSkills;
