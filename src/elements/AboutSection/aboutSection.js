
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
        <p>Hola, soy un diseñador gráfico apasionado por transformar ideas en experiencias visuales impactantes. Desde que empecé mi carrera, he tenido el privilegio de colaborar con diversos clientes y equipos, creando soluciones creativas que no solo destacan, sino que también comunican mensajes de manera efectiva.
Mi enfoque en el diseño se basa en la comprensión profunda de las necesidades del cliente y el mercado. Me encanta explorar diferentes estilos y técnicas para ofrecer soluciones visuales únicas que capturan la esencia de cada proyecto. Mi experiencia abarca desde la creación de identidades visuales y diseño de interfaces hasta la producción de materiales gráficos para campañas publicitarias.
Siempre estoy en busca de nuevos retos y oportunidades para aprender y crecer en este dinámico campo. Mi objetivo es combinar creatividad con funcionalidad, asegurando que cada diseño no solo sea estéticamente atractivo, sino también efectivo en su propósito.
Gracias por visitar mi portafolio. Si tienes algún proyecto en mente o simplemente quieres conectar, no dudes en ponerte en contacto conmigo.</p>
    `

    sectionContainer.append(image_container, text_container)
    page.append(sectionContainer);
}

const AboutMe = () => {
    return layout();
};

export default AboutMe;
