import "./home.scss";

import { header, footer } from "../index.js";

header();
footer();

export const home = () => {
  const main = document.querySelector("main");
  main.innerHTML = `<h1> Accueil </h1>`;
};
