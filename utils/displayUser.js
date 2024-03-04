
const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    
    btns[0].classList.add("active");
    btns.forEach((btn)=>{
        const label = btn.dataset.label;
        btn.addEventListener("click", ()=>{
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            btns.forEach((btn) => btn.classList.remove("active"));
            btn.classList.add("active")
        })
    });
};

export default displayUser;