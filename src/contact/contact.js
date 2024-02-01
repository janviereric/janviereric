import "./contact.scss";
import { header, footer } from "../index.js";

header();
footer();

export const contact = () => {
  const main = document.querySelector("main");
  main.innerHTML = `<h1> Contact </h1>`;
};
