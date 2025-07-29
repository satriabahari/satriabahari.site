import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm, FaGolang } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiRedux,
  SiVuedotjs,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiJest,
  SiDocker,
  SiKotlin,
} from "react-icons/si";

export type SkillProps = {
  icon: React.ReactElement;
  color: string;
  label: string;
};

const iconSize = 26;

export const STACKS: SkillProps[] = [
  {
    icon: <SiHtml5 size={iconSize} />,
    color: "bg-orange-500",
    label: "HTML",
  },
  { icon: <SiCss3 size={iconSize} />, color: "bg-blue-500", label: "CSS" },
  {
    icon: <BsFillBootstrapFill size={iconSize} />,
    color: "bg-violet-600",
    label: "Bootstrap",
  },
  {
    icon: <SiTailwindcss size={iconSize} />,
    color: "bg-cyan-400",
    label: "TailwindCSS",
  },
  {
    icon: <SiJavascript size={iconSize} />,
    color: "bg-yellow-400",
    label: "JavaScript",
  },
  {
    icon: <SiTypescript size={iconSize} />,
    color: "bg-blue-400",
    label: "TypeScript",
  },
  {
    icon: <SiVuedotjs size={iconSize} />,
    color: "bg-green-400",
    label: "Vue.js",
  },
  {
    icon: <SiReact size={iconSize} />,
    color: "bg-cyan-400",
    label: "React.js",
  },
  {
    icon: <SiReacttable size={iconSize} />,
    color: "bg-rose-600",
    label: "React Table",
  },
  {
    icon: <SiReacthookform size={iconSize} />,
    color: "bg-pink-500",
    label: "React Hook Form",
  },
  {
    icon: <SiReactrouter size={iconSize} />,
    color: "bg-red-500",
    label: "React Router",
  },
  { icon: <SiVite size={iconSize} />, color: "bg-purple-500", label: "Vite" },
  {
    icon: <TbBrandFramerMotion size={iconSize} />,
    color: "bg-fuchsia-500",
    label: "Framer Motion",
  },
  {
    icon: <SiRedux size={iconSize} />,
    color: "bg-violet-500",
    label: "Redux",
  },
  {
    icon: <SiAstro size={iconSize} />,
    color: "bg-pink-500",
    label: "Astro.js",
  },
  {
    icon: <SiNextdotjs size={iconSize} />,
    color: "bg-neutral-700",
    label: "Next.js",
  },
  {
    icon: <SiNodedotjs size={iconSize} />,
    color: "bg-green-500",
    label: "Node.js",
  },
  {
    icon: <SiExpress size={iconSize} />,
    color: "bg-neutral-500",
    label: "Express.js",
  },
  {
    icon: <SiNestjs size={iconSize} />,
    color: "bg-pink-700",
    label: "Nest.js",
  },
  { icon: <FaGolang size={iconSize} />, color: "bg-sky-400", label: "Go" },
  { icon: <SiPhp size={iconSize} />, color: "bg-indigo-400", label: "PHP" },
  {
    icon: <SiLaravel size={iconSize} />,
    color: "bg-red-600",
    label: "Laravel",
  },
  {
    icon: <SiPrisma size={iconSize} />,
    color: "bg-teal-500",
    label: "Prisma",
  },
  {
    icon: <SiKotlin size={iconSize} />,
    color: "bg-purple-500",
    label: "Kotlin",
  },
  {
    icon: <BiLogoPostgresql size={iconSize} />,
    color: "bg-blue-400",
    label: "PostgreSql",
  },
  { icon: <SiMysql size={iconSize} />, color: "bg-blue-400", label: "MySql" },
  {
    icon: <SiMongodb size={iconSize} />,
    color: "bg-green-600",
    label: "MongoDb",
  },
  {
    icon: <SiFirebase size={iconSize} />,
    color: "bg-yellow-500",
    label: "Firebase",
  },
  {
    icon: <SiSupabase size={iconSize} />,
    color: "bg-emerald-500",
    label: "Supabase",
  },
  { icon: <SiJest size={iconSize} />, color: "bg-rose-400", label: "Jest" },
  {
    icon: <SiDocker size={iconSize} />,
    color: "bg-blue-500",
    label: "Docker",
  },
  { icon: <FaNpm size={iconSize} />, color: "bg-red-500", label: "Npm" },
  { icon: <SiYarn size={iconSize} />, color: "bg-sky-400", label: "Yarn" },
  { icon: <SiBun size={iconSize} />, color: "bg-yellow-300", label: "bun" },
  {
    icon: <SiGithub size={iconSize} />,
    color: "bg-neutral-700",
    label: "Github",
  },
];
