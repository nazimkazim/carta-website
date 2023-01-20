const menuBtn = document.querySelector('.menu-btn')
const header = document.querySelector('.header-mobile')

menuBtn.addEventListener("click", () => {
    header.classList.toggle("open");
});