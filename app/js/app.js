var position = $(window).scrollTop();

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        $(".navbar").removeClass("navbar-dark");
        $(".navbar").addClass("bg-white navbar-light fixed-top shadow");
        $(".navbar .navbar-brand .logo").removeClass("d-block");
        $(".navbar .navbar-brand .logo").addClass("d-none");
        $(".navbar .navbar-brand .logo-dark").removeClass("d-none");
        $(".navbar .navbar-brand .logo-dark").addClass("d-block");
    } else if ($(window).scrollTop() === 0) {
        $(".navbar").removeClass("bg-white navbar-light fixed-top shadow");
        $(".navbar").addClass("navbar-dark");
        $(".navbar .navbar-brand .logo-dark").removeClass("d-block");
        $(".navbar .navbar-brand .logo-dark").addClass("d-none");
        $(".navbar .navbar-brand .logo").removeClass("d-none");
        $(".navbar .navbar-brand .logo").addClass("d-block");
    }
    position = scroll;
});
