import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
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
} from "react-icons/si";

export type SkillProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: SkillProps = {
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-400" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-violet-600" />
  ),
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  PHP: <SiPhp size={iconSize} className="text-indigo-400" />,
  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-400" />,
  "React.js": <SiReact size={iconSize} className="text-cyan-400" />,
  "React Router": <SiReactrouter size={iconSize} className="text-red-500" />,
  "React Hook Form": (
    <SiReacthookform size={iconSize} className="text-pink-500" />
  ),
  "React Table": <SiReacttable size={iconSize} className="text-rose-600" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  Laravel: <SiLaravel size={iconSize} className="text-red-600" />,
  "Node.js": <SiNodedotjs size={iconSize} className="text-green-500" />,
  "Express.js": <SiExpress size={iconSize} />,
  "Framer Motion": <SiFramer size={iconSize} />,
  Redux: <SiRedux size={iconSize} className="text-violet-500" />,
  PostgreSql: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  MySql: <SiMysql size={iconSize} className="text-blue-400" />,
  MongoDb: <SiMongodb size={iconSize} className="text-green-600" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Prisma: <SiPrisma size={iconSize} className="text-teal-500" />,
  Github: <SiGithub size={iconSize} />,
};
