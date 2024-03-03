
function getElement(){
    const element = document.querySelector(Selection)
    if(element) return element;
    throw new Error(`no element selected`)
};

const URL = "https://randomuser.me/api/";

const img = document.querySelector(".user-img");