$(document).ready(function () {
    // Переключение активных категорий
    $('.menu-categories a').click(function(e) {
        e.preventDefault();
        var category = $(this).data('category');
        $('.menu-categories a').removeClass('active');
        $(this).addClass('active');
        $('.dish-card').removeClass('active');
        $('.' + category).addClass('active');
    });

    // Прокрутка меню
    $('.menu-categories').on('wheel', function(event) {
        event.preventDefault();
        $(this).scrollLeft($(this).scrollLeft() + event.originalEvent.deltaY * 5);
    });
});