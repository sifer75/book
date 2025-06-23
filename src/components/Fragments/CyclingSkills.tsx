import { useCallback, useEffect, useRef, useState } from "react";

const softSkills = [
  "autodidacte",
  "polyvalent",
  "persévérant",
  "soucieux",
  "efficace",
  "passionné",
] as const;

interface CyclingSkillsProps {
  id: string;
}

type Nullable<T> = T | null;

const FULL_CYCLE_DURATION = 1e4; // NOTE: 10s
const SLOW_CYCLE_DURATION = FULL_CYCLE_DURATION * 2;

const softSkillsMultiple = [...softSkills, ...softSkills];

function CyclingSkills({ id }: CyclingSkillsProps) {
  const cyclingNodeRef = useRef<HTMLDivElement>(null);
  const [cyclingNodeIsHovered, setCyclingNodeIsHovered] =
    useState<Nullable<boolean>>(null);

  const moveLeft = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    cyclingNode.style.left =
      "-" + cyclingNode.getBoundingClientRect().width / 2 + "px";
  }, []);

  const cycle = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = "0";
    void cyclingNode.offsetHeight;
    cyclingNode.style.transition = cyclingNodeIsHovered
      ? `left ${SLOW_CYCLE_DURATION}ms linear`
      : "";

    moveLeft();
  }, [moveLeft, cyclingNodeIsHovered]);

  const slowdownCycle = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const { left } = window.getComputedStyle(cyclingNode);
    const currentLeft = parseFloat(left);

    const containerWidth = cyclingNode.getBoundingClientRect().width;
    const remainingDistance = containerWidth / 2 + currentLeft;

    const remainingTime =
      (remainingDistance / (containerWidth / 2)) * SLOW_CYCLE_DURATION;

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = `${currentLeft}px`;
    void cyclingNode.offsetHeight;
    cyclingNode.style.transition = `left ${remainingTime}ms linear`;

    moveLeft();
  }, [moveLeft]);

  const restoreCycleSpeed = useCallback(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    const { left } = window.getComputedStyle(cyclingNode);
    const currentLeft = parseFloat(left);

    const containerWidth = cyclingNode.getBoundingClientRect().width;
    const remainingDistance = containerWidth / 2 + currentLeft;

    const remainingTime =
      (remainingDistance / (containerWidth / 2)) * FULL_CYCLE_DURATION;

    cyclingNode.style.transition = "none";
    cyclingNode.style.left = `${currentLeft}px`;
    void cyclingNode.offsetHeight;
    cyclingNode.style.transition = `left ${remainingTime}ms linear`;

    moveLeft();
  }, [moveLeft]);

  useEffect(() => {
    if (cyclingNodeIsHovered === null) return;

    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    if (cyclingNodeIsHovered) {
      slowdownCycle();
    } else {
      restoreCycleSpeed();
    }
  }, [cyclingNodeIsHovered, slowdownCycle, restoreCycleSpeed]);

  useEffect(() => {
    const { current: cyclingNode } = cyclingNodeRef;
    if (cyclingNode === null) return;

    moveLeft();
  }, [moveLeft]);

  return (
    <div
      id={`CyclingSkills__container__${id}`}
      className="relative border-2 z-20 border-yellow-300 rounded-3xl w-[237px] xs:w-[316px] lg:w-[422px] p-1 h-fit flex overflow-hidden"
      onMouseOver={() => setCyclingNodeIsHovered(true)}
      onMouseOut={() => setCyclingNodeIsHovered(false)}
      onTransitionEnd={cycle}
    >
      <div
        id={`CyclingSkills__skill__container__${id}`}
        className="flex relative left-0 transition-[left] duration-[10s] ease-linear"
        ref={cyclingNodeRef}
      >
        {softSkillsMultiple.map((value, index) => (
          <div
            id={`CyclingSkills__skill__${id}`}
            className="flex mr-1 items-center h-7"
            key={index}
          >
            <span id={`CyclingSkills__skill__${value}__${id}`} className="font-merich mr-1 text-white">{value}&nbsp;</span>
            <span id={`CyclingSkills__skill__flower__${value}__${id}`} className="font-kelsi text-yellow-100">X&nbsp;</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CyclingSkills;
