import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import projects from "@/public/data/projects";

export default function ArchiveCard() {
  const archivedProjects = projects.filter((project) => project.type === "archived");

  return (
    <>
      {archivedProjects.map((project, index) => (
        <div
          className="w-full h-auto rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group"
          key={index}
        >
          <div className="relative">
            <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
              {project.title}
            </h2>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-textGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </div>
          <div>
            <p className="text-md">{project.description}</p>
            <ul className="text-sm font-semibold text-textDark flex flex-wrap gap-3  mt-3">
              {project.technologies.map((tech, index) => (
                <li key={index} className="flex gap-1">
                  <FaStar />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex flex-row gap-4 justify-between bottom-0">
              <a
                href={project.projectUrl}
                className="text-sm flex items-center gap-2 hover:text-textGreen relative whitespace-nowrap"
                target="_blank"
              >
                <span className=" flex items-center">
                  <FaGithub />
                </span>
                <span>View Code</span>
              </a>
              <a
                href={project.githubUrl}
                className="text-sm flex items-center gap-2 hover:text-textGreen relative whitespace-nowrap"
                target="_blank"
              >
                <span className="flex items-center">
                  <LuExternalLink />
                </span>
                <span>View Project</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
