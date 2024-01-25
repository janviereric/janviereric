import logo from "/assets/images/logo.jpg";

export const header = () => {
  const headerContent = document.querySelector("header");
  headerContent.innerHTML = `
    <div id="container-header">
      <div class="container-logo">
        <div class="logo-image">
            <img src="${logo}" alt="Janvier Eric" />
        </div>
        <div class="logo-name"><span class="text-menu">JanvierEric</span></div>
      </div>
      <ul id="container-menu">
        <li><i class="fa-solid fa-desktop icon-frontend"></i><span class="text-menu"> FrontEnd </span></li>
        <li><i class="fa-solid fa-server icon-backend"></i><span class="text-menu"> BackEnd </span></li>
        <li><i class="fa-solid fa-database icon-fullstack"></i><span class="text-menu"> FullStack </span></li>
        <li><i class="fa-solid fa-envelope icon-contact"></i><span class="text-menu"> Contact </span></li>
      </ul>
    </div>
  `;
};
