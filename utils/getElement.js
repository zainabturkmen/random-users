const getElement=  (Selection) => {
    const element = document.querySelector(Selection)
    if(element) return element;
    throw new Error(`no element selected`)
};

export default getElement;