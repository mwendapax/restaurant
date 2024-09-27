import {mkElem, mkElemC} from './fn.js';

const home = (function () {
    const floatingCard = mkElemC('div','floating-card');
    floatingCard.textContent = 'Mama\'s Cafe';

    const homeContent = mkElemC('div', 'home-content');

    const homeHead = mkElemC('div', 'home-head');
    const homeHeadHeader = mkElem('h6');
    homeHeadHeader.textContent = 'Mama\'s café breakfast bar';
    const homeHeadPara = mkElem('p');
    homeHeadPara.textContent = "At Mama's, breakfast isn't just a meal—it's an experience! The porridge here is a warm hug in a bowl, and the ambiance wraps around you like a cozy forest blanket. You can almost hear the leaves rustling as you savor each bite. It's like visiting an old friend—one who knows exactly how to make you feel at home.";

    homeHead.appendChild(homeHeadHeader);
    homeHead.appendChild(homeHeadPara);
    homeContent.appendChild(homeHead);

    const homeIntro = mkElemC('div', 'home-intro');
    const homeIntroHeader = mkElem('h6');
    homeIntroHeader.textContent = 'About Us';
    const homeIntroPara = mkElem('p');
    homeIntroPara.textContent = "Nestled in the heart of Forestville, Mama's Café Breakfast Bar invites you to indulge in the ultimate breakfast experience. Our porridge, made from the finest oats and topped with seasonal berries and a drizzle of honey, is beloved by all who venture in. Our cozy woodland decor, complete with twinkling fairy lights and rustic wooden tables, sets the perfect scene for a delightful morning.";
    
    homeIntro.appendChild(homeIntroHeader);
    homeIntro.appendChild(homeIntroPara);
    homeContent.appendChild(homeIntro);

    const homeHours = mkElemC('div', 'home-hours');
    const homeHoursHeader = mkElem('h6');
    homeHoursHeader.textContent = 'Hours';
    const homeHoursList = mkElem('ul');
    let homehrsLs1,homehrsLs2,homehrsLs3,homehrsLs4,homehrsLs5,homehrsLs6,homehrsLs7;
    homehrsLs1 = mkElem('li');
    homehrsLs2 = mkElem('li');
    homehrsLs3 = mkElem('li');
    homehrsLs4 = mkElem('li');
    homehrsLs5 = mkElem('li');
    homehrsLs6 = mkElem('li');
    homehrsLs7 = mkElem('li');
    homehrsLs1.textContent = "Sunday: 8am - 8pm";
    homehrsLs2.textContent = "Monday: 6am - 6pm";
    homehrsLs3.textContent = "Tuesday: 6am - 6pm";
    homehrsLs4.textContent = "Wednesday: 6am - 6pm";
    homehrsLs5.textContent = "Thursday: 6am - 10pm";
    homehrsLs6.textContent = "Friday: 6am - 10pm";
    homehrsLs7.textContent = "Saturday: 8am - 10pm";

    homeHoursList.appendChild(homehrsLs1);
    homeHoursList.appendChild(homehrsLs2);
    homeHoursList.appendChild(homehrsLs3);
    homeHoursList.appendChild(homehrsLs4);
    homeHoursList.appendChild(homehrsLs5);
    homeHoursList.appendChild(homehrsLs6);
    homeHoursList.appendChild(homehrsLs7);

    homeHours.appendChild(homeHoursHeader);
    homeHours.appendChild(homeHoursList);

    const homeLocation = mkElemC('div', 'home-location');
    const homeLocationHeader = mkElem('h6');
    homeLocationHeader.textContent = 'Location';
    const homeLocationPara = mkElem('p');
    homeLocationPara.textContent = '123 Forest Drive, Forestville, Maine';

    homeLocation.appendChild(homeLocationHeader);
    homeLocation.appendChild(homeLocationPara);

    homeContent.appendChild(homeHead);
    homeContent.appendChild(homeIntro);
    homeContent.appendChild(homeHours);
    homeContent.appendChild(homeLocation);

    return {floatingCard, homeContent};


})();

export {home};
