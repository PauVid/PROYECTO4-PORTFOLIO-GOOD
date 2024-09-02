import "./footer.css";

const template = () => {
    const app = document.querySelector("#app");

    const footerContainer = document.createElement("footer");

    const footerElements = document.createElement("div");
    footerElements.classList.add("footer_container")
    footerElements.innerHTML = `
    <a>FAQ</a>
    <a>Preguntas frecuentes</a>
    <a>Conóceme</a>
    <a>Contáctame</a>
    `;

    footerContainer.append(footerElements)
    app.append(footerContainer);
};

const Footer = () => {
    return template();
};

export default Footer;