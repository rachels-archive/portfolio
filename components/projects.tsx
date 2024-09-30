import Image from "next/image";
import SectionTitle from "./sectionTitle";
import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import projects from "@/public/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.type === "featured");

  return (
    <section id="projects" className="max-w-containerSmall mx-auto py-10 lgl:py-32 px-4">
      <SectionTitle title={"Some Things I have Built"} sectionNum={"03."} />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col xl:flex-row gap-6 ${index % 2 !== 0 ? "xl:flex-row-reverse" : ""}`}
          >
            <a className="w-full h-auto relative group" href={project.projectUrl} target="_blank">
              <div className="relative w-full h-auto group">
                <Image
                  src={project.imageUrl}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">Try it out!</p>
                </div>
              </div>
            </a>

            <div
              className={`w-full flex flex-col gap-6 ${
                index % 2 !== 0
                  ? "justify-start items-start xl:-mr-16 text-start"
                  : "justify-end items-end xl:-ml-16 text-right"
              }  z-10`}
            >
              <p className="text-2xl text-textGreen">Featured Project</p>
              <h1 className="text-2xl font-bold">{project.title}</h1>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">{project.description}</p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 jusstify-between text-textDark">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="text-lg flex gap-4">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 hover:text-textGreen relative group"
                  target="_blank"
                >
                  <span className="flex items-center">
                    <FaGithub />
                  </span>
                  <span>View Code</span>
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-textGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a
                  href={project.projectUrl}
                  className="flex items-center gap-2 hover:text-textGreen relative group"
                  target="_blank"
                >
                  <span className="flex items-center">
                    <LuExternalLink />
                  </span>
                  <span>View Project</span>
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-textGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
