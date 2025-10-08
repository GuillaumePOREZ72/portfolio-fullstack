import { Rocket, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div id="Footer">
      <footer className="footer footer-horizontal footer-center p-10">
        <aside>
          <Rocket className="h-10 w-10" />
          <p className="font-bold">
            GP
            <span className="text-accent">DEV</span>
          </p>
          <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/GuillaumePOREZ72"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(17, 194, 170,0.6),0_0_40px_rgba(17, 194, 170,0.4)] hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/guillaumeporez"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(17, 194, 170,0.6),0_0_40px_rgba(17, 194, 170,0.4)] hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/GuillaumePorez"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(17, 194, 170,0.6),0_0_40px_rgba(17, 194, 170,0.4)] hover:text-blue-400"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
