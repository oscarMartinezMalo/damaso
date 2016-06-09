$(function () {
    smoothScroll();
    asideMethod();
});

function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
};

function asideMethod() {
    $('#goRight').click(function () {
        $('#wrapBelt').css('left', '-100%');
        $('#SecondoryImages').show();
    });

    $('#goLeft').click(function () {
        $('#wrapBelt').css('left', '0%');
        $('#SecondoryImages').hide(600);

    });
}

$(window).scroll(function () {
    scrollItDown();
})

function scrollItDown() {
    var scooll = $(window).scrollTop();
    var resul = scooll / 1.7;
    $('#HeroSection').css('background-position', '25% ' + resul + 'px');
    $('#wrapCompannyName').css({
        'transform': 'translate(0px, ' + scooll / 2.5 + '%)'
    });
    console.log(scooll);
    console.log(resul);
}
