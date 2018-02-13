function openMobileMenu() {
  $('.mobile-menu').click(function() {
    $(this).find(ul.child).show(200);
  }, function () {
    $(this).find('#mobile-dropdown'.child).hide();
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
