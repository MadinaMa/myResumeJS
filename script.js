let text = "Hello, I'am Madina and I'am a front-end web developer.";
let i = 0;
let speed = 100;

function type() {
    if (i < text.length) {
        document.querySelector("#par").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();


gsap.from(".link", {y:10, duration: 3, delay: 5, opacity: 0, stagger: .6, ease: "bounce"})
gsap.to(".project", {duration: 1, delay: 1,  opacity: 0})



const button = document.querySelector(".btn1");
button.addEventListener("click", startAnimation);

function startAnimation() {
    gsap.to(".site", {y: 10, duration: 3, delay: .6, stagger: .7, opacity: 1, ease: "power"})
}


const link = document.querySelector(".one");
link.addEventListener("click", goDown);

function goDown() {
    gsap.from("h3", {x: 10, scale: 2, duration: 3})

}

