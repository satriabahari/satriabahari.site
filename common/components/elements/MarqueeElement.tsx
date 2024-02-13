import Marquee from "react-fast-marquee";

type MarqueeElementProps = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  withPadding?: boolean;
};

export default function MarqueeElement({
  children,
  direction = "left",
  withPadding = true,
}: MarqueeElementProps) {
  return (
    <Marquee
      direction={direction}
      speed={25}
      className={withPadding ? "py-3" : ""}
    >
      {children}
    </Marquee>
  );
}
