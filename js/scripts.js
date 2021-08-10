$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeIn();
    $("#walrus-hidden").fadeOut();
  });
  $(".clickable2").click(function() {
    $("#walrus-showing").fadeOut();
    $("#walrus-hidden").fadeIn();
  });
  $(".clickable3").click(function() {
    $("#baseball-showing").fadeIn();
    $("#baseball-hidden").fadeOut();
  });
  $(".clickable4").click(function() {
    $("#baseball-showing").fadeOut();
    $("#baseball-hidden").fadeIn();
  });
});