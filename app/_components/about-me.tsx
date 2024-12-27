import React from "react";
import TitlesContainer from "./titles-container";
import FreelancerWork from "./freelancer-work";

const titles = {
  title: "About me",
  subtitle: "+ informações sobre mim",
};

const AboutMe = () => {
  return (
    <div id="aboutMe" className="bg-gradient-image-hero mb-28 p-3">
      <TitlesContainer {...titles} />
      <article className="m-auto w-4/5 p-1 md:w-[600px]">
        <p className="text-[18px] leading-7 tracking-wide">
          Sou desenvolvedor web júnior, com foco no React.JS e Next.JS, sou
          capaz de resolver tasks de baixa e média complexidade, como
          estilização e construção de layouts , consumo de API, realização de
          testes unitários, e um dos meus principais objetivos é de me tornar um
          desenvolvedor full stack e dominar as principais tecnologias desse
          ecossistema.
        </p>
      </article>
      <FreelancerWork />
    </div>
  );
};

export default AboutMe;
