"use client";

import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CAREERS } from "@/common/constant/carreers";

import CareerCard from "./CareerCard";
import Resume from "./Resume";
import { useTranslations } from "next-intl";
import Portfolio from "./Portfolio";

export default function CareerList() {
  const t = useTranslations("AboutPage.career");

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("title")} icon={<CareerIcon />} />
        <SectionSubHeading>
          <p>{t("sub_title")}</p>
          <div className="mt-2 flex md:flex-row gap-4 md:mt-0 flex-col">
            <Portfolio />
            <Resume />
          </div>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {CAREERS?.map((career, index) => (
          <CareerCard key={index} indexCareer={index} {...career} />
        ))}
      </div>
    </section>
  );
}
