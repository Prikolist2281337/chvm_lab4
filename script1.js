$(document).ready(function() {
    $('#phoneNumber').on('blur', function() {
        var phoneValue = $(this).val();
        if (!/^\+7\s.[0-9]{3}.\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phoneValue)) {
            alert('Некорректный формат номера!');
        }
    });
});