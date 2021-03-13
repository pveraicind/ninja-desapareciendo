$(document).ready(function () {
    $('.imagen').click(function(){
        $(this).hide();
    })

    $(".restaurar").click(function () {
        $('img').show();
    });
})