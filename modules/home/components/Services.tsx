"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GiExtraTime as CTAIcon } from "react-icons/gi";
import { GiTimeTrap as ServiceIcon } from "react-icons/gi";

import Card from "@/common/components/elements/Card";
import Button from "@/common/components/elements/Button";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Services = () => {
  const t = useTranslations("HomePage.services");

  const router = useRouter();

  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title={t("title")} icon={<ServiceIcon size={24} />} />
        <SectionSubHeading>{t("sub_title")}</SectionSubHeading>
      </div>
      <Card className="space-y-4 p-6">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <CTAIcon size={27} />
          </motion.div>
          <p className="text-lg font-medium text-neutral-900 dark:text-neutral-50">
            {t("cta.title")}
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">
          {t("cta.sub_title")}
        </p>
        <Button
          className="transition duration-300 hover:scale-105 active:scale-95"
          onClick={() => router.push("/contact")}
        >
          {t("cta.button")}
        </Button>
      </Card>
    </section>
  );
};

export default Services;
