let toggle = document.querySelector(".toggle");

function callback() {

    document.body.classList.toggle("darkmode") 
    
}

toggle.addEventListener("click", callback)