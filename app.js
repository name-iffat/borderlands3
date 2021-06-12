const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0}s`;
            }

        });
        //Burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

let i = 0;//current slide
let j = 4;//total slides

function next() {
    document.getElementById("card" + (i + 1)).
        classList.remove("zane");
    i = (j + i + 1) % j;
    document.getElementById("card" + (i + 1)).
        classList.add("zane");
}

function prev() {
    document.getElementById("card" + (i + 1)).classList.remove("zane");
    i = (j + i - 1) % j;
    document.getElementById("card" + (i + 1)).classList.add("zane");
}
