import "./backend.scss";
import { header, footer } from "../index.js";

header();
footer();

export const backend = () => {
  const main = document.querySelector("main");
  main.innerHTML = `<h1> BackEnd </h1>`;
};
