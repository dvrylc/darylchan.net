$(document).ready(function() {

    $(".lightbox").fancybox({
        padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $(".fa-chevron-down").click(function() {
        $("html, body").animate({
            scrollTop: $(".projects").offset().top
        }, 500);
    })

});

function email(name, domain, text) {
    var addr = name + '@' + domain;
    document.write('<a href="mailto:' + addr + '">' + text + '</a>');
};