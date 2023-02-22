let header = document.querySelector(".header__container");
document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.classList.remove('backInDown');
        header.classList.add('backOutUp');
    }
    else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        header.classList.remove('backOutUp');
        header.classList.add('backInDown');
    }
});
