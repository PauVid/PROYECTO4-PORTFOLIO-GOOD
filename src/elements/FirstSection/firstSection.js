import Card from '../../components/Card/cards';
import "./firstSection.css";

const layout = () => {
    const page = document.querySelector("#app"); 
    const section = document.createElement("section"); 
    section.className = "first-section"; 

    const cardContainerText = document.createElement("h2");
    cardContainerText.innerText = "My Latest Projects"

    const cardContainer = document.createElement('div');
    cardContainer.id = 'cards-container'; 

    const cardsData = [
        { title: 'Proyecto 1', description: 'Este es el último proyecto en el que he participado', imageUrl: 'assets/imgs/section1_1.jpg' },
        { title: 'Proyecto 2', description: 'Este es el penúltimo proyecto en el que he participado', imageUrl: 'assets/imgs/section1_2.jpg' },
        { title: 'Proyecto 3', description: 'Este es el ante-penúltimo proyecto en el que he participado', imageUrl: 'assets/imgs/section1_3.jpg' },
    ];

    cardsData.forEach(cardData => {
        const card = Card(cardData); 
        cardContainer.appendChild(card); 
    });

    section.append(cardContainerText)
    section.appendChild(cardContainer); 
    page.appendChild(section); 
}

const FirstSection = () => {
    return layout();
};

export default FirstSection;
