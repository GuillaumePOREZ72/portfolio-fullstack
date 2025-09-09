import Title from "./Title";
import img from "../assets/portrait_officiel.png";
import { LetterText, CalendarSync, Code } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description:
      "Je suis un développeur frontend spécialisé dans le développement d'applications web et mobiles.",
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
      "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Développeur Fullstack",
    description:
      "J'ai une solide expérience en développement fullstack, ce qui me permet de concevoir des applications complètes.",
    icon: <Code className="text-accent scale-150" />,
  },
];

export default function About() {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="À propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img src={img} alt="" className="w-96 object-cover rounded-xl" />
        </div>
        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
              <div className="mb-2 md:mb-1">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
