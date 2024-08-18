// TOOGLE ICON NAVBAR

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// // SCROLL SECTION ACTIVE LINK

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// // STICKY NAVBAR

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// // REMOVE TOOGLE ICON AND NAVBAR

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

// // SCROLL REVEAL

ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal ('home-content , heading' , {origin:'top'});
ScrollReveal().reveal('.home-img , .services-container, .skill-container, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

// // TYPED JS

const typed = new Typed ('.multiple-text',{
    strings: ['Frontend Developer','Web designer','Freelancer'],
    typeSpeed : 70,
    backSpeed : 70,
    backDelay : 1000,
    loop : true,
});


// document.getElementById('click').addEventListener('click', function() {
//     const button = this;
//     if (button.textContent === 'Read More') {
//         button.textContent = 'Clicked!';
//         button.classList.add('Read Less');
//     } else {
//         button.textContent = 'Read More';
//         button.classList.remove('Read Less');
//     }
// });
