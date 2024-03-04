
import get from "./utils/getElement.js";
const URL = "https://randomuser.me/api/";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = [...document.querySelectorAll(".icon")];
console.log(btns);


const getUser = async () =>{
    const response = await fetch(URL);
    const data = await response.json();
    // destructure
    const person = data.results[0]
    const {phone, email} = person;
    const {large:image} = person.picture;
    const {password} = person.login;
    const {first, last} = person.name;
    const {dob:{age}} = person
};

const showUser = ()=>{
    // get user from api 
    getUser()

    // display users
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);