window.addEventListener("load", () => {
  // モーダルとリンクの要素を取得
  var modal = document.getElementById("termsModal");
  var link = document.getElementById("termsLink");
  var closeButton = document.querySelector(".close");
  var checkbox = document.getElementById("checkbox");
  var form = document.getElementById("form");
  var submitBtn = document.getElementById("submitBtn");

  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });

  // リンクをクリックした時にモーダルを表示するイベントリスナーを追加
  link.onclick = function () {
    modal.style.display = "block";
  };

  // クローズボタンをクリックした時にモーダルを非表示にするイベントリスナーを追加
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // モーダルの外側をクリックした時にモーダルを非表示にするイベントリスナーを追加
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  modal.addEventListener("scroll", () => {
    // スクロール位置が一番下に達したかどうかを検証
    if (modal.scrollTop + modal.clientHeight >= modal.scrollHeight) {
      // 最下部に達したらチェックを入れる
      checkbox.checked = true;
    }
  });

  form.addEventListener("submit", (e) => {
    if (!checkbox.checked) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    window.location.href = "register-done.html";
  });

  checkbox.disabled = false;
  submitBtn.disabled = true;
});

window.onload = () => {
  var passwordInput = document.getElementById("password");
};
