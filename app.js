
const getElement=  (Selection) => {
    const element = document.querySelector(Selection)
    if(element) return element;
    throw new Error(`no element selected`)
};

const URL = "https://randomuser.me/api/";

const img = getElement(".user-img");
console.log(img);