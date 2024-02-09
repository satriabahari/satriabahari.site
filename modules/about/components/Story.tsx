import { ABOUT } from "@/common/constant/about";

export default function Story() {
  return (
    <section
      className="space-y-4 leading-[1.8] text-neutral-800 md:leading-loose"
      dangerouslySetInnerHTML={{ __html: ABOUT }}
    />
  );
}
