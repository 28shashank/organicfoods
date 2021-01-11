$(document).ready(function () {
    $('.carousel').carousel({
        interval: false,
    });
    $(".add-to-cart").on('click', function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $("#shopping-cart").addClass("shake");
        setTimeout(function () {
            $("#shopping-cart").removeClass("shake");
        }, 1000);
    });

    // dropdown list for mobile view
    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

});

// Page scroll add and remove class
$('body').scroll(function (e) {
    if ($(this).scrollTop() > 100) {
        $(".header_area").addClass("darkHeader");
    } else {
        $(".header_area").removeClass("darkHeader");
    }
});