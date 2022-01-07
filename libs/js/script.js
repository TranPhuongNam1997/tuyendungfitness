$( document ).ready(function() {


    // $(".flag.active").click(function () {
    //     $(this).removeClass('active')
    // });


    // function removeNoti() {
    //     setTimeout(function() {
    //         $('.notify-alert').removeClass('active')
    //     }, 3000);
    // }



     $(".flag").click(function () {

        if(!$(this).hasClass("active")){
            // $('.notify-alert').addClass('active');
            $(this).addClass('active');
            // removeNoti();
            // clearTimeout(removeNoti);

            toastr.success(`<div class="notify-alert"><div><img src="img/check-circle-fill.svg" alt="img">Đã lưu vào danh sách việc làm</div><a href="#">Đến danh sách việc làm</a></div>`)

        }
        else
        {
            $(this).removeClass('active')
        }
    });





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

    if(innerWidth < 992){

        $('.menu-child').hide();

        var overlay = $("<div class='overlay'></div>");
        $(".has-drop").click(function () {
            $(this).toggleClass("active");
            $(this).children('.menu-child').slideToggle();
        });

        $("body").prepend(overlay);
        $(".view-menu-mb").click(function () {
            $(this).toggleClass("change-icon-mb");
            overlay.toggle();
            $(".nav").toggleClass("open-mb");
        });
        overlay.click(function () {
            $(".view-menu-mb").trigger('click');
        });
    }

    $(".show-pass .img-eyeslash").click(function () {
        $(this).parent('.show-pass').prev('.txtpassword').prop("type", "text");
        $(this).hide();
        $(this).prev('.img-eye').show();

    });
    $(".show-pass .img-eye").click(function () {
        $(this).parent('.show-pass').prev('.txtpassword').prop("type", "password")
        $(this).next('.img-eyeslash').show();
        $(this).hide();
    });
    $(".notify").click(function () {
        $(this).next('.list-notify').slideToggle();

    });

    $(".btn-show-tab").click(function () {
        $(".nav-profile").toggleClass('active');
    });






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
    // begin click outside

    // $(".btn-category").click(function (event) {
    //    $('.navigation').slideToggle(300,'swing');
    //    $(this).toggleClass('active');
    //     event.stopPropagation();
    // });
    // const $menu = $('.header-home');
    // $(document).mouseup(e => {
    //     if (!$menu.is(e.target)
    //         && $menu.has(e.target).length === 0)
    //     {
    //         $('.btn-category').removeClass('active');
    //         $('.navigation').slideUp(300,'swing');
    //     }
    // });
    // end click outside

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')').hide().fadeIn(650);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });
    $('#text-cmt').keyup(function (e) {

       if(e.target.value && e.target.value.length > 0){
            $('.fly-cmt svg path').attr('fill','#4782FD');
       }
       else {
           $('.fly-cmt svg path').attr('fill','#616770');
           // alert('a')

       }

    });



});