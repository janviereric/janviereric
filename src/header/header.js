import "./header.scss";
import logo from "/assets/images/logo.jpg";

export const header = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
    <div id="container-header">
      <div id="button-home">
        <div class="logo-image">
            <img src="${logo}" alt="Janvier Eric" />
        </div>
        <div class="logo-name"><span class="text-menu">JanvierEric</span></div>
      </div>
      <ul id="container-menu">
        <li id="button-frontend"><i class="fa-solid fa-desktop icon-frontend"></i><span class="text-menu"> FrontEnd </span></li>
        <li id="button-backend"><i class="fa-solid fa-server icon-backend"></i><span class="text-menu"> BackEnd </span></li>
        <li id="button-fullstack"><i class="fa-solid fa-database icon-fullstack"></i><span class="text-menu"> FullStack </span></li>
        <li id="button-contact"><i class="fa-solid fa-envelope icon-contact"></i><span class="text-menu"> Contact </span></li>
      </ul>
    </div>
  `;

  const buttonHome = header.querySelector("#button-home");
  const buttonFrontend = header.querySelector("#button-frontend");
  const buttonBackend = header.querySelector("#button-backend");
  const buttonFullstack = header.querySelector("#button-fullstack");
  const buttonContact = header.querySelector("#button-contact");

  buttonHome.addEventListener("click", (event) => {
    event.stopPropagation();
    location.assign("./");
  });

  buttonFrontend.addEventListener("click", (event) => {
    event.stopPropagation();
    location.assign("./frontend");
  });

  buttonBackend.addEventListener("click", (event) => {
    event.stopPropagation();
    location.assign("./backend");
  });

  buttonFullstack.addEventListener("click", (event) => {
    event.stopPropagation();
    location.assign("./fullstack");
  });

  buttonContact.addEventListener("click", (event) => {
    event.stopPropagation();
    location.assign("./contact");
  });
};
