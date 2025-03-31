import React from "react";
import TitlesContainer from "./titles-container";
import logoUnip from "@/app/assets/images/unip.png";
import logoFSW from "@/app/assets/images/logoFSW.png";
import certificadoNext from "@/app/assets/images/cetificadoNext_FSW.jpeg";
import Image from "next/image";
const titles = {
  title: "AcademicTraining",
  subtitle: "Formação Acadêmica",
};
const AcademicTraining = () => {
  return (
    <div className="mx-auto md:w-[800px]">
      <article className="mt-7">
        <TitlesContainer {...titles} />

        <div className="mx-auto flex w-4/5 gap-x-3">
          <Image
            className="rounded-[5px]"
            src={logoUnip}
            alt="Unip"
            width={60}
            height={50}
          />
          <div>
            <h3>Formando em:</h3>
            <h2 className="font-bold text-emerald-400">
              Análise e Desenvolvimento de Sistema
            </h2>
            <p className="text-sm italic text-neutral-400">
              Fev. 2014 à Fev. 2016
            </p>
          </div>
        </div>
      </article>

      <article className="mt-7">
        <div className="mx-auto flex w-4/5 gap-x-3">
          <Image
            src={logoFSW}
            alt="logo full stack week"
            width={60}
            height={60}
          />
          <div>
            <h3>Formanção:</h3>
            <h2 className="font-bold text-emerald-400">Full Stack</h2>
            <p className="text-sm italic text-neutral-400">Em andamento...</p>
          </div>
        </div>

        <div className="mx-auto mt-4 w-4/5">
          <TitlesContainer title="Next.JS" subtitle="Formação Next.JS" />
          <details className="mx-auto w-4/5">
            <summary className="cursor-pointer">Formação Next.JS</summary>
            <ul className="mx-auto mt-3 space-y-2 [&>*]:rounded-lg [&>*]:bg-neutral-900 [&>*]:p-2">
              <li>CSR, SSR, SSG & ISR</li>
              <li>Client & Server Component</li>
              <li>Data Fetching</li>
              <li>Server Actions & Formulário</li>
            </ul>
          </details>
          <Image
            src={certificadoNext}
            alt="certificado next"
            className="mx-auto ml-3 mt-4 w-4/5 rounded-md border border-neutral-500 hover:scale-150 sm:w-[200px]"
          />
        </div>
      </article>
    </div>
  );
};

export default AcademicTraining;
