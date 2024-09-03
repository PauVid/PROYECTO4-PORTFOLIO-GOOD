import data from "../../../data/data";
import "./aboutExp.css";

const layout = () => {
    
    const page = document.querySelector("#app"); 

    const sectionExp = document.createElement("div");
    sectionExp.classList.add("exp_container");
    sectionExp.innerHTML = `
    <h2 class="exp_container_title">Experiencia Laboral</h2>
    <div class="second_exp">
        <h3>${data.workExperience[1].position}</h3>
        <div class="work_exp">
            <p>Empresa: ${data.workExperience[1].company}</p>
            <p>Fecha inicio: ${data.workExperience[1].startDate}</p>
            <p>Fecha finalización: ${data.workExperience[1].endDate}</p>
            <p>Descripción: ${data.workExperience[1].description}</p>
        </div>
    </div>
    <div class="first_exp">
        <h3>${data.workExperience[0].position}</h3>
        <div class="work_exp">
            <p>Empresa: ${data.workExperience[0].company}</p>
            <p>Fecha inicio: ${data.workExperience[0].startDate}</p>
            <p>Fecha finalización: ${data.workExperience[0].endDate}</p>
            <p>Descripción: ${data.workExperience[0].description}</p>
        </div>
    </div>

    `

    page.append(sectionExp);
}

const AboutExp = () => {
    return layout();
};

export default AboutExp;
