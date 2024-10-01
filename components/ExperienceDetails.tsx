import { motion } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";

interface ExperienceDetailsProps {
  details: {
    title: string;
    company: string;
    date: string;
    descriptions?: string[];
  };
}

export default function ExperienceDetails({ details }: ExperienceDetailsProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
      <h3 className="flex flex-col lg:flex-row gap-1 font-medium text-xl font-titleFont">
        {details.title}
        <span className="text-textGreen tracking-wide">@{details.company}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">{details.date}</p>

      <ul className="mt-6 flex flex-col gap-3">
        {details.descriptions &&
          details.descriptions.map((desc, index) => (
            <li key={index} className="text-base flex gap-2 text-textDark">
              <span className="text-textGreen mt-1">
                <AiFillThunderbolt />
              </span>
              {desc}
            </li>
          ))}
      </ul>
    </motion.div>
  );
}
