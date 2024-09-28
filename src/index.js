import './styles.css';
import {home as homePage} from './home.js';
import {menu as menuPage} from './menu.js';


(function addToDom () {
    const main = document.querySelector('#content');
    const homeButton = document.querySelector('.home-btn');
    const menuButton = document.querySelector('.menu-btn');

    homeButton.addEventListener('click', (e) => {
        main.innerHTML = '';
        main.appendChild(homePage.floatingCard);
        main.appendChild(homePage.homeContent);
        e.target.style.color = 'white';
        menuButton.style.color = 'coral';
    });

    menuButton.addEventListener('click', (e) => {
        main.innerHTML = '';
        main.appendChild(menuPage.menuContent);
        e.target.style.color = 'white';
        homeButton.style.color = 'coral';
    });





    homeButton.click();
})();