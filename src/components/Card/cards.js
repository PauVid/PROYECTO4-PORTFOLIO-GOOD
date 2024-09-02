import "./cards.css";

function createCard({ title, description, imageUrl }) {
    const card = document.createElement('div');
    card.className = 'card';

    const cardImg = document.createElement('div');
    cardImg.classList.add("image_container");

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;

    const cardContent = document.createElement('div');
    cardContent.classList.add("text_container");

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    cardImg.append(img);
    cardContent.append(cardTitle, cardDescription)
    card.append(cardImg, cardContent);

    return card;
}

const Card = (data) => {
    return createCard(data);
};

export default Card;
