import Title from "./Title";
import img from "../assets/portrait_officiel.png";
import { LetterText, CalendarSync, Code, Play } from "lucide-react";
import VideoModal from "./VideoModal";
import { useState } from "react";

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
  const videoId = "bef9e712dd7642b4991ba530025fbf07";
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="À propos" />
      <div className="md:h-screen flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex flex-col items-center gap-4 md:mr-6">
          <img
            src={img}
            alt="Portrait"
            className="w-56 md:w-72 object-cover rounded-xl hidden md:block"
          />
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setOpenVideo(true)}
                className="btn btn-accent btn-sm rounded-full group"
              >
                <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
                Voir la vidéo de présentation
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-1">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        videoId={videoId}
        title="Présentation"
      />
    </div>
  );
}
