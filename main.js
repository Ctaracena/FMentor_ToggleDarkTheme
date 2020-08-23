const header = document.querySelector('header');
const btn = document.querySelector('.dark-btn');
const slider = document.querySelector('.slider');
const toggleWrapper = document.querySelector('.toggle-switch-wrapper');
const mode = document.querySelector('.mode')
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const subTitle = document.querySelector('.sub-title');
const bg = document.querySelectorAll('.dark');
const p = document.querySelectorAll('p');
const user = document.querySelectorAll('.user');
const num = document.querySelectorAll('.num');
const overview = document.querySelector('.overview-title');
var dark = false;

slider.addEventListener('click', () => {
    if (dark === false) {
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        toggleWrapper.style.backgroundColor = "hsl(232, 19%, 15%)"
        btn.classList.add('dark-mode')
        slider.style.background = 'linear-gradient(90deg, rgb(61,126,184), rgb(67,207,144))'
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
        mode.style.color = 'white';
        mode.innerHTML = 'Dark Mode'
        h1.style.color = "white";
        h2.forEach((item) => {
            item.style.color = 'white';
        })
        subTitle.style.color = "hsl(228, 34%, 66%)";
        bg.forEach((item) => {
            item.style.backgroundColor = 'hsl(228, 28%, 20%)';
        })
        p.forEach((item) => {
            item.style.color = 'hsl(228, 34%, 66%)';
        })
        user.forEach((item) => {
            item.style.color = 'hsl(228, 34%, 66%)';
        })
        num.forEach((item) => {
            item.style.color = 'white';
        })
        overview.style.color = 'white';
        dark = true;
    } else if (dark === true) {
        document.body.style.backgroundColor = "white";
        toggleWrapper.style.backgroundColor = "hsl(225, 100%, 98%)"
        btn.classList.remove('dark-mode')
        slider.style.background = 'hsl(228, 12%, 44%)'
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        mode.style.color = 'inherit';
        mode.innerHTML = 'Light Mode'
        h1.style.color = "black";
        h2.forEach((item) => {
            item.style.color = 'black';
        })
        subTitle.style.color = "hsl(228, 12%, 44%)";
        bg.forEach((item) => {
            item.style.backgroundColor = 'hsl(227, 47%, 96%)';
        })
        p.forEach((item) => {
            item.style.color = 'hsl(228, 12%, 44%)';
        })
        user.forEach((item) => {
            item.style.color = 'hsl(228, 12%, 44%)';
        })
        num.forEach((item) => {
            item.style.color = 'black';
        })
        overview.style.color = 'hsl(228, 12%, 44%)';
        dark = false;
    }
})


