import './styles.css';
import {home as homePage} from './home.js';
import {menu as menuPage} from './menu.js';
import {contact as contactPage} from './contact.js';


(function addToDom () {
    const main = document.querySelector('#content');
    const homeButton = document.querySelector('.home-btn');
    const menuButton = document.querySelector('.menu-btn');
    const contactButton = document.querySelector('.contact-btn');

    homeButton.addEventListener('click', (e) => {
        main.innerHTML = '';
        main.appendChild(homePage.floatingCard);
        main.appendChild(homePage.homeContent);
        e.target.style.color = 'white';
        menuButton.style.color = 'coral';
        contactButton.style.color = 'coral';
    });

    menuButton.addEventListener('click', (e) => {
        main.innerHTML = '';
        main.appendChild(menuPage.menuContent);
        e.target.style.color = 'white';
        homeButton.style.color = 'coral';
        contactButton.style.color = 'coral';
    });

    contactButton.addEventListener('click', (e) => {
        main.innerHTML = '';
        main.appendChild(contactPage.contactContainer);
        e.target.style.color = 'white';
        homeButton.style.color = 'coral';
        menuButton.style.color = 'coral';
    })



    homeButton.click();
})();