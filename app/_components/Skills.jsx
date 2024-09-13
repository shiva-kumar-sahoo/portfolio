import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";
import {
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { DiNodejs, DiMongodb } from "react-icons/di";

export default function Skills() {
  return (
    <div className="py-10 -mt-5 mb-10 px-5">
      <div className="flex gap-3 flex-wrap items-center justify-center rounded-md max-w-3xl mx-auto">
        <div
          title="Node.js"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <DiNodejs className="h-10 w-10" />
        </div>
        <div
          title="JavaScript"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <SiJavascript className="h-10 w-10" />
        </div>
        <div
          title="React"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <FaReact className="h-10 w-10" />
        </div>
        <div
          title="Next.js"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <TbBrandNextjs className="h-10 w-10" />
        </div>
        <div
          title="React Native"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <TbBrandReactNative className="h-10 w-10" />
        </div>
        <div
          title="Tailwind CSS"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <SiTailwindcss className="h-10 w-10" />
        </div>
        <div
          title="Bootstrap"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <FaBootstrap className="h-10 w-10" />
        </div>
        <div
          title="MongoDB"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <DiMongodb className="h-10 w-10" />
        </div>
        <div
          title="MySQL"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <SiMysql className="h-10 w-10" />
        </div>
        <div
          title="Java"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <FaJava className="h-10 w-10" />
        </div>
        <div
          title="Python"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <FaPython className="h-10 w-10" />
        </div>
        <div
          title="Git"
          className="h-24 w-24 grid place-items-center rounded-md border active:bg-secondary md:hover:bg-secondary transition cursor-pointer hover:scale-95"
        >
          <FaGitAlt className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}
