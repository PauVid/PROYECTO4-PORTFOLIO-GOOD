import Button from "../../components/Button/buttons";
import "./hero.css";


const layout = () => {
    const page = document.querySelector("#app");

    const heroSection = document.createElement("section");
    heroSection.classList.add("hero_section");
    const heroImg = document.createElement("img");
    heroImg.classList.add("hero_image");
    heroImg.src = "assets/imgs/section2_1.jpg";


    heroSection.append(heroImg);
    page.append(heroSection);

    const btnData = [
      { text: 'Conóceme', background: '#f2f2f2', btnHref: '#' },
    ];
    
    const heroCta = document.createElement("div");
    heroCta.classList.add("cta");
    heroCta.innerHTML = `
      <h1 class="cta-text">¡Hola! Soy Pau Vidal 👨‍💻</h1>
      
    `
    btnData.forEach(btnData => {
      const btn = Button(btnData); 
      heroCta.appendChild(btn); 
    });


    heroSection.append(heroCta)
}


const Hero = () => {
    return layout();
};

export default Hero;