import type { IconType } from "react-icons";
import {
  SiPython,
  SiPhp,
  SiNodedotjs,
  SiGo,
  SiRuby,
  SiOpenjdk,
  SiDotnet,
  SiRust,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiSass,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiSolidity,
  SiEthereum,
  SiWeb3Dotjs,
  SiDocker,
  SiKubernetes,
  SiCloudflare,
  SiVercel,
  SiGithubactions,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiFlutter,
  SiKotlin,
  SiSwift,
} from "react-icons/si";

export type TechCategory =
  | "Backend"
  | "Frontend"
  | "Database"
  | "Blockchain"
  | "DevOps"
  | "AI"
  | "Mobile";

export interface Tech {
  readonly name: string;
  readonly category: TechCategory;
  readonly Icon: IconType;
  readonly color: string;
}

const t = (name: string, category: TechCategory, Icon: IconType, color: string): Tech => ({
  name,
  category,
  Icon,
  color,
});

const PYTHON = t("Python", "Backend", SiPython, "#3776AB");
const PHP = t("PHP", "Backend", SiPhp, "#777BB4");
const NODE = t("Node.js", "Backend", SiNodedotjs, "#5FA04E");
const GO = t("Go", "Backend", SiGo, "#00ADD8");
const RUBY = t("Ruby", "Backend", SiRuby, "#CC342D");
const JAVA = t("Java", "Backend", SiOpenjdk, "#E76F00");
const CSHARP = t("C#", "Backend", SiDotnet, "#512BD4");
const RUST = t("Rust", "Backend", SiRust, "#DEA584");

const REACT = t("React", "Frontend", SiReact, "#61DAFB");
const NEXT = t("Next.js", "Frontend", SiNextdotjs, "#F5F0E8");
const VUE = t("Vue", "Frontend", SiVuedotjs, "#4FC08D");
const ANGULAR = t("Angular", "Frontend", SiAngular, "#DD0031");
const TAILWIND = t("Tailwind", "Frontend", SiTailwindcss, "#06B6D4");
const SASS = t("Sass", "Frontend", SiSass, "#CC6699");
const TS = t("TypeScript", "Frontend", SiTypescript, "#3178C6");
const JS = t("JavaScript", "Frontend", SiJavascript, "#F7DF1E");

const POSTGRES = t("PostgreSQL", "Database", SiPostgresql, "#4169E1");
const MONGO = t("MongoDB", "Database", SiMongodb, "#47A248");
const MYSQL = t("MySQL", "Database", SiMysql, "#4479A1");
const REDIS = t("Redis", "Database", SiRedis, "#FF4438");
const FIREBASE = t("Firebase", "Database", SiFirebase, "#FFCA28");
const SUPABASE = t("Supabase", "Database", SiSupabase, "#3ECF8E");

const SOLIDITY = t("Solidity", "Blockchain", SiSolidity, "#A9A9A9");
const WEB3 = t("Web3.js", "Blockchain", SiWeb3Dotjs, "#F16822");
const ETHERS = t("Ethers.js", "Blockchain", SiEthereum, "#8C8C8C");

const DOCKER = t("Docker", "DevOps", SiDocker, "#2496ED");
const K8S = t("Kubernetes", "DevOps", SiKubernetes, "#326CE5");
const CLOUDFLARE = t("Cloudflare", "DevOps", SiCloudflare, "#F38020");
const VERCEL = t("Vercel", "DevOps", SiVercel, "#F5F0E8");
const GH_ACTIONS = t("GitHub Actions", "DevOps", SiGithubactions, "#2088FF");

const OPENAI = t("OpenAI", "AI", SiOpenai, "#F5F0E8");
const TENSORFLOW = t("TensorFlow", "AI", SiTensorflow, "#FF6F00");
const PYTORCH = t("PyTorch", "AI", SiPytorch, "#EE4C2C");
const LANGCHAIN = t("LangChain", "AI", SiLangchain, "#1C3C3C");

const FLUTTER = t("Flutter", "Mobile", SiFlutter, "#02569B");
const RN = t("React Native", "Mobile", SiReact, "#61DAFB");
const KOTLIN = t("Kotlin", "Mobile", SiKotlin, "#7F52FF");
const SWIFT = t("Swift", "Mobile", SiSwift, "#F05138");

export const TECHNOLOGIES: readonly Tech[] = [
  PYTHON, PHP, NODE, GO, RUBY, JAVA, CSHARP, RUST,
  REACT, NEXT, VUE, ANGULAR, TAILWIND, SASS, TS, JS,
  POSTGRES, MONGO, MYSQL, REDIS, FIREBASE, SUPABASE,
  SOLIDITY, WEB3, ETHERS,
  DOCKER, K8S, CLOUDFLARE, VERCEL, GH_ACTIONS,
  OPENAI, TENSORFLOW, PYTORCH, LANGCHAIN,
  FLUTTER, RN, KOTLIN, SWIFT,
];

export const TECH_ROWS: readonly (readonly Tech[])[] = [
  [PYTHON, NEXT, POSTGRES, DOCKER, OPENAI, FLUTTER, SOLIDITY, TS, GO, SUPABASE],
  [REACT, NODE, MONGO, CLOUDFLARE, TENSORFLOW, RN, PHP, TAILWIND, REDIS, WEB3],
  [RUBY, VUE, MYSQL, VERCEL, PYTORCH, KOTLIN, JAVA, JS, FIREBASE, ETHERS],
  [CSHARP, ANGULAR, K8S, LANGCHAIN, SWIFT, RUST, SASS, GH_ACTIONS, POSTGRES, REACT],
];

export const TECH_SECTION = {
  eyebrow: "Talen & technologieën",
  titleLead: "De stack achter elke",
  titleEm: "ambitieuze build.",
  sub: "We werken met de juiste tools voor de klus — van productie-websites en mobiele apps tot blockchain en AI-systemen.",
} as const;
