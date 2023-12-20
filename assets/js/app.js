const cl = console.log;

const toggleicon = document.getElementById("toggle");


const onclick = eve => {
    eve.target.classList.toggle("fa-bars");
    eve.target.classList.toggle("fa-xmark");
}



toggleicon.addEventListener("click", onclick);