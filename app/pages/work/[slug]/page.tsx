import HeaderBack from "@/app/_components/header-back";
import React from "react";
import SlideImages from "../_components/slide-images";
import { freelancers } from "@/app/datas/freelancer";
import { notFound } from "next/navigation";
import TitlesContainer from "@/app/_components/titles-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IWorkPageProps {
  params: {
    slug: string;
  };
}

const WorkPage = ({ params }: IWorkPageProps) => {
  const work = freelancers.find((item) => item.slug === params.slug);

  if (!work) notFound();

  return (
    <div>
      <HeaderBack />
      <div className="mt-6 space-y-4 pb-11 lg:flex lg:items-center lg:justify-center">
        <SlideImages {...work} />

        <article className="mx-auto text-center sm:w-[600px] lg:m-0">
          <TitlesContainer title={work.title} subtitle={work.subtitle} />
          <p className="px-4 lg:mx-auto lg:w-[490px]">{work.content}</p>
          <Link
            href={work.path}
            target="_blank"
            className="mx-auto mt-4 block w-[150px] rounded-sm bg-emerald-500 py-1 text-center font-semibold text-neutral-900"
          >
            + Detalhes
          </Link>
        </article>
      </div>
    </div>
  );
};

export default WorkPage;
