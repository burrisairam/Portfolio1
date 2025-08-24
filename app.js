const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let details = document.querySelectorAll(".detail");

    details.forEach((detail, index) => {
        setTimeout(() => {
            detail.style.opacity = "1";
            detail.style.transform = "translateY(0)";
        }, 1000 * index);
    });

    const skillsSection = document.getElementById('cv_skills');
    const progressBars = document.querySelectorAll('.progress_item');

    function animateSkills() {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            progressBars.forEach(bar => {
                bar.classList.add('open');
            });
        }
    }

    document.addEventListener('scroll', animateSkills);
});