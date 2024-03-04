
import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);

const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    btns[0].classList.add("active");
    btns.forEach((btn)=>{
        const label = btn.dataset.label;
        btn.addEventListener("click", ()=>{
            console.log(person[label]);
        })
    })
}


const showUser = async ()=>{
    // get user from api 
    const person = await getUser();
    // display users
    displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);