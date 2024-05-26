// API KEY
require('dotenv').config();
const googleApiKey = process.env.GOOGLE_API_KEY;

// Smooth Scroll
$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
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

// Back-to-top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
}

// Hide Countdown
$(window).scroll( function() {
    if(window.matchMedia("(max-width: 992px)").matches){
        $("#countdown").hide();
    }
    else {
        $("#countdown").show();
    }
});

// Hide Logo
$(window).scroll( function() {
    if( $(this).scrollTop() > 0 ) {
        $("#logo").hide();
        $("#textlogo").show();
        $("#sectionsNav").removeClass('navbar-transparent');
    }
    else {
        $("#logo").show();
        $("#textlogo").hide();
        $("#sectionsNav").addClass('navbar-transparent');
    }
});

// Masquage du back-to-top à l'ouverture d'une fenêtre modale
$(document).ready(function (){
    $(".modal").on('show.bs.modal', function(){
        $('#back-to-top').removeClass('show');
    });

    $(".modal").on('hide.bs.modal', function(){
        $('#back-to-top').addClass('show');
    });
});

// Fermeture du menu hamburger au click
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

// Load more Actus
$(function () {
    $(".card-columns .card").hide();
    $(".card-columns .card").slice(0, 6).show();
    $("#loadMore").click(function(e){
        e.preventDefault();
        $(".card-columns .card:hidden").slice(0, 3).show();
        if($(".card-columns .card:hidden").length == 0){
            $("#loadMore").hide();
        }
    });
});

// Load more Vote movies
$(function () {
    /*$(".tab-content .row .col-md-4 #feature-tab").hide();
    $(".tab-content .row .col-md-4 #feature-tab").slice(0, 6).show();
    $("#loadMoreMovies").click(function(e){
        e.preventDefault();
        $(".tab-content .row .col-md-4 #feature-tab:hidden").slice(0, 3).show();
        if($(".tab-content .row .col-md-4 #feature-tab:hidden").length == 0){
            $("#loadMoreMovies").hide();
        }
    });*/

    $(".tab-content .row .col-md-4").hide();
    $(".tab-content .row .col-md-4").slice(0, 6).show();
    $("#loadMoreMovies").click(function (e) {
        e.preventDefault();
        $(".tab-content .row .col-md-4:hidden").slice(0, 3).show();
        if ($(".tab-content .row .col-md-4:hidden").length == 0) {
            $("#loadMoreMovies").hide();
        }
    });

    /*$(".tab-content .row .col-md-4 #doc-tab").hide();
    $(".tab-content .row .col-md-4 #doc-tab").slice(0, 6).show();
    $("#loadMoreMovies").click(function(e){
        e.preventDefault();
        $(".tab-content .row .col-md-4 #doc-tab:hidden").slice(0, 3).show();
        if($(".tab-content .row .col-md-4 #doc-tab:hidden").length == 0){
            $("#loadMoreMovies").hide();
        }
    });*/
});

// Arrêt des vidéos quand on quitte fenêtre modale
$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film1").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film1").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film1").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film2").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film2").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film2").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film3").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film3").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film3").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film4").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film4").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film4").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film5").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film5").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film5").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film6").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film6").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film6").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film7").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film7").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film7").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film8").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film8").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film8").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film9").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film9").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film9").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film10").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film10").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film10").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film11").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film11").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film11").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#trailer-film12").attr('src');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#trailer-film12").attr('src', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#trailer-film12").attr('src', url);
    });
});

$(document).ready(function(){
    // Stockage de l'url contenu dans la propriété src de l'iframe dans une variable
    var url = $("#news-shop-1").attr('url');

    // A la fermeture de la fenêtre modale, on assigne une valeur nulle à l'url
    $(".modal").on('hide.bs.modal', function(){
        $("#news-shop-1").attr('url', '');
    });

    // On réassigne à la vidéo l'url stocké dans la variable
    $(".modal").on('show.bs.modal', function(){
        $("#news-shop-1").attr('url', url);
    });
});

$(document).ready(function() {
    $("#flexiselDemo1").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        animationSpeed: 400,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 3
            },
            landscape: {
                changePoint: 640,
                visibleItems: 3
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3
            }
        }
    });
});

$(document).ready(function() {
    $("#flexiselDemo2").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        animationSpeed: 400,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 3
            },
            landscape: {
                changePoint: 640,
                visibleItems: 3
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3
            }
        }
    });
});

$(document).ready(function() {
    $("#flexiselDemo3").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        animationSpeed: 400,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 3
            },
            landscape: {
                changePoint: 640,
                visibleItems: 3
            },
            tablet: {
                changePoint: 768,
                visibleItems: 3
            }
        }
    });
});

/*
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;
*/

// List View
function listView() {
        $('#movie_1,#movie_2,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').removeClass('col-md-4');
        $('#movie_1,#movie_2,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').addClass('col-md-8','tab-content','tab-space');
        $('#tab-content').removeClass('tab-content','tab-space');
        //elements[i].style.width = "25%";
}

// Grid View
function gridView() {
        $('#movie_1,#movie_2,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').removeClass('col-md-8');
        $('#movie_1,#movie_2,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').addClass('col-md-4');
        $('#tab-content').removeClass('tab-content','tab-space');
}






function shorts(){
    if ($("#short-tab:focus")) {
        $('#movie_2,#movie_4,#movie_16,#movie_17,#movie_22,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_30').hide();
        $('#movie_1,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_23,#movie_26,#movie_29').slice(0, 6).show();
        $("#loadMoreMovies").click(function (e) {
            e.preventDefault();
            $('#movie_2,#movie_4,#movie_16,#movie_17,#movie_22,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_30').hide();
            if ($('#movie_1,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_23,#movie_26,#movie_29').hidden = false) {
                $("#loadMoreMovies").hide();
            }
            $("#loadMoreMovies").show();
            $('#movie_1,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_23,#movie_26,#movie_29').slice(0, 3).show();
        });
    }
    else if ($("#short-tab:active")){
        $('#movie_2,#movie_4,#movie_16,#movie_17,#movie_22,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_30').hide();
        $('#movie_1,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_23,#movie_26,#movie_29').slice(0, 6).show();
        $("#loadMoreMovies").click(function (e) {
            e.preventDefault();
            $('#movie_2,#movie_4,#movie_16,#movie_17,#movie_22,#movie_24,#movie_25,#movie_26,#movie_27,#movie_28,#movie_30').hide();
            if ($('#movie_1,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_23,#movie_26,#movie_29').hidden = false) {
                $("#loadMoreMovies").hide();
            }
            $("#loadMoreMovies").show();
            $('#movie_1,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_23,#movie_26,#movie_29').slice(0, 3).show();
        });
    }
}

function features(){
    if ($("#feature-tab:focus")) {
        $("#loadMoreMovies").show();
        $('#movie_1,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_23,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').hide();
        $('#movie_2,#movie_22,#movie_24').slice(0, 6).show();
        $("#loadMoreMovies").click(function (e) {
            e.preventDefault();
            $('#movie_1,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_23,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').hide();
            $('#movie_2,#movie_22,#movie_24').slice(0, 3).show().hidden = true;
            if ($("#movie_2,#movie_22,#movie_24").hidden = false) {
                $("#loadMoreMovies").hide();
            }
        });
    }
    else if ($("#feature-tab:active")) {
        $("#loadMoreMovies").show();
        $('#movie_1,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_23,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').hide();
        $('#movie_2,#movie_22,#movie_24').slice(0, 6).show();
        $("#loadMoreMovies").click(function (e) {
            e.preventDefault();
            $('#movie_1,#movie_3,#movie_4,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_16,#movie_17,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_23,#movie_25,#movie_26,#movie_27,#movie_28,#movie_29,#movie_30').hide();
            $('#movie_2,#movie_22,#movie_24').slice(0, 3).show().hidden = true;
            if ($("#movie_2,#movie_22,#movie_24").hidden = false) {
                $("#loadMoreMovies").hide();
            }
        });
    }
}

function docs(){
    if ($("#doc-tab:focus")) {
        $("#loadMoreMovies").show();
        $('#movie_1,#movie_2,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_26,#movie_29').hide();
        $('#movie_4,#movie_16,#movie_17,#movie_25,#movie_27,#movie_28,#movie_30').slice(0, 6).show();
        $("#loadMoreMovies").click(function (e) {
            e.preventDefault();
            $('#movie_1,#movie_2,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_26,#movie_29').hide();
            $('#movie_4,#movie_16,#movie_17,#movie_25,#movie_27,#movie_28,#movie_30').slice(0, 3).show().hidden = true;
            if ($("#movie_4,#movie_16,#movie_17,#movie_25,#movie_27,#movie_28,#movie_30:hidden").hidden = false) {
                $("#loadMoreMovies").hide();
            }
        });
    }
    else if ($("#doc-tab:active")) {
        $("#loadMoreMovies").show();
        $('#movie_1,#movie_2,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
            '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
            ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_26,#movie_29').hide();
        $('#movie_4,#movie_16,#movie_17,#movie_25,#movie_27,#movie_28,#movie_30').slice(0, 6).show();
        $("#loadMoreMovies").click(function (e) {
            e.preventDefault();
            $('#movie_1,#movie_2,#movie_3,#movie_5,#movie_6,#movie_7,#movie_8,#movie_9,#movie_10,' +
                '#movie_11,#movie_12,#movie_13,#movie_14,#movie_15,#movie_18,#movie_19,#movie_20' +
                ',#movie_21,#movie_22,#movie_23,#movie_24,#movie_26,#movie_29').hide();
            $('#movie_4,#movie_16,#movie_17,#movie_25,#movie_27,#movie_28,#movie_30').slice(0, 3).show().hidden = true;
            if ($("#movie_4,#movie_16,#movie_17,#movie_25,#movie_27,#movie_28,#movie_30:hidden").hidden = false) {
                $("#loadMoreMovies").hide();
            }
        });
    }
}

/*
$(document).ready(function() {
    $('#nav-content').each(function() {

        var $active, $content, $links = $(this).find('a');

        $active = $($links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        $links.not($active).each(function() {
            $(this.hash).hide();
        });

        $(this).on('click', 'a', function(e) {

            $active.removeClass('active');
            $content.hide();

            $active = $(this);
            $content = $(this.hash);

            $active.addClass('active');
            $content.show();

            e.preventDefault();
        });
    });
});
*/
