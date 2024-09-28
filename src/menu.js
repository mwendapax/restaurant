import {mkElem, mkElemC} from './fn.js';

const menu = (function (){
    const menuContent = mkElemC('div', 'menu-content');
  
    const beverages = mkElemC('div','beverages');

    const menuHeaderOne = mkElemC('div','menu-header-one');
    menuHeaderOne.textContent = 'Beverages';

    beverages.appendChild(menuHeaderOne);

      // first card

    const menuCards = mkElemC('div', 'menu-cards');

    const menuCard = mkElemC('div', 'menu-card');

    const menuCardContent = mkElemC('div', 'menu-card-content');
    const menuCardContentHeader = mkElem('h6');
    menuCardContentHeader.textContent = 'Honey Tea';

    const menuCardContentPara = mkElem('p');
    menuCardContentPara.textContent = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";


    menuCardContent.appendChild(menuCardContentHeader);
    menuCardContent.appendChild(menuCardContentPara);

    menuCard.appendChild(menuCardContent);

    const menuCardPrice = mkElemC('div', 'menu-card-price');
    const menuCardPriceHeader = mkElem('h6');
    menuCardPriceHeader.textContent = '$2';

    menuCardPrice.appendChild(menuCardPriceHeader);
    menuCard.appendChild(menuCardPrice);

    // Second card

    const menuCardTwo = mkElemC('div', 'menu-card');

    const menuCardTwoContent = mkElemC('div', 'menu-card-content');
    const menuCardTwoContentHead = mkElem('h6');
    menuCardTwoContentHead.textContent = 'Beary Tea';
    const menuCardTwoContentPara = mkElem('p');
    menuCardTwoContentPara.textContent = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";

    menuCardTwoContent.appendChild(menuCardTwoContentHead);
    menuCardTwoContent.appendChild(menuCardTwoContentPara);

    menuCardTwo.appendChild(menuCardTwoContent);

    const menuCardTwoPrice = mkElemC('div','menu-card-price');
    const menuCardTwoPriceHead = mkElem('h6');
    menuCardTwoPriceHead.textContent = '$3';

    menuCardTwoPrice.appendChild(menuCardTwoPriceHead);
    menuCardTwo.appendChild(menuCardTwoPrice);

    menuCards.appendChild(menuCard);
    menuCards.appendChild(menuCardTwo);

    beverages.appendChild(menuCards);
    menuContent.appendChild(beverages);

    //Third card

    const sides = mkElemC('div', 'sides');

    const menuHeaderTwo = mkElemC('div','menu-header-two');
    menuHeaderTwo.textContent = 'Sides';

    sides.appendChild(menuHeaderTwo);

    const menuCardsTwo = mkElemC('div','menu-cards');
    
    const menuCardThree = mkElemC('div','menu-card');

    const menuCardThreeContent = mkElemC('div','menu-card-content');

    const menuCardThreeHeader = mkElem('h6');
    menuCardThreeHeader.textContent = 'Toast and Jam';

    const menuCardThreePara = mkElem('p');
    menuCardThreePara.textContent = "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.";
    
    menuCardThreeContent.appendChild(menuCardThreeHeader);
    menuCardThreeContent.appendChild(menuCardThreePara);

    menuCardThree.appendChild(menuCardThreeContent);

    const menuCardThreePrice = mkElemC('div', 'menu-card-price');
    
    const menuCardThreePriceHeader = mkElem('h6');
    menuCardThreePriceHeader.textContent = '$1';
    
    menuCardThreePrice.appendChild(menuCardThreePriceHeader);
    menuCardThree.appendChild(menuCardThreePrice);

    menuCardsTwo.appendChild(menuCardThree);


    // Fourth card

    const menuCardFour = mkElemC('div', 'menu-card');

    const menuCardFourContent = mkElemC('div', 'menu-card-content');
    
    const menuCardFourContentHeader = mkElem('h6');
    menuCardFourContentHeader.textContent = 'Fresh Fruit';

    const menuCardFourContentPara = mkElem('p');
    menuCardFourContentPara.textContent = "A small bowl of fresh fruit, whatever we find at the market for the day.";

    menuCardFourContent.appendChild(menuCardFourContentHeader);
    menuCardFourContent.appendChild(menuCardFourContentPara);

    menuCardFour.appendChild(menuCardFourContent);

    const menuCardFourPrice = mkElemC('div','menu-card-price');
    
    const menuCardFourPriceHeader = mkElem('h6');
    menuCardFourPriceHeader.textContent = '$3';

    menuCardFourPrice.appendChild(menuCardFourPriceHeader);
    menuCardFour.appendChild(menuCardFourPrice);

    menuCardsTwo.appendChild(menuCardFour);

    sides.appendChild(menuCardsTwo);

    menuContent.appendChild(sides);


    return {menuContent};
})();

export {menu};