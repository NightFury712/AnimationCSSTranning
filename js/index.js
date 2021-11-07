$(document).ready(function() {
  $(".heart-icon").click(() => {
    $(".heart-icon").hide();
    $(".wave").removeClass('hide');
    setTimeout(() => {
      $("body").addClass('bg-img');
      $(".content-container").show();
    }, 500)

    setTimeout(() => {
      $(".content-container .title .text").text("Luv you so much <3"); 
      $(".content-container .gif-image").removeClass("gif1");
      $(".content-container .gif-image").addClass("gif2");
    }, 4100)

    setTimeout(() => {
      $(".content-container").hide(); 
      $(".last-image").removeClass("hide");
      $(".small-heart-container").show();
    }, 8100)
  })
})