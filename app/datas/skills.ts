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
import { FaComputer } from "react-icons/fa6";
import {
  SiReactquery,
  SiAxios,
  SiStyledcomponents,
  SiTailwindcss,
  SiJest,
  SiTestinglibrary,
  SiPrisma,
} from "react-icons/si";
import { PiWebhooksLogo } from "react-icons/pi";
import { MdOutlineCss } from "react-icons/md";
import { DiSass } from "react-icons/di";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";

interface Libraries {
  icon: IconType;
  titles: string;
}
interface DataSkill {
  icon: IconType;
  title: string;
  subtitle: string;
  libraries?: Libraries[];
}
const reactLibraries: Libraries[] = [
  { icon: TbBrandRedux, titles: "Redux" },
  { icon: SiReactquery, titles: "React Query" },
  { icon: SiAxios, titles: "Axios" },
  { icon: PiWebhooksLogo, titles: "Hooks" },
];
const cssLibraries: Libraries[] = [
  { icon: SiStyledcomponents, titles: "Styled-Components" },
  { icon: DiSass, titles: "Sass" },
  { icon: FaCss3Alt, titles: "CSS3" },
  { icon: SiTailwindcss, titles: "TailwindCss" },
];
const webLibraries: Libraries[] = [
  { icon: FaHtml5, titles: "HTML5" },
  { icon: FaCss3Alt, titles: "CSS3" },
  { icon: TbBrandJavascript, titles: "JavaScript" },
  { icon: TbBrandTypescript, titles: "TypeScript" },
];
export const skills: DataSkill[] = [
  { icon: RiNextjsLine, title: "Next.JS 14", subtitle: "Framework" },
  {
    icon: FaReact,
    title: "React.JS",
    subtitle: "Library",
    libraries: reactLibraries,
  },
  {
    icon: MdOutlineCss,
    title: "Cascading Styles Sheets",
    subtitle: "Libraries CSS",
    libraries: cssLibraries,
  },
  { icon: SiJest, title: "Jest", subtitle: "Framework of Test" },
  {
    icon: SiTestinglibrary,
    title: "React Testing in Library",
    subtitle: "Framework of Test",
  },
  {
    icon: FaNode,
    title: "Node.JS",
    subtitle: "Runtime of JS",
  },
  {
    icon: BiLogoMongodb,
    title: "MongleDB",
    subtitle: "NoSQL database",
  },
  {
    icon: SiPrisma,
    title: "Prisma",
    subtitle: "ORM",
  },
  {
    icon: RiFirebaseLine,
    title: "Firebase",
    subtitle: "Database of Google",
  },
  {
    icon: FaGitAlt,
    title: "Git",
    subtitle: "manage of version",
  },
  {
    icon: FaGithub,
    title: "Github",
    subtitle: "Repository",
  },
  {
    icon: FaComputer,
    title: "Desenvolvimento Web",
    subtitle: "Tools Web",
    libraries: webLibraries,
  },
];
