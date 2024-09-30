import { FaGithub } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

export default function ArchiveCard() {
  return (
    <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="relative">
        <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">Title</h2>
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-textGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </div>
      <div>
        <p className="text-md "> Description</p>
        <ul className="text-sm font-semibold text-textDark flex flex-row gap-8 xl:gap-5 mt-3">
          <li className="flex gap-1">
            <FaStar />
            ReactJS
          </li>
        </ul>
      </div>
      <div>
        <div className="text-sm flex flex-row gap-4 justify-between px-12">
          <a
            href=""
            className="flex items-center gap-2 hover:text-textGreen hover:border-textGreen relative border rounded-lg p-3"
          >
            <span className="flex items-center">
              <FaGithub />
            </span>
            <span>View Code</span>
          </a>
          <a
            href=""
            className="flex items-center gap-2 hover:text-textGreen hover:border-textGreen relative border rounded-lg p-3"
          >
            <span className="flex items-center">
              <LuExternalLink />
            </span>
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
}
