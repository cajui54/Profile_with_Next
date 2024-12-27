import React from "react";
import TitlesContainer from "./titles-container";
import imgDeCake from "@/app/assets/images/decake.png";
import imgDGS from "@/app/assets/images/dgs.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

const FreelancerWork = () => {
  return (
    <div className="mt-24 p-3">
      <TitlesContainer title="Freelancer" subtitle="Trabalhos Realizados" />
      <article className="m-auto mb-20 w-4/5 p-1 md:w-[600px]">
        <p className="text-[18px] leading-7 tracking-wide">
          Como freelancer, desenvolvi essas single pages utilizando React.JS e
          Next.JS, ajudando aos clientes a alcançar mais clientes. 
        </p>
      </article>

      <TitlesContainer title="DeCakes" subtitle="Single Page" />
      <article className="m-auto mb-28 w-4/5 p-1 md:w-[600px]">
        <p className="text-[18px] leading-7 tracking-wide">
          Para <span className="font-semibold text-pink-400">Decake </span>
          criei um catálogo para mostrar seu trabalho e direcionando os clientes
          para seus contantos e redes sociais.
        </p>

        <div className="mx-auto mt-8 flex w-4/6 flex-col items-center justify-center sm:w-[400px]">
          <Image src={imgDeCake} alt="DeCake" className="rounded-xl" />
          <Link
            target="_blank"
            className="mt-5 flex min-w-28 items-center justify-center rounded-full border border-emerald-500 bg-neutral-900 px-2 py-2 text-center"
            href="https://d-cake-confeitaria-artesanal.vercel.app/"
          >
            <FaGlobe className="mr-2 text-emerald-500" />
            Visite o Site
          </Link>
        </div>
      </article>

      <TitlesContainer title="DGS Sound" subtitle="Single Page" />
      <article className="m-auto w-4/5 p-1 md:w-[600px]">
        <p className="text-[18px] leading-7 tracking-wide">
          Para <span className="font-semibold text-yellow-400">DGS Sound </span>
          criei um catálogo em uma single page para mostrar seu trabalho e
          direcionando os clientes para seus contantos e redes sociais.
        </p>

        <div className="mx-auto mt-8 flex w-4/6 flex-col items-center justify-center sm:w-[400px]">
          <Image
            src={imgDGS}
            alt="DGS Sound"
            className="rounded-xl shadow-lg shadow-emerald-500/50"
          />
          <Link
            target="_blank"
            className="mt-5 flex min-w-28 items-center justify-center rounded-full border border-emerald-500 bg-neutral-900 px-2 py-2 text-center"
            href="https://dgssound-altofalantesautomotivos.vercel.app/"
          >
            <FaGlobe className="mr-2 text-emerald-500" />
            Visite o Site
          </Link>
        </div>
      </article>
    </div>
  );
};

export default FreelancerWork;
