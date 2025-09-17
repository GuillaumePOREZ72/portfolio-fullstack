import Title from "./Title";
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgNEXT from "../assets/techno/next-js.webp";
import imgPRISMA from "../assets/techno/prisma.webp";
import imgMONGO from "../assets/techno/mongo.png";
import imgPYTHON from "../assets/techno/python.png";
import imgFASTAPI from "../assets/techno/Fastapi.png";
import imgDOCKER from "../assets/techno/docker.png";
import imgNEST from "../assets/techno/nestjs.png";
import imgPOSTGRES from "../assets/techno/postgres.png";

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Node.js", image: imgNODE },
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, name: "Typescript", image: imgTYPE },
  { id: 8, name: "Next.js", image: imgNEXT },
  { id: 9, name: "Prisma", image: imgPRISMA },
  { id: 10, name: "MongoDB", image: imgMONGO },
  { id: 11, name: "Python", image: imgPYTHON },
  { id: 12, name: "FastAPI", image: imgFASTAPI },
  { id: 13, name: "Docker", image: imgDOCKER },
  { id: 14, name: "NestJS", image: imgNEST },
  { id: 15, name: "PostgreSQL", image: imgPOSTGRES },
];

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Google",
    period: "Sep 2022 - Présent",
    description: [
      "Développement de nouvelles fonctionnalités pour Google Maps.",
      "Optimisation des performances de l'application.",
    ],
    image: google,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Meta",
    period: "Jan 2021 - Août 2022",
    description: [
      "Création d'une plateforme interne de collaboration pour les équipes.",
      "Mise en place d'une architecture scalable et optimisée.",
    ],
    image: meta,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Amazon",
    period: "Mai 2019 - Déc 2020",
    description: [
      "Développement d'une interface utilisateur pour Amazon Web Services.",
      "Implémentation des tests unitaires et E2E.",
    ],
    image: amazon,
  },
];

export default function Experiences() {
  return (
    <div id="Experiences">
      <Title title="Experiences" />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        {/* Section Skills avec layout responsive */}
        <div className="flex-shrink-0 mt-4 md:mt-0 flex justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 gap-4 justify-items-center max-w-xs md:max-w-xs lg:max-w-xs xl:max-w-sm 2xl:max-w-xs">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex justify-center items-center flex-col"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 p-2 rounded-full border-2 border-accent">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="object-cover rounded-full h-full w-full"
                  />
                </div>
                <span className="mt-2 text-xs md:text-sm text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Expériences */}
        <div className="flex-1 flex flex-col space-y-4 min-w-0">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="object-cover h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role}, {experience.company}
                  </h1>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2">
                {experience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
