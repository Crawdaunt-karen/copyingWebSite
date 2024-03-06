$(function () {
  $(".menu-list-item:first-child a").addClass("active-link");

  // SP版のハンバーガーメニューのクラスtoggle
  $("#header-menu-btn").click(() => {
    $(".menu-list").toggleClass("active");
    $("#header-menu-btn").toggleClass("active"); // メニューボタンにもactiveクラスをトグル
  });
});
