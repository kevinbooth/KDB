function openHiddenTextArea() {
    $('.btnOne').click(function() {
        $('.hiddenOne').slideToggle(800)
      });
    $('.btnTwo').click(function() {
        $('.hiddenTwo').slideToggle(800)
    });
    $('.btnThree').click(function() {
        $('.hiddenThree').slideToggle(800)
    });
    $('.btnFour').click(function() {
        $('.hiddenFour').slideToggle(800)
    });
    $('.btnFive').click(function() {
        $('.hiddenFive').slideToggle(800)
    });
    $('.btnSix').click(function() {
        $('.hiddenSix').slideToggle(800)
    });
}

$( document ).ready(function() {
    openHiddenTextArea();
});