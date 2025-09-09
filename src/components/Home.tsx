import { Mail } from "lucide-react";
import img from "../assets/portrait_bw.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row justitfy-center items-center md:my-32 my-10" id="Home">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br /> je suis <span className="text-accent">Guillaume</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Développeur web fullstack, je suis passionné par la création de sites
          web et d'applications web. Contactez-moi si vous avez besoin de mes
          services.
        </p>
        <a href="" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="md:ml-10 lg:ml-10 xl:ml-50">
        <img
          src={img}
          alt=""
          className="w-64 md:w-96 md:h-60 object-cover border-8 border-accent shadow-xl portrait-shape rounded-full"
        />
      </div>
    </div>
  );
}
