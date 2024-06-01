let Images = document.querySelectorAll(".image");

for (let index = 0; index < Images.length; index++) {
    Images[index].style.transform = `translateX(${index * 100}%)`
}


let countIndex = 0;
let minimumSlide = Images.length - 1;


function slide() {
    if (countIndex === minimumSlide) {
        countIndex = 0

    } else {
        countIndex++
    }



    for (let index = 0; index < Images.length; index++) {
        Images[index].style.transform = `translateX(${120 * (index - countIndex)}%)`

    }
}




setInterval(slide, 3000)


let prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
    if (countIndex === 0) {
        countIndex = minimumSlide;
    } else {
        countIndex--
    }

    for (let index = 0; index < Images.length; index++) {
        Images[index].style.transform = `translateX(${120 * (index - countIndex)}%)`

    }
})



let next = document.querySelector(".next");
next.addEventListener("click", slide)

let element = document.querySelectorAll(".item");

console.log(element);

let observe = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        e.target.classList.toggle("show", e.isIntersecting);

        if (e.isIntersecting) {
            observe.unobserve(e.target);
        }
    })

}, {
    threshold: 1
});

element.forEach((e) => {
    observe.observe(e);
})