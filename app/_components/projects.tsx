"use client";
import React, { useState } from "react";
import TitlesContainer from "./titles-container";
import Link from "next/link";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaGithub,
} from "react-icons/fa";
import { projects } from "../datas/projects";

const ProjectsComponent = () => {
  const [index, setIndex] = useState<number>(1);

  const handleBack = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handleNext = () => {
    if (index < projects.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div id="projects" className="bg-gradient-image-hero mt-20 py-10">
      <TitlesContainer title="Projects" subtitle="Projetos Recentes" />

      {projects.length > 0 && (
        <div className="mx-auto mt-10 h-[590px] w-[90%] overflow-hidden rounded-lg border border-emerald-500 bg-neutral-950 sm:w-[500px]">
          <Link
            target="_blank"
            className="relative"
            href={projects[index].deployLink}
          >
            <div className="from-neutral-950-500 absolute z-10 h-full w-full bg-gradient-to-t from-neutral-950 from-10% to-transparent"></div>
            <div className="absolute right-1 top-2 flex min-w-28 space-x-5 rounded-full bg-neutral-900 p-2 text-2xl">
              {projects[index].toScreen.map((Icon, _index) => (
                <Icon key={_index} />
              ))}
            </div>
            <Image
              src={projects[index].image}
              className="h-[250px] w-full"
              alt={projects[index].title}
              width={500}
              height={250}
            />
          </Link>
          <div>
            <div className="mx-auto w-4/5">
              <TitlesContainer
                title={projects[index].title}
                subtitle={projects[index].subtitle}
              />
            </div>
            <div className="mx-auto w-4/5 rounded-2xl bg-neutral-900">
              <p className="relative -top-4 font-bold text-white">
                Tecnologias usadas:
              </p>
              <div className="flex items-center justify-center space-x-4">
                {projects[index].skills.map((stack, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    {<stack.icon className="text-[25px] text-emerald-500" />}
                    <span className="text-[10px] font-bold">{stack.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="m-2 mx-auto my-4 w-4/5">
              <span className="font-bold text-emerald-500">
                {projects[index].title}
              </span>
              {projects[index].description}
            </p>
            <div className={`mx-auto mb-4 flex w-4/5 justify-between`}>
              <span
                onClick={handleBack}
                className={`${index === 0 && "opacity-0"} cursor-pointer`}
              >
                <FaArrowCircleLeft className="text-3xl text-emerald-500 transition-all hover:scale-125" />
                back
              </span>

              <span
                onClick={handleNext}
                className={`${index === projects.length - 1 && "opacity-0"} cursor-pointer`}
              >
                <FaArrowCircleRight className="text-3xl text-emerald-500 transition-all hover:scale-125" />
                next
              </span>
            </div>

            <div className="mx-auto -mt-12 flex w-52 items-center justify-around space-x-3 text-neutral-950">
              <Link
                target="_blank"
                href={projects[index].deployLink}
                className="flex space-x-2 rounded-full bg-emerald-500 p-1"
              >
                <CgWebsite className="text-2xl" />
                <span>Deploy</span>
              </Link>

              <Link
                target="_blank"
                href={projects[index].repositoryGithub}
                className="flex space-x-2 rounded-full bg-emerald-500 p-1"
              >
                <FaGithub className="text-2xl" />
                <span>Repository</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsComponent;
