$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const number1Input = $("input#number1").val();
    const phraseInput= $("input#phrase").val();

    $(".person1").text(person1Input);
    $(".number1").text(number1Input*2);
    $(".phrase").text(phraseInput.toUpperCase());


    $("#message").show();
  });
});