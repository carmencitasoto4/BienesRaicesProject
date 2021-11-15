$(function() {

    $('.mobile-menu').on('click', function() {
        $('.navegacion').toggleClass('mostrar')
        return false
    });

    $('.derecha i').on('click', function() {
        $('body').toggleClass('dark-mode')
    })

})