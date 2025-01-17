// work images
import eapp from "../assets/eapp1.png";
import mapp from "../assets/mapp.png";

// skills images
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";

export const workFiles = () => {
  const workArray = [
    {
      title: "Ecommerce App",
      img: eapp,
      demo: "https://yurush-store.netlify.app/",
      code: "https://github.com/YureshMajhi/E-commerce-",
    },
    {
      title: "Movie Site",
      img: mapp,
      demo: "https://movie-streaming-platform.vercel.app/",
      code: "https://github.com/YureshMajhi/Movie-Streaming-Platform",
    },
  ];

  const skillArray = [
    {
      title: "React",
      img: react,
      alt: "React icon",
    },
    {
      title: "Javascript",
      img: javascript,
      alt: "javascript icon",
    },
    {
      title: "Github",
      img: github,
      alt: "github icon",
    },
    {
      title: "Tailwind CSS",
      img: tailwind,
      alt: "tailwind icon",
    },
    {
      title: "Node Js",
      img: nodejs,
      alt: "Node js icon",
    },
    {
      title: "Mongo DB",
      img: mongodb,
      alt: "mongo db icon",
    },
  ];

  return { workArray, skillArray };
};
