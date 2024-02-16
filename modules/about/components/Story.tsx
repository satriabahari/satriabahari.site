import { ABOUT } from "@/common/constant/about";

export default function Story() {
  return (
    <section className="space-y-4 leading-loose text-neutral-800 dark:text-neutral-300">
      {ABOUT.map((paragraph, index) => (
        <div key={index}>{paragraph}</div>
      ))}
    </section>
  );
}
