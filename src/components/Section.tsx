import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  viewHeight?: boolean;
}

function Section({ id, children, viewHeight }: SectionProps) {
  return (
    <div
      id={`Section__container__${id}`}
      className={`flex flex-col w-screen h-fit scroll-smooth bg-blue-500 items-between p-20 ${
        viewHeight ? "h-fit" : "h-screen"
      }`}
    >
      {children}
    </div>
  );
}

export default Section;
