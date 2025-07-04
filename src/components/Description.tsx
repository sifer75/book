import { useEffect, useRef } from "react";

interface DescriptionProps {
  id: string;
}

function Decription({ id }: DescriptionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const text =
    "Développeur web passionné, je souhaite apprendre de nouvelles notions et des solutions technologiques innovantes. J'apprécie le travail en équipe et j'aime intégrer les suggestions pour contribuer au succès de projets. Également attentif aux détails, orienté vers la qualité et soucieux de l'expérience utilisateur. Je m'efforce de créer des produits qui sont esthétiquement plaisants et faciles à utiliser.";
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY: currentScrollY } = window;
      const { current: stackNode } = sectionRef;

      if (stackNode === null) return null;
      const texts = stackNode.children as HTMLCollectionOf<HTMLSpanElement>;

      const sectionTop =
        stackNode.getBoundingClientRect().top + currentScrollY - innerHeight;
      const distanceScrolled = currentScrollY - sectionTop;

      for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        const offset = i * 16;
        const newOpacity = Math.min(
          Math.max(0.5 + (distanceScrolled - offset) / 250, 0.3),
          1,
        );
        text.style.opacity = String(newOpacity);
      }
    };

    document.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={`Description__container__${id}`}
      className="h-fit w-full flex items-center justify-between"
    >
      <p
        id={`Description__text__${id}`}
        className="font-Neue text-yellow-300 text-xl xs:text-2xl sm:text-3xl lg:text-4xl w-full"
        ref={sectionRef}
      >
        {words.map((word: string, index: number) => (
          <span key={index}>
            {word} <span> </span>
          </span>
        ))}
      </p>
    </section>
  );
}

export default Decription;
