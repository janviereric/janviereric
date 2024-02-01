import "./body.scss";
import {
  header,
  footer,
  home,
  frontend,
  backend,
  fullstack,
  contact,
} from "../index.js";

const pages = () => {
  if (location.pathname === "/") {
    home();
  } else if (location.pathname === "/frontend") {
    frontend();
  } else if (location.pathname === "/backend") {
    backend();
  } else if (location.pathname === "/fullstack") {
    fullstack();
  } else if (location.pathname === "/contact") {
    contact();
  }
};

export const body = () => {
  header();
  pages();
  footer();
};

body();
