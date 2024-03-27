$(document).ready(function () {
  // stickyヘッダー
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const defaultHeader = document.querySelector(".default-header");
    const scrolledContent = document.querySelector(".header-scrolled");

    if (window.scrollY > 0) {
      header.classList.add("header-fixed");
      scrolledContent.style.display = "block";
      defaultHeader.style.display = "none";
    } else {
      header.classList.remove("header-fixed");
      scrolledContent.style.display = "none";
      defaultHeader.style.display = "block";
    }
  });

  $(".tablinks").click(function () {
    var tabId = $(this).data("tab");
    $(".tabcontent").css("display", "none");
    $("#" + tabId).css("display", "block");
    $(".tablinks").removeClass("active");
    $(this).addClass("active");
  });

  $(".tablinks:first").trigger("click");

  const studioSwiper = new Swiper(".studio-swiper-container", {
    // Swiperのオプション
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // ドットをクリック可能にする
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

  const priceSwiper = new Swiper(".price-swiper-container", {
    // Swiperのオプション
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    // スクロールバー
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });

  details.querySelector("summary").addEventListener("click", function (evt) {
    const icon = this.querySelector(".material-icons");
    if (details.open) {
      icon.textContent = "expand_more";
    } else {
      // Timeoutを追加して、detailsの状態が切り替わるのを待つ
      setTimeout(() => {
        icon.textContent = "expand_more";
      }, 1);
    }
  });
});
