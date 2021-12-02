$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").on("input", function() {
    const count = $(this).val().length;
    const counter = 140 - count;
    if (counter < 0) {
      $(".counter").html(counter).css("color", "red");
    } else if (counter > 0) {
      $(".counter").html(counter).css("color","#545149");
    }
  });
});