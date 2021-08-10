$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeOut();
  });
  $(".clickable2").click(function() {
    $("#walrus-showing").fadeOut();
    $("#walrus-hidden").fadeIn();
  });
});