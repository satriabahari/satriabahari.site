import { ABOUT } from "@/common/constant/about";

export default function Story() {
  return (
    <section className="space-y-4 leading-7 text-neutral-800">
      {ABOUT.map((paragraph, index) => (
        <div key={index}>{paragraph}</div>
      ))}
    </section>
  );
}
