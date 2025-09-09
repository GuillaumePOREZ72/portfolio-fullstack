import { Container, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center p-10">
        <aside>
          <Container className="h-10 w-10" />
          <p className="font-bold">
            GP
            <span className="text-accent">DEV</span>
          </p>
          <p>
            Copyright © {new Date().getFullYear()} - Tous droits sont réservés
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-current" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-current" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-current" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
