
import "./aboutSection.css";

const layout = () => {
    const page = document.querySelector("#app"); 

    const sectionContainer = document.createElement("div");
    sectionContainer.id = "aboutMe_container"

    const image_container = document.createElement("div");
    image_container.classList.add("aboutMe_image_container");
    const aboutImg = document.createElement("img");
    aboutImg.src = "../assets/imgs/section3_1.jpg"
    image_container.append(aboutImg)

    const text_container = document.createElement("div");
    text_container.classList.add("aboutMe_text_container");
    text_container.innerHTML = `
        <h2>Conóceme más</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `

    sectionContainer.append(image_container, text_container)
    page.append(sectionContainer);
}

const AboutMe = () => {
    return layout();
};

export default AboutMe;
