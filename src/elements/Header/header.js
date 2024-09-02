import "./header.css";

const layout = () => {
    const page = document.querySelector("#app");
    const divPage = document.createElement("header");
    divPage.className = "header__diversion";

    const logoHeader = document.createElement("img");
    logoHeader.className = "header__logo";
    logoHeader.src = "./assets/paulogo.svg"
    logoHeader.href = "./index.html";

    const divMenuHeader = document.createElement("div");
    divMenuHeader.className = "icons__diversion";

    const menuHome = document.createElement("a");
    menuHome.className = "menu_home";
    menuHome.href = "./index.html";
    menuHome.textContent = "Home";

    const menuPortfolio = document.createElement("a");
    menuPortfolio.className = "menu_portfolio";
    menuPortfolio.textContent = "Portfolio";

    const menuGallery = document.createElement("a");
    menuGallery.className = "menu_gallery";
    menuGallery.href = "/pageGallery.html";
    menuGallery.textContent = "Gallery";
  
  
    divMenuHeader.append(menuHome);
    divMenuHeader.append(menuPortfolio);
    divMenuHeader.append(menuGallery);
  
    divPage.append(logoHeader);
    divPage.append(divMenuHeader);
    page.append(divPage);
  
  
  
  
};


const Header = () => {
    return layout();
};

export default Header;