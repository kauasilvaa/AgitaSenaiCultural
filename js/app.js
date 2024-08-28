$(document).ready(function () {
    $('#navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open');
        $('body').toggleClass('no-scroll');
    });

    $('.navbar-nav a').on('click', function () {
        $('.offcanvas-collapse').removeClass('open');
        $('body').removeClass('no-scroll');
    });

    // Fechar offcanvas ao clicar fora dele
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.navbar, .offcanvas-collapse').length) {
            $('.offcanvas-collapse').removeClass('open');
            $('body').removeClass('no-scroll');
        }
    });
});