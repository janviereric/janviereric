import "/assets/sass/exports.scss";
import janviereric from "/assets/images/janviereric.jpg";

export const header = () => {
  const headerContent = document.querySelector("header");
  headerContent.innerHTML = `
    <div id="container-header">
      <div class="container-logo">
        <div class="logo-image">
            <img src="${janviereric}" alt="Janvier Eric" />
        </div>
        <div class="logo-name">JanvierEric</div>
      </div>
      <ul id="container-menu">
        <li><i class="fa-solid fa-desktop icon-frontend"></i> FrontEnd </li>
        <li><i class="fa-solid fa-server icon-backend"></i> BackEnd </li>
        <li><i class="fa-solid fa-database icon-fullstack"></i> FullStack </li>
        <li><i class="fa-solid fa-envelope icon-contact"></i> Contact </li>
      </ul>
    </div>
  `;
};
