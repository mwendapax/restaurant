import './styles.css';
import {home as homePage} from './home.js';


(function addToDom () {
    const main = document.querySelector('#content');
    const homeButton = document.querySelector('.home-btn');

    homeButton.addEventListener('click', (e) => {
        main.appendChild(homePage.floatingCard);
        main.appendChild(homePage.homeContent);
        e.target.style.color = 'white';
    });

    homeButton.click();
})();