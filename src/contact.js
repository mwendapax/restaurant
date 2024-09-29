import {mkElem, mkElemC} from './fn.js';

const contact = (function () {
    const contactContainer = mkElemC('div', 'contact-container');

    const contactHeader = mkElemC('div', 'contact-header');

    const contactHeaderHeader = mkElem('h6');

    const contactHeaderMainSpan = mkElem('span');

    const contactHeaderMiniSpan1 = mkElem('span');
    const contactHeaderMiniSpan2 = mkElem('span');
    const contactHeaderMiniSpan3 = mkElem('span');
    const contactHeaderMiniSpan4 = mkElem('span');

    contactHeaderMainSpan.appendChild(contactHeaderMiniSpan1);
    contactHeaderMainSpan.appendChild(contactHeaderMiniSpan2);
    contactHeaderMainSpan.appendChild(contactHeaderMiniSpan3);
    contactHeaderMainSpan.appendChild(contactHeaderMiniSpan4);

    const contactHeaderText = document.createTextNode('Contact Us');
    contactHeaderHeader.appendChild(contactHeaderText);

    contactHeaderHeader.appendChild(contactHeaderMainSpan);

    contactHeader.appendChild(contactHeaderHeader);

    const contactPara = mkElemC('div', 'contact-para');

    const contactParaUl = mkElem('ul');

    const contactParaLiOne = mkElem('li');
    contactParaLiOne.textContent = 'Manager';

    const contactParaLiTwo = mkElem('li');
    contactParaLiTwo.textContent = '012-345-6789';

    const contactParaLiThree = mkElem('li');
    contactParaLiThree.textContent = 'email@example.com';

    contactParaUl.appendChild(contactParaLiOne);
    contactParaUl.appendChild(contactParaLiTwo);
    contactParaUl.appendChild(contactParaLiThree);

    contactPara.appendChild(contactParaUl);

    contactContainer.appendChild(contactPara);

    return {contactContainer};
}());

export {contact};