$(function () {
    // JS function for service section hover effect===============
    $(".service-card").hover(function () {
        $('#active-service-card').css({ "box-shadow": "none", "background-color": "#F4F8FE" });
    }, function () {
        $('#active-service-card').css({ "box-shadow": "0px 0px 20px lightgrey", "background-color": "#FFF" });
    });

     // team section function
     $(".achivement-hover").hover(function () {
        $('#active-achivement').css({ "background": "#ffff", "color": "grey" });
    }, function () {
        $('#active-achivement').css({ "background": "linear-gradient( to right, #31db86 0%, #4c87d3 100%)", "color": "#ffff" });
    });

    // team section function
    $(".team-card").hover(function () {
        $('#active-team').css({ "border": "4px solid #fff" });
    }, function () {
        $('#active-team').css({ "border": "4px solid #55f7ae", "transition": "0.5s ease" });
    });

    // navbar topfix=====================
    var navOffset = $('#nav').offset().top;
    $(window).on('scroll', function () {
        var winOffset = $(window).scrollTop();
        if (winOffset > navOffset) {
            $('#nav').addClass('navfix');
            $('#nav').slideDown(slow)
        } else {
            $('#nav').removeClass('navfix');
        }
    });// navbar fixed class close

    // smoth scrolling from navigation menu
    $('nav a').on('click', function (e) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash; //store value
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });//smoth scrolling close

  //scrolling to top by click bottom button==================
  
    $('.top-scroll').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });//bottom button close



})
