function openMobileMenu() {
  $('.mobile-menu').click(function() {
    $(this).find(ul.child).show(200);
  }, function () {
    $(this).find('#mobile-dropdown'.child).hide();
  });
}

// A $( document ).ready() block.
$( document ).ready(function() {
    openMobileMenu();
});
