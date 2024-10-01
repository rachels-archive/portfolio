import socials from "@/public/data/socials";

export default function Contact() {
  return (
    <div
      id="contact"
      className="max-w-containerSmall mx-auto px-4 py-10 lgl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFonttext-lg text-textGreen font-semibold flex items-center tracking-wide ">
        04. What's next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Thank you for exploring my portfolio! If you liked what you saw and want to discuss job opportunities, feel free
        to connect with me on LinkedIn and discuss!
      </p>
      <a href={`mailto:${socials.email}`}>
        <button className="border-2 border-textGreen rounded-lg py-3 px-5 text-textGreen hover:bg-hoverColor">
          Let's Connect!
        </button>
      </a>
    </div>
  );
}
