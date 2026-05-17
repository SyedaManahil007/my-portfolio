var typed = new Typed(".typing", {

    strings: [
        "Frontend Developer",
        "Web Designer",
        "ICT Student",
        "Future Full Stack Developer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});


// AOS ANIMATION

AOS.init({

    duration: 1200,

});


// PARTICLES

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#ff0000"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            speed: 2
        }
    }

});

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
 navbar.classList.toggle("active");
};
