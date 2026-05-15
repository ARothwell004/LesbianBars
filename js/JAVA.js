$(document).scroll(function(){

    var y = $(document).scrollTop();
    $ (".update").html(y);

    if (y > 200 && y < 800) {
        $(".one").fadeIn();
    }

    else {
        $(".one").fadeOut();
    }

    var h = $(document).height() - $(window).height();
    var scrolled = (y / h) * 100;
    $(".scrollbar").css("height", scrolled + "%" );

    var h = $(document).height() - $(window).height();
    var scrolled = (y / h) * 100;
    $(".scrollbarhome").css("height", scrolled + "%" );

    var h = $(document).height() - $(window).height();
    var scrolled = (y / h) * 100;
    $(".scrollbarhist").css("height", scrolled + "%" );

    var h = $(document).height() - $(window).height();
    var scrolled = (y / h) * 100;
    $(".scrollbarexp").css("height", scrolled + "%" );
});