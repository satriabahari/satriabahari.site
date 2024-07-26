import { useTranslations } from "next-intl";

const Story = () => {
  const t = useTranslations("AboutPage");

  const paragrafData = [{ index: 1 }, { index: 2 }, { index: 3 }];

  return (
    <section className="space-y-4 leading-loose text-neutral-800 dark:text-neutral-300">
      {paragrafData.map((paragraph) => (
        <div key={paragraph.index}>
          {t(`resume.paragraf_${paragraph.index}`)}
        </div>
      ))}
    </section>
  );
};

export default Story;
