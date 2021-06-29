$( document ).ready(function() {

    //nut scroll top

    // $("#back-to-top").click(function () {
    //     $("html, body").animate({scrollTop : 0},"slow");
    //     return false;
    // });
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() >=300) {
    //         $('#back-to-top').show();
    //     }
    //
    //     else {
    //         $('#back-to-top').hide();
    //     }
    //
    // });

});

$(document).ready(function (event) {

    $('.showhide-pass div').click(function () {
        var x = document.getElementById("password-login");
        $('.showhide-pass div').toggleClass('active');
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });

    $('.btn-category').click(function () {
       $('.navigation').slideToggle(300,'swing');
    });


});