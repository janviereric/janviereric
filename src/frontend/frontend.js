import "./frontend.scss";
import { header, footer } from "../index.js";

header();
footer();

export const frontend = () => {
  const main = document.querySelector("main");
  main.innerHTML = `<h1> FrontEnd </h1>`;
};
