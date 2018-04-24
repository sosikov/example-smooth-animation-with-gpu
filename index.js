var isShow = false;
var sidebar = document.querySelector('.sidebar');

function toggle() {
    if (!isShow) {
        sidebar.classList.add('animation');
        sidebar.classList.add('show');
        isShow = !isShow;
    } else {
        sidebar.classList.add('animation');
        sidebar.classList.remove('show');
        isShow = !isShow;
    };
};

function wasAnimated() {
    sidebar.classList.remove('animation');
};

sidebar.addEventListener('transitionend', wasAnimated, false);
sidebar.addEventListener('click', toggle, false);
