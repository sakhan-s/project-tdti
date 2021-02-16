window.onload = function preloader() {
    setInterval(() => {
        let preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    }, 500);
}
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
AOS.init({
    duration: 1200,
})
document.addEventListener('DOMContentLoaded', function() {

    const navBtn = document.querySelector('.nav__btn');
    const nav = document.querySelector('.nav__list');

    navBtn.addEventListener('click', function() {
        navBtn.classList.toggle('close');
        nav.classList.toggle('active');
    })
});