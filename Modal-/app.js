let images = document.querySelectorAll(".images");
let modal_img = document.querySelector(".modal-img");
let modal = document.querySelector(".modal");
let remove =  document.querySelector(".remove");

console.log(modal_img);
console.log(images);
console.log(modal);

for(let i  = 0; i < images.length; i++){
    images[i].addEventListener("click", (event)=> {
        modal_img.src = images[i].src
        modal.style.display = "block"

    })
}

remove.addEventListener("click", (event)=> {
    modal_img.src = ""
    modal.style.display = "none"
})