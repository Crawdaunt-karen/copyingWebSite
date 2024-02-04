window.addEventListener("load", () => {
  // モーダルとリンクの要素を取得
  var modal = document.getElementById("termsModal");
  var link = document.getElementById("termsLink");
  var closeButton = document.getElementById("closeBtn");
  var checkbox = document.getElementById("checkbox");
  var form = document.getElementById("form");
  var submitBtn = document.getElementById("submitBtn");

  checkbox.addEventListener("change", (e) => {
    submitBtn.disabled = e.target.checked;
  });

  // リンクをクリックした時にモーダルを表示する
  link.onclick = function () {
    modal.style.display = "block";
  };

  // クローズボタンをクリックした時にモーダルを非表示にする
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // モーダルの外側をクリックした時にモーダルを非表示にする
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
      //かつ、フォームの入力要素が全てvalidならsubmitボタンを有効にする
      if (form.checkValidity()) {
        submitBtn.disabled = false;
      }
    }
  });

  form.addEventListener("change", (e) => {
    if (form.checkValidity()) {
      submitBtn.disabled = false;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); //フォームの送信を阻止する

    //バリデーションをチェック
    if (!form.checkValidity()) {
      console.log("フォームの入力エラー");
      return; // 処理を終了
    } else {
      //登録済みのページに遷移
      window.location.href = "register-done.html";
    }
  });

  // 初期状態ではチェックボックスもsubmitボタンもdisable状態にしておく
  checkbox.disabled = true;
  submitBtn.disabled = true;
});
