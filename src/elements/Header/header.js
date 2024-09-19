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

    // Logo clicable
    const logoHeader = document.createElement("a");
    logoHeader.href = "/index.html"; // Redirige al home
    const logoImg = document.createElement("img");
    logoImg.className = "header__logo";
    logoImg.src = "/assets/paulogo.svg";
    logoImg.alt = "Logo";
    logoHeader.appendChild(logoImg);

    // Contenedor del menú
    const divMenuHeader = document.createElement("div");
    divMenuHeader.className = "icons__diversion";

    const links = [
        { className: "menu_home", href: "/index.html", text: "Home" },
        { className: "menu_portfolio", href: "#", text: "Portfolio" },
        { className: "menu_about", href: "#", text: "About me" }
    ];

    // Iteramos sobre los links y creamos los elementos de ancla
    links.forEach(link => {
        const menuLink = document.createElement("a");
        menuLink.className = link.className;
        menuLink.href = link.href;
        menuLink.textContent = link.text;

        // Eventos para cargar contenido dinámico
        if (link.className === "menu_portfolio") {
            menuLink.addEventListener("click", (event) => {
                event.preventDefault(); // Evitar redirección
                LoadPortfolioContent();  // Llamamos a la función que carga el Portfolio
            });
        } else if (link.className === "menu_about") {
            menuLink.addEventListener("click", (event) => {
                event.preventDefault(); // Evitar redirección
                LoadAboutMeContent();  // Llamamos a la función que carga "Acerca de mí"
            });
        }

        divMenuHeader.appendChild(menuLink);
    });

    // Añadimos el logo y el menú al contenedor del header
    divPage.append(logoHeader, divMenuHeader);
    page.appendChild(divPage);
};

// Exportamos el componente Header
const Header = () => {
    return layout();
};

export default Header;
