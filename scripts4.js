$(document).ready(function () {
    // По умолчанию показываем первый список блюд
    $('.dishes-group[data-order-id="1"]').show();

    // Смена списка блюд при выборе заказа
    $('.order-item').click(function () {
        var orderId = $(this).data('order-id');
        $('.dishes-group').hide(); // Скрываем все списки блюд
        $('.dishes-group[data-order-id="' + orderId + '"]').show(); // Показываем нужный список
    });
});