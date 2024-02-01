import "./fullstack.scss";
import { header, footer } from "../index.js";

header();
footer();

export const fullstack = () => {
  const main = document.querySelector("main");
  main.innerHTML = `<h1> FullStack </h1>`;
};
