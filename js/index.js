function showCaption(element){
    element.firstElementChild.style.display = "block";
}

function hideCaption(element){
    element.firstElementChild.style.display = "none";
}

const skillset= document.getElementsByClassName("skillset")
for(i=0;i<skillset.length;i++){
    const skills = skillset[i].getElementsByTagName("div");
    for(j=0;j<skills.length;j++){
    let html = "<i style='color:#f8333c' class='fa fa-code'></i>&nbsp;";
    skills[j].insertAdjacentHTML("afterbegin", html)
}
}


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
