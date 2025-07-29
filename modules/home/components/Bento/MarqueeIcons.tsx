import SkillCard from "../SkillCard";

import MarqueeElement from "@/common/components/elements/MarqueeElement";
import { STACKSMARQUE } from "@/common/constants/stacksMarque";

const MarqueeIcons = () => {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKSMARQUE,
  ).sort(() => Math.random() - 0.5);
  return (
    <div className="flex flex-col overflow-x-hidden">
      {Array.from({ length: 2 }, (_, index) => {
        const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
        return (
          <MarqueeElement
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            {slider.map(([name, icon], index) => (
              <SkillCard key={index} name={name} icon={icon} />
            ))}
          </MarqueeElement>
        );
      })}
    </div>
  );
};

export default MarqueeIcons;
