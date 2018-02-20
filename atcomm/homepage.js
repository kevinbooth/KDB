function openMobileMenu() {
  var dropdown =$('.mobile-dropdown');

  $('.mobile-menu').click(function() {
    dropdown.slideToggle(1000)
  });
}

function playStopVideo() {
  $('video').each(function(){
      if ($(this).is(":in-viewport( 400 )")) {
          $(this)[0].play();
      } else {
          $(this)[0].pause();
      }
  });
}

// $( document ).ready() block.
$( document ).ready(function() {
    "use strict";

  openMobileMenu();

  $(".single-item").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  });

  $(window).scroll(function() {
    playStopVideo();
  });
});
