(function () {
    let header = document.querySelector(".header__container");
    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var checkScroll = function () {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        }
        else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
        if (direction === 2 && curScroll > 121) {
            header.classList.remove('backInDown');
            header.classList.add('backOutUp');
            prevDirection = direction;
        }
        else if (direction === 1) {
            header.classList.remove('backOutUp');
            header.classList.add('backInDown');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

})();
