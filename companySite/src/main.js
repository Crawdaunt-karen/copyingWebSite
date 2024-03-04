$(function () {
  const currentPath = window.location.pathname;
  console.log(currentPath);

  $(".menu-list-item a").each(function () {
    const href = $(this).attr("href"); // 各アンカーのhref属性を取得
    // 現在のURLとhref属性を比較し、一致する場合にスタイルを変更
    if (href === currentPath) {
      console.log(href);
      $(this).addClass("active-link");
    }
  });
});
