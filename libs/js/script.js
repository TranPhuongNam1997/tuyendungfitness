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

$(function() {

    $('.ripple').on('click', function(event) {
        event.preventDefault();
        var $btn = $(this),
            $div = $('<div/>'),
            btnOffset = $btn.offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;

        $div.addClass('ripple-effect');
        $div
            .css({
                height: $btn.height(),
                width: $btn.height(),
                top: yPos - ($div.height() / 2),
                left: xPos - ($div.width() / 2),
                background: $btn.data("ripple-color") || "#fff"
            });
        $btn.append($div);

        window.setTimeout(function() {
            $div.remove();
        }, 2000);
    });

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
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });

});