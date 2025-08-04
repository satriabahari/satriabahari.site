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
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: "bg-blue-400",
    color: "text-blue-400",
  },
  "Vue.js": {
    icon: <SiVuedotjs size={iconSize} />,
    background: "bg-green-400",
    color: "text-green-400",
  },
  "React.js": {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
  },
  "React Table": {
    icon: <SiReacttable size={iconSize} />,
    background: "bg-rose-600",
    color: "text-rose-600",
  },
  "React Hook Form": {
    icon: <SiReacthookform size={iconSize} />,
    background: "bg-pink-500",
    color: "text-pink-500",
  },
  "React Router": {
    icon: <SiReactrouter size={iconSize} />,
    background: "bg-red-500",
    color: "text-red-500",
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
  },
  "Framer Motion": {
    icon: <TbBrandFramerMotion size={iconSize} />,
    background: "bg-fuchsia-500",
    color: "text-fuchsia-500",
  },
  Redux: {
    icon: <SiRedux size={iconSize} />,
    background: "bg-violet-500",
    color: "text-violet-500",
  },
  "Astro.js": {
    icon: <SiAstro size={iconSize} />,
    background: "bg-pink-500",
    color: "text-pink-500",
  },
  "Next.js": {
    icon: <SiNextdotjs size={iconSize} />,
    color: "text-neutral-50",
    background: "bg-neutral-500",
  },
  "Node.js": {
    icon: <SiNodedotjs size={iconSize} />,
    background: "bg-green-500",
    color: "text-green-500",
  },
  "Express.js": {
    icon: <SiExpress size={iconSize} />,
    color: "text-neutral-50",
    background: "bg-gray-500",
  },
  "Nest.js": {
    icon: <SiNestjs size={iconSize} />,
    background: "bg-pink-700",
    color: "text-pink-700",
  },
  Go: {
    icon: <FaGolang size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-400",
    color: "text-indigo-400",
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-600",
    color: "text-red-600",
  },
  Prisma: {
    icon: <SiPrisma size={iconSize} />,
    background: "bg-teal-500",
    color: "text-teal-500",
  },
  Kotlin: {
    icon: <SiKotlin size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
  },
  PostgreSql: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: "bg-blue-400",
    color: "text-blue-400",
  },
  MySql: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-blue-400",
    color: "text-blue-400",
  },
  MongoDb: {
    icon: <SiMongodb size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-yellow-500",
    color: "text-yellow-500",
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-emerald-500",
    color: "text-emerald-500",
  },
  Jest: {
    icon: <SiJest size={iconSize} />,
    background: "bg-rose-400",
    color: "text-rose-400",
  },
  Docker: {
    icon: <SiDocker size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
  },
  Npm: {
    icon: <FaNpm size={iconSize} />,
    background: "bg-red-500",
    color: "text-red-500",
  },
  Yarn: {
    icon: <SiYarn size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
  },
  bun: {
    icon: <SiBun size={iconSize} />,
    background: "bg-yellow-300",
    color: "text-yellow-50",
  },
  Github: {
    icon: <SiGithub size={iconSize} />,
    color: "text-neutral-50",
    background: "bg-neutral-200",
  },
};
