
import get from "./utils/getElement.js";
const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);

const showUser = ()=>{
    // get user from api 
    // display users
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);