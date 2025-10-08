import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a
        href="#Footer"
        className="flex items-center font-bold text-3xl md:text-xl"
      >
        <Rocket className="mr-2" />
        GP
        <span className="text-accent">DEV</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost rounded-full">
            Accueil
          </a>
          <a href="#About" className="btn btn-sm btn-ghost rounded-full">
            À propos
          </a>
          <a href="#Experiences" className="btn btn-sm btn-ghost rounded-full">
            Mes expériences
          </a>
          <a href="#Projects" className="btn btn-sm btn-ghost rounded-full">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
}
