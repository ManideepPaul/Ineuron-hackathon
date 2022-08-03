const courses = document.querySelector('.courses');
const company = document.querySelector('.company');
const programs = document.querySelector('.programs');
const ham = document.querySelector('.ham');
const mobNav = document.querySelector('.mob-sub-links');
const coursesSublink = document.querySelector('.course-sublink');
const companySublink = document.querySelector('.company-sublink');
const programsSublink = document.querySelector('.programs-sublink');

dropDownAdd = (ele) => {
    ele.classList.add('hidden')
}

dropDownRem = (ele) => {
    ele.classList.remove('hidden')
}

courses.addEventListener('mouseover', () => dropDownRem(coursesSublink))
courses.addEventListener('mouseout', () => dropDownAdd(coursesSublink))
company.addEventListener('mouseover', () => dropDownRem(companySublink))
company.addEventListener('mouseout', () => dropDownAdd(companySublink))
programs.addEventListener('mouseover', () => dropDownRem(programsSublink))
programs.addEventListener('mouseout', () => dropDownAdd(programsSublink))

ham.addEventListener('click', () => {
    mobNav.classList.toggle('hidden')
})

// Swiper JS 

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 100,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
