function mkElemC(elem,classLs) {
    let element = document.createElement(elem);
    element.classList.add(classLs);

    return element;
}

mkElemC.info = function () {
    console.log('The make elem C function creates an element with a classList');
};

function mkElem (element) {
    return document.createElement(element);
};

mkElem.info = function () {
    console.log('The make elem function creates an element without adding classes');
};

export {mkElemC, mkElem};