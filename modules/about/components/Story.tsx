import { ABOUT } from "@/common/constant/about";
import { useTranslations } from "next-intl";

export default function Story() {
  const paragrafData = [{ index: 1 }, { index: 2 }, { index: 3 }];
  const t = useTranslations("AboutPage");
  return (
    <section className="space-y-4 leading-loose text-neutral-800 dark:text-neutral-300">
      {paragrafData.map((paragraph) => (
        <div key={paragraph.index}>
          {t(`resume.paragraf_${paragraph.index}`)}
        </div>
      ))}
    </section>
  );
}
