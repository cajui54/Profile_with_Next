import React from "react";
import TitlesContainer from "./titles-container";
import { skills } from "../datas/skills";

const MySkills = () => {
  return (
    <div id="skill" className="bg-gradient-image-hero mb-48 h-full p-3">
      <TitlesContainer title="My Skills" subtitle="Minhas Habilidades" />

      <div className="mx-auto min-h-56 w-[90%] sm:w-[500px]">
        {skills.length > 0 &&
          skills.map((skill, index) => (
            <div
              key={index}
              className="mt-4 flex h-28 w-full items-center justify-between rounded-md border border-emerald-500 bg-neutral-950 px-3"
            >
              <div className="mr-3 w-[20%] text-center">
                {<skill.icon className="text-5xl text-emerald-500" />}
              </div>

              <div className="w-4/5">
                <h2 className="text-2xl font-bold text-emerald-500">
                  {skill.title}
                </h2>
                <h3 className="-mt-2 text-[12px]">{skill.subtitle}</h3>
                {skill.libraries && (
                  <div className="mt-2 flex h-9 min-w-[60%] items-center justify-center space-x-9 rounded-xl bg-neutral-900 px-1 py-2">
                    {skill.libraries.map((library, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                      >
                        {
                          <library.icon className="text-[20px] text-emerald-400" />
                        }
                        <h3 className="text-center text-[9px]">
                          {library.titles}
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MySkills;
