let hamburger = document.querySelector(".hamburger");
let burger = document.querySelectorAll(".burger");
let burgerOne = document.querySelector(".one");
let burgerTwo = document.querySelector(".two");
let burgerThree = document.querySelector(".three");
let ul = document.querySelector("ul");
let modeCont = document.querySelector(".mode");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun")
let pageCont = document.querySelector(".cont")
let element = document.querySelectorAll(".item");
let times = document.querySelector(".cancel")
console.log(element);



console.log(ul);
let isClicked = false

hamburger.addEventListener('click', () => {
    if (!isClicked) {
        hamburger.classList.add("active");
        ul.classList.add("active");
        burgerOne.classList.add("active");
        burgerTwo.classList.add("active");
        burgerThree.classList.add("active");

        isClicked = true

        return

    }
    hamburger.classList.remove("active");
    ul.classList.remove("active");
    burgerOne.classList.remove("active");
    burgerTwo.classList.remove("active");
    burgerThree.classList.remove("active");

    isClicked = false
})

moon.addEventListener("click", () => {

    moon.classList.add("change")
    sun.classList.add("change")
    pageCont.classList.add("change")

})

sun.addEventListener("click", () => {
    moon.classList.remove("change")
    sun.classList.remove("change")
    pageCont.classList.remove("change")
})


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


