
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

// const img = get(".user-img");
// const title = get(".user-title");
// const value = get(".user-value");
// const btn = get(".btn");
// const btns = [...document.querySelectorAll(".icon")];
// console.log(btns);



const showUser = async ()=>{
    // get user from api 
    const person = await getUser();
    // display users
    displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);