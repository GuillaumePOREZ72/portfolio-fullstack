import { Container } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" 
      className="flex items-center font-bold text-3xl md:text-xl">
        <Container className="mr-2" />
        GP
        <span className="text-accent">DEV</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#Home" 
          className="btn btn-sm btn-ghost">
            Accueil
          </a>
          <a href="#About" 
          className="btn btn-sm btn-ghost">
            À propos
          </a>
          <a href="#Experiences" 
          className="btn btn-sm btn-ghost">
            Mes expériences
          </a>
          <a href="#Projects" 
          className="btn btn-sm btn-ghost">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
}
