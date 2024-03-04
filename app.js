
import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);




const showUser = async ()=>{
    // get user from api 
    const person = await getUser();
    console.log(person);
    // display users
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);