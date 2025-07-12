import React from "react";
import TitlesContainer from "./titles-container";
import { dataSkills } from "../datas/skills";
import CardSkillItem, { Icon, Title } from "./card-skill-item";

const MySkills = () => {
  return (
    <div id="skill" className="bg-gradient-image-hero mb-48 h-full p-3">
      <TitlesContainer title="My Skills" subtitle="Minhas Habilidades" />
      <div className="mx-auto grid w-full grid-cols-3 gap-y-3 sm:w-[600px] sm:grid-cols-5">
        {dataSkills.map((skill) => (
          <CardSkillItem key={skill.name}>
            <Icon icon={skill.icon} />
            <Title title={skill.name} />
          </CardSkillItem>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
