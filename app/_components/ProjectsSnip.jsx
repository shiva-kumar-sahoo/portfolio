import Project from "./Project";
import { projects } from "@/lib/projects";

export default function ProjectsSnip() {
  return (
    <div className="md:px-20 lg:px-32 px-5">
      <div className="flex flex-wrap mb-10 gap-5 items-center justify-center">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
