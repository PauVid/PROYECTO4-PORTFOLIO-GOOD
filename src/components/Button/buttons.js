import "./buttons.css";

function createBtn({ text, background, btnHref, action }) {
    const btn = document.createElement('button');
    
    btn.style.backgroundColor = background;
    btn.textContent = text;
    btn.className = 'button';

    if (btnHref) {
        btn.addEventListener('click', () => {
            window.location.href = btnHref;
        });
    }

    if (action) {
        btn.addEventListener('click', (event) => {
            event.preventDefault(); 
            action(); 
        });
    }

    return btn;
}

const Button = (data) => {
    return createBtn(data);
};

export default Button;
