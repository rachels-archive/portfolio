import { useState } from "react";
import ExperienceDetails from "./ExperienceDetails";
import SectionTitle from "./sectionTitle";
import experiences from "@/public/experience.json";

export default function Experience() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  return (
    <section id="experience" className="max-w-containerSmall mx-auto py-10 lgl:py32 px-4">
      <div>
        <SectionTitle title={"My Work Experience"} sectionNum={"02."} />

        <div className="w-full mt-10 flex flex-col md:flex-row gap-8">
          <ul className="md:w-64 flex flex-col">
            {experiences.map((item, index) => (
              <li
                key={index}
                className={`border-l-2 border-l-hoverColor hover:border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 ${
                  selectedJobIndex === index ? "text-textGreen" : ""
                }`}
                onClick={() => setSelectedJobIndex(index)}
              >
                {item.title}
              </li>
            ))}
          </ul>

          <ExperienceDetails details={experiences[selectedJobIndex]} />
        </div>
      </div>
    </section>
  );
}
