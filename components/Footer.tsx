import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";
import { BiLogoDevTo } from "react-icons/bi";
import socials from "@/public/data/socials";

export default function Footer() {
  return (
    <div className="w-full flex flex-row  gap-4 text-textLight justify-center  xl:hidden py-5">
      <div className="flex flex-row gap-4 relative">
        {/* GitHub */}
        <a href={socials.github} target="_blank" className="relative group inline-flex items-center">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 group">
            <FiGithub />
            <span className="absolute left-full ml-2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GitHub
            </span>
          </span>
        </a>

        {/* Dev */}
        <a href={socials.dev} target="_blank" className="relative group inline-flex items-center">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 group">
            <BiLogoDevTo />
            <span className="absolute left-full ml-2 bg-black text-white text-xs rounded py-1 px-2 min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Dev Blog
            </span>
          </span>
        </a>

        {/* Blog */}
        <a href={socials.blog} target="_blank" className="relative group inline-flex items-center">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 group">
            <IoGlobeOutline />
            <span className="absolute left-full ml-2 bg-black text-white text-xs rounded py-1 px-2 min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Uni Notes
            </span>
          </span>
        </a>

        {/* LinkedIn */}
        <a href={socials.linkedin} target="_blank" className="relative group inline-flex items-center">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 group">
            <FiLinkedin />
            <span className="absolute left-full ml-2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              LinkedIn
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
