import Title from "./Title";

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import { Github, Video } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Gestionnaire de tâches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "Plateforme E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["Next.js", "TypeScript", "Prisma"],
    demoLink: "#",
    repoLink: "#",
    image: img2,
  },
  {
    id: 3,
    title: "Portfolio interactif",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    repoLink: "#",
    image: img3,
  },
  {
    id: 4,
    title: "Application de Chat en temps réel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur",
    technologies: ["React", "Socket.io", "Express.js"],
    demoLink: "#",
    repoLink: "#",
    image: img4,
  },
];

export default function Projects() {
  return (
    <div className="mt-10" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 rounded-xl shadow-lg flex flex-col h-full"
          >
            <img 
              className="w-full h-56 object-cover rounded-xl"
              src={project.image} 
              alt={project.title} 
              />
              <div className="flex-1 flex flex-col">
                <h1 className="my-2 font-bold">{project.title}</h1>
                <p className="text-sm flex-1">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 my-3">
                {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-accent badge-sm">
                        {tech}
                    </span>
                ))
                }
              </div>
              <div className="flex mt-auto">
                <a href={project.demoLink} className="btn btn-accent w-2/3">
                    Demo
                    <Video className="w-4" />
                </a>
                <a href={project.repoLink} className="btn btn-neutral w-1/3 ml-2">
                    <Github className="w-4" />
                </a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
