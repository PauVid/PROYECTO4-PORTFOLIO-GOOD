
import AboutExp from '../AboutExp/aboutExp';
import AboutMe from '../AboutSection/aboutSection';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import './conoceme.css';

export const LoadAboutMeContent = () => {
    const page = document.querySelector("#app");

    page.innerHTML = '';

    Header();  

    AboutMe();  

    AboutExp();  

    Footer();  
};

