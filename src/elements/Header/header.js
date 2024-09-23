import { LoadAboutMeContent } from "../PorfolioContent/conoceme";
import "./header.css";

const layout = () => {
    const page = document.querySelector("#app");

    if (!page) {
        console.error("No se encontró el elemento #app en el DOM");
        return;
    }

    const divPage = document.createElement("header");
    divPage.className = "header__diversion";


    const logoHeader = document.createElement("a");
    logoHeader.href = "/index.html"; 
    const logoImg = document.createElement("img");
    logoImg.className = "header__logo";
    logoImg.src = "/assets/paulogo.svg";
    logoImg.alt = "Logo";
    logoHeader.appendChild(logoImg);


    const divMenuHeader = document.createElement("div");
    divMenuHeader.className = "icons__diversion";

    const links = [
        { className: "menu_home", href: "/index.html", text: "Home" },
        { className: "menu_portfolio", href: "#", text: "Portfolio" },
        { className: "menu_about", href: "#", text: "About me" }
    ];

    links.forEach(link => {
        const menuLink = document.createElement("a");
        menuLink.className = link.className;
        menuLink.href = link.href;
        menuLink.textContent = link.text;

        if (link.className === "menu_portfolio") {
            menuLink.addEventListener("click", (event) => {
                event.preventDefault();
                LoadAboutMeContent();  
            });
        } else if (link.className === "menu_about") {
            menuLink.addEventListener("click", (event) => {
                event.preventDefault(); 
                LoadAboutMeContent();  
            });
        }

        divMenuHeader.appendChild(menuLink);
    });

    divPage.append(logoHeader, divMenuHeader);
    page.appendChild(divPage);
};

const Header = () => {
    return layout();
};

export default Header;
