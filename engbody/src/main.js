$(document).ready(function () {
  $(".tablinks").click(function () {
    var tabId = $(this).data("tab");
    $(".tabcontent").css("display", "none");
    $("#" + tabId).css("display", "block");
    $(".tablinks").removeClass("active");
    $(this).addClass("active");
  });

  $(".tablinks:first").trigger("click");

  //  studioのスライダー
  $(".studio-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });

  // priceのスライダー
  $(".price-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
