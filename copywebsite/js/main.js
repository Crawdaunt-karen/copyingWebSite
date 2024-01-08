$(document).ready(function () {
  // ハンバーガーメニューのトグルボタンがクリックされた時の処理
  $(".toggle_btn").click(function () {
    // ナビゲーションとマスクの表示・非表示をtoggle
    $(".headerNavi, .mask, .toggle_btn").toggleClass("active");
  });

  // マスクがクリックされた時にmaskとheaderNavi,toggle_btnのクラスを外す
  $(".mask").click(function () {
    $(".headerNavi, .mask, .toggle_btn").removeClass("active");
  });

  $(".pickup-slider").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
