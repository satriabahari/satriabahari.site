import Image from "@/common/components/elements/Image";
import { useTranslations } from "next-intl";

const Story = () => {
  const t = useTranslations("AboutPage");

  const paragrafData = [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }];

  return (
    <section className="space-y-4 leading-loose text-neutral-800 dark:text-neutral-300">
      {paragrafData.map((paragraph) => (
        <div key={paragraph.index}>
          {t(`resume.paragraf_${paragraph.index}`)}
        </div>
      ))}
      <Image
        src="/images/signature.png"
        alt="signature"
        width={100}
        height={100}
      />
    </section>
  );
};

export default Story;
