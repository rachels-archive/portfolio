import Image from "next/image";
import SectionTitle from "./sectionTitle";
import { FaCode } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className=" h-screen max-w-containerSmall mx-auto px-4 py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title={"About Me"} sectionNum="01." />

      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi, my name is Rachel. My interest in programming began during the pandemic when I sought new ways to ease
            my boredom. I started learning how to code and secured my first internship without any formal education in
            this field—an achievement I am particularly proud of.
          </p>

          <p>
            Fast forward to today, I am pursuing a degree in Software Engineering while gaining valuable work experience
            in web development and participating in hackathons. These experiences has deepened my understanding and
            allowed me to apply my skills in real-world scenarios.
          </p>

          <p>
            My dream is to work remotely, as I cherish being close to my family. I am excited about the opportunities
            ahead and look forward to contributing to projects that make a difference, while enjoying activities like
            working out, reading and playing the guitar.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] font-titleFont grid grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              Angular
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              Django
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaCode />
              </span>
              Firebase
            </li>
          </ul>
        </div>
        <div className="hidden lgl:flex flex-col justify-end">
          <Image src="/images/illustration.png" alt="illustration" width={300} height={400} />
        </div>
      </div>
    </section>
  );
}
