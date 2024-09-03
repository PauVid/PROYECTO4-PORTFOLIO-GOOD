import "./buttons.css";

function createBtn({ text, background, btnHref }) {
    const btn = document.createElement('button'); 
    const btnAnchor = document.createElement('a');

    btn.style.backgroundColor = background;
    btn.textContent = text;
    btn.className = 'button';

    if (btnHref) {
        btn.addEventListener('click', () => {
            window.location.href = btnHref;
            
        });
    }

    return btn;
}

const Button = (data) => {
    return createBtn(data);
};

export default Button;
