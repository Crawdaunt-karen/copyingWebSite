let slideIndex = 0; // 現在のスライドインデックスを保持
let dots = document.getElementsByClassName("dot");
let slides = document.getElementsByClassName("slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

// 前のスライドを表示する関数
function showPrevSlide() {
  showSlides((slideIndex -= 1));
}

// 次のスライドを表示する関数
function showNextSlide() {
  showSlides((slideIndex += 1));
}

// 現在のスライドを表示する関数
// nは表示するスライドのインデックス
function showSlides(n) {
  let i;
  // インデックスがslidesの長さよりも大きければ最初のスライドに戻す
  if (n >= slides.length) {
    slideIndex = 0;
  }
  // インデックスが0未満(最初のスライドの前に戻ろうとしたとき)、
  // slideIndexを最後のスライドのインデックスに設定
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  // すべてのスライドを非表示
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // 現在のslideIndexのみ表示
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

// ドットがクリックされたら対応するスライドを表示する関数
function currentSlide(n) {
  showSlides((slideIndex = n - 1));
}

// アクティブなドットにスタイルを適用する関数
function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
}

// 初期表示のスライドを指定
showSlides(slideIndex);
// 初期化事にドットを更新
updateDots();

// 前後コントロールのイベントリスナーを追加
prev.addEventListener("click", showPrevSlide);
next.addEventListener("click", showNextSlide);
