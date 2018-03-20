function openHiddenTextArea() {
    $('.btnOne').click(function() {
        $('.hiddenOne').slideToggle(1000)
      });
    $('.btnTwo').click(function() {
        $('.hiddenTwo').slideToggle(1000)
    });
    $('.btnThree').click(function() {
        $('.hiddenThree').slideToggle(1000)
    });
    $('.btnFour').click(function() {
        $('.hiddenFour').slideToggle(1000)
    });
    $('.btnFive').click(function() {
        $('.hiddenFive').slideToggle(1000)
    });
}

$( document ).ready(function() {
    openHiddenTextArea();
});