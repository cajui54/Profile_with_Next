import imgEStockyly from "@/app/assets/images/e-stockly.png";
import imgDeKebras from "@/app/assets/images/dekebras.png";
import {
  RiFirebaseLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiPrisma,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaTabletAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";

export const projects = [
  {
    image: imgEStockyly,
    title: "E-Stocky",
    subtitle: "Gerenciador de Estoque",
    skills: [
      {
        icon: RiNextjsLine,
        title: "Next.JS",
      },
      {
        icon: RiTailwindCssFill,
        title: "TaildwindCss",
      },
      {
        icon: SiShadcnui,
        title: "Shadcn/ui",
      },
      {
        icon: SiZod,
        title: "Zod",
      },
      {
        icon: SiPrisma,
        title: "Prisma",
      },
      {
        icon: BiLogoPostgresql,
        title: "Postgresql",
      },
    ],
    description:
      ". é uma aplicação web para gerenciamento de produtos e vendas.",
    toScreen: [MdComputer, FaComputer, FaTabletAlt],
    deployLink: "https://e-stockly.vercel.app/",
    repositoryGithub: "https://github.com/cajui54/E-Stockly",
  },
  {
    image: imgDeKebras,
    title: "DeKebras",
    subtitle: "Distribuidora de Bebidas",
    skills: [
      {
        icon: FaReact,
        title: "React.JS",
      },
      {
        icon: SiRedux,
        title: "Redux",
      },
      {
        icon: SiTypescript,
        title: "Typescript",
      },
      {
        icon: SiStyledcomponents,
        title: "Styled-Components",
      },
      {
        icon: RiFirebaseLine,
        title: "Firebase",
      },
    ],
    description:
      ". é uma aplicação web para gerenciar usuários, financeiro, produtose vendas.",
    toScreen: [MdComputer, FaComputer, FaTabletAlt],
    deployLink: "https://d-kebras-dashboard.vercel.app/",
    repositoryGithub: "https://github.com/cajui54/dashboard_app",
  },
];
