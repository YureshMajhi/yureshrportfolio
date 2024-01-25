// work images
import form from "../assets/Form.png";
import youtube from "../assets/Youtube.png";
import card from "../assets/card.png";
import todoList from "../assets/todo-list.png";
import game from "../assets/RockPaperScissor.png";
import library from "../assets/library.png";

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
      title: "Form",
      img: form,
      demo: "https://yureshmajhi.github.io/HTML-CSS-Form/code.html",
      code: "https://github.com/YureshMajhi/HTML-CSS-Form",
    },
    {
      title: "Youtube",
      img: youtube,
      demo: "https://yureshmajhi.github.io/File/test.html",
      code: "https://github.com/YureshMajhi/File",
    },
    {
      title: "Card",
      img: card,
      demo: "https://yureshmajhi.github.io/Invisible-Card/invisiblecard.html",
      code: "https://github.com/YureshMajhi/Invisible-Card",
    },
    {
      title: "Todo List",
      img: todoList,
      demo: "https://yureshmajhi.github.io/todoList/dist/index.html",
      code: "https://github.com/YureshMajhi/todoList",
    },
    {
      title: "Rock Paper Scissor",
      img: game,
      demo: "https://yureshmajhi.github.io/Rock-Paper-Scissors/code.html",
      code: "https://github.com/YureshMajhi/Rock-Paper-Scissors",
    },
    {
      title: "Library",
      img: library,
      demo: "https://yureshmajhi.github.io/odin-project-library",
      code: "https://github.com/YureshMajhi/odin-project-library",
    },
    {
      title: "Library",
      img: library,
      demo: "https://yureshmajhi.github.io/odin-project-library",
      code: "https://github.com/YureshMajhi/odin-project-library",
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
