$(document).ready(function () {
  $(".tablinks").click(function () {
    $(".tabcontent").css("display", "none");
    $(".tablinks").removeClass("active");

    var tabId = $(this)
      .attr("onclick")
      .match(/'([^']+)'/)[1];
    $("#" + tabId).css("display", "block");

    $(this).addClass("active");
  });

  $(".tablinks:first").click();
});
