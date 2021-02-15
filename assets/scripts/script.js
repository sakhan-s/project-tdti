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