const courses = document.querySelector('.courses');
const company = document.querySelector('.company');
const programs = document.querySelector('.programs');
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
