import "./buttons.css";

function createBtn({ text, background, btnHref }) {
    const btn = document.createElement('button'); 
    btn.className = 'button';
    btn.textContent = text;
    btn.style.backgroundColor = background;


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
