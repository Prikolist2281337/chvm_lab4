$(document).ready(function () {
    const menuContainer = $('.menu-container');
    const scrollAmount = 100; // Скорость прокрутки

    $('.scroll-left').click(function () {
        menuContainer.animate({ scrollLeft: '-=' + scrollAmount }, 500);
    });

    $('.scroll-right').click(function () {
        menuContainer.animate({ scrollLeft: '+=' + scrollAmount }, 500);
    });
});