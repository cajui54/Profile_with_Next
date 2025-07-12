import { IconType } from "react-icons";
import { RiFirebaseLine, RiNextjsLine } from "react-icons/ri";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import {
  SiReactquery,
  SiAxios,
  SiStyledcomponents,
  SiTailwindcss,
  SiJest,
  SiTestinglibrary,
  SiPrisma,
} from "react-icons/si";

import { DiSass } from "react-icons/di";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiShadcnui } from "react-icons/si";

interface ISkillProps {
  icon: IconType;
  name: string;
}
export const dataSkills: ISkillProps[] = [
  {
    icon: RiNextjsLine,
    name: "Next.JS",
  },
  {
    icon: FaReact,
    name: "React.JS",
  },
  {
    icon: SiShadcnui,
    name: "Shadcn/UI",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  {
    icon: SiPrisma,
    name: "Prisma",
  },
  {
    icon: TbBrandRedux,
    name: "Redux Toolkit",
  },
  {
    icon: SiAxios,
    name: "Axios",
  },
  {
    icon: SiReactquery,
    name: "React Query",
  },
  {
    icon: SiStyledcomponents,
    name: "Styled Components",
  },

  {
    icon: DiSass,
    name: "Sass",
  },

  {
    icon: TbBrandJavascript,
    name: "JavaScript",
  },
  {
    icon: TbBrandTypescript,
    name: "TypeScript",
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
  },
  {
    icon: SiJest,
    name: "Jest",
  },
  {
    icon: SiTestinglibrary,
    name: "Testing Library",
  },
  {
    icon: FaNode,
    name: "Node.JS",
  },
  {
    icon: BiLogoMongodb,
    name: "MongoDB",
  },

  {
    icon: RiFirebaseLine,
    name: "Firebase",
  },
  {
    icon: FaGitAlt,
    name: "Git",
  },
  {
    icon: FaGithub,
    name: "Github",
  },
  {
    icon: FaHtml5,
    name: "HTML5",
  },
];
