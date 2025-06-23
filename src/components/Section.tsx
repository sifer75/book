import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

function Section({ id, children }: SectionProps) {
  return (
    <div
      id={`Section__container__${id}`}
      className="flex flex-col w-screen h-screen scroll-smooth bg-blue-500 items-between p-20"
    >
      {children}
    </div>
  );
}

export default Section;
