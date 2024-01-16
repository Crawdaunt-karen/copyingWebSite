// DOMが読み込まれてから実行するためのイベントリスナー
document.addEventListener("DOMContentLoaded", () => {
  // ul要素を取得する
  const list = document.querySelector(".list");

  // 課題1-1
  //  下記のDOMをHTMLのul内に差し込む
  //  <li>これです</li>
  const listItem = document.createElement("li");
  listItem.textContent = "これです";
  list.appendChild(listItem);

  // 課題1-2
  // 下記のDOMをjsで作成し、htmlのulの中に差し込む
  {
    /* <li>
  <a href="1.html"><img src="bookmark.png" alt="ブックマーク" />これです</a>
</li> */
  }
  const listItem2 = document.createElement("li");
  const anchor = document.createElement("a");
  const image = document.createElement("img");
  image.setAttribute("src", "bookmark.png");
  image.setAttribute("alt", "ブックマーク");
  anchor.appendChild(image);
  var textNode = document.createTextNode("これです");
  anchor.appendChild(textNode);
  listItem2.appendChild(anchor);
  list.appendChild(listItem2);

  // 課題1-3
  // 下記のDOMをjsで作成し、htmlのulの中に差し込む
  {
    /* <ul>
  <li><a href="a1.html"><img src="/img/bookmark.png">a1</li>
  <li><a href="a2.html"><img src="/img/bookmark.png">a2</li>
</ul> */
  }
  const ul = document.createElement("ul");
  const imgSrc = "/img/bookmark.png";
  const links = [
    { href: "a1.html", text: "a1" },
    { href: "a2.html", text: "a2" },
  ];
  links.forEach(function (link) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    const img = document.createElement("img");
    img.setAttribute("src", imgSrc);
    a.appendChild(img);
    a.appendChild(document.createTextNode(link.text));
    li.appendChild(a);
    ul.appendChild(li);
  });
  list.appendChild(ul);

  // 課題1-4
  // 下記の配列を作成し、
  // [{to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"}, {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}]
  //   下記のようにHTMLに出力する
  //   <ul>
  //  <li><a href="/bookmark.html"><img src="1.png" alt="画像1">ブックマーク</a></li>
  //  <li><a href="/message.html"><img src="2.png" alt="画像2">メッセージ</a></li>
  // </ul>
  const menuItems = [
    { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
    { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
  ];
  const ul2 = document.createElement("ul");
  menuItems.forEach((item) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    const imgElement = document.createElement("img");
    aElement.href = `/${item.to}`;
    imgElement.src = item.img;
    imgElement.alt = item.alt;
    aElement.appendChild(imgElement);
    aElement.appendChild(document.createTextNode(item.text));
    liElement.appendChild(aElement);

    ul2.appendChild(liElement);
  });
  document.body.appendChild(ul2);

  // 課題1-5
  // 課題1-4で作成した配列をPromiseオブジェクトとして解決された値として受け取り、
  // 課題1-4と同様に出力する
  const menuPromiseItems = Promise.resolve([
    {
      to: "bookmark.html",
      img: "1.png",
      alt: "画像1",
      text: "ブックマーク課題5",
    },
    { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ課題5" },
  ]);
  menuPromiseItems.then((menuItems) => {
    const ul5 = document.createElement("ul");
    menuItems.forEach((item) => {
      const liElement = document.createElement("li");
      const aElement = document.createElement("a");
      const imgElement = document.createElement("img");
      aElement.href = `/${item.to}`;
      imgElement.src = item.img;
      imgElement.alt = item.alt;
      aElement.appendChild(imgElement);
      aElement.insertAdjacentText("beforeend", item.text);
      liElement.appendChild(aElement);
      ul5.appendChild(liElement);
    });
    document.body.appendChild(ul5);
  });

  // 課題1-6 と 課題1-7
  // 課題1-6
  // 課題1-5で作成したものを3秒後に解決されるようにする
  // 課題1-7
  // 解決するまでloading画像を出す
  function showLoading() {
    const loadingImage = document.createElement("img");
    loadingImage.setAttribute("src", "loading-circle.gif");
    loadingImage.setAttribute("id", "loadingImage");
    document.body.appendChild(loadingImage);
  }
  function hideLoading() {
    const loadingImage = document.getElementById("loadingImage");
    if (loadingImage) {
      loadingImage.remove();
    }
  }
  showLoading();
  const menuItemsPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          to: "bookmark.html",
          img: "1.png",
          alt: "画像1",
          text: "ブックマーク課題6と7",
        },
        {
          to: "message.html",
          img: "2.png",
          alt: "画像2",
          text: "メッセージ課題6と7",
        },
      ]);
    }, 3000);
  });
  menuItemsPromise.then((menuItems) => {
    hideLoading();
    const ul6 = document.createElement("ul");
    menuItems.forEach((item) => {
      const liElement = document.createElement("li");
      const aElement = document.createElement("a");
      const imgElement = document.createElement("img");
      aElement.href = `/${item.to}`;
      imgElement.src = item.img;
      imgElement.alt = item.alt;
      aElement.appendChild(imgElement);
      aElement.insertAdjacentText("beforeend", item.text);
      liElement.appendChild(aElement);
      ul6.appendChild(liElement);
    });
    document.body.appendChild(ul6);
  });

  //課題1-8
  // 3秒後にrejectを実行してthenでその値を出力する
  showLoading();
  const menuItemsPromiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise was rejected with data"));
    }, 3000);
  });
  menuItemsPromiseReject.catch((error) => {
    console.log("課題1-8-reject:" + error);
  });

  // 課題1−9と10
  // 課題9
  // asyncとawaitを使って課題7を実装
  // 課題10
  // try-catch-finallyを使う
  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            to: "bookmark.html",
            img: "1.png",
            alt: "画像1",
            text: "ブックマーク課題9",
          },
          {
            to: "message.html",
            img: "2.png",
            alt: "画像2",
            text: "メッセージ課題9",
          },
        ]);
      }, 3000);
    });
  }
  async function loadData() {
    try {
      showLoading();
      const result = await fetchData();
      console.log(result);
      hideLoading();
      const ul9 = document.createElement("ul");
      result.forEach((item) => {
        const li9 = document.createElement("li");
        const a9 = document.createElement("a");
        const img9 = document.createElement("img");

        a9.href = `/${item.to}`;
        img9.src = item.img;
        img9.alt = item.alt;

        a9.appendChild(img9);
        a9.insertAdjacentText("beforeend", item.text);
        li9.appendChild(a9);

        ul9.appendChild(li9);
        document.body.appendChild(ul9);
      });
    } catch (error) {
      console.error(error);
      hideLoading();
    } finally {
      console.log("課題10:どんなときでもここ通るよ。");
    }
  }
  loadData();

  //DOMContentLoadedのときのAPIへのGETmethod
  function getInfoViaAPI() {
    showLoadingForModal();
    fetch("https://api.jsonbin.io/v3/b/65a0d566dc74654018910961", {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2a$10$AXHiZB4BkTtqssKh4LVj1OnX8.UF3cOHAFR67QwEA4hJVCs4eIcoi",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        hideLoadingForModal();
      })
      .catch((error) => console.log("Error:", error));
  }

  // 課題11と12
  // 課題11
  // 下記のjsonをAPIに登録し、fetchを使って登録したjsonデータ取得
  // { "data": [
  //   {
  //     "a": "bookmark",
  //     "img": "img/1.png",
  //     "alt": "画像１",
  //     "text": "ブックマーク"
  //   },
  //   {
  //     "a": "message",
  //     "img": "img/2.png",
  //     "alt": "画像２",
  //     "text": "メッセージ"
  //   }
  // ]}
  // 課題12
  // ボタンをクリックしたらAPIにリクエストを送る
  const button = document.createElement("button");
  button.textContent = "APIにGETリクエストを送るボタン";
  button.className = "APIButton";
  button.addEventListener("click", function () {
    // getInfoViaAPI();
  });
  document.body.appendChild(button);
});

//ここからモーダルのためにwindow.onloadのイベントリスナーに記述
// 課題13
// ボタンを押下するとモーダルダイアログが出てきて、
// 課題12で作成したボタンを押下するとAPIにGETリクエストが飛ぶ
window.addEventListener("load", () => {
  const showModalBtn = document.createElement("button");
  document.body.appendChild(showModalBtn);
  showModalBtn.textContent = "モーダルダイアログを開く";
  showModalBtn.className = "showModalBtn";
  const modalBtn = document.querySelector(".showModalBtn");

  const s = document.querySelector(".APIButton");
  console.log("test");
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".closeBtn");
  function showModal() {
    modal.style.display = "block";
  }
  function hideModal() {
    modal.style.display = "none";
  }
  modalBtn.addEventListener("click", function () {
    showModal();
  });
  closeBtn.onclick = function () {
    hideModal();
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      hideModal();
    }
  };

  function showLoadingForModal() {
    const loadingImageOnModal = document.createElement("img");
    loadingImageOnModal.setAttribute("src", "loading-circle.gif");
    loadingImageOnModal.setAttribute("id", "loadingImageOnModal");
    modal.appendChild(loadingImageOnModal);
  }

  function hideLoadingForModal() {
    const loadingImageOnModal = document.getElementById("loadingImageOnModal");
    if (loadingImageOnModal) {
      loadingImageOnModal.remove();
    }
  }

  //課題14
  //  課題13で作成したモーダルにinput(typeがnumber)をおく
  //  そのinputをクリックしたら、そのinputのvalueを取得してリクエストできるようにする
  const myNumberInput = document.getElementById("myNumberInput");
  myNumberInput.addEventListener("click", (e) => {
    console.log(e.target.value);
    // getInfoViaAPI();
  });
  function getInfoViaAPI() {
    showLoadingForModal();
    fetch("https://api.jsonbin.io/v3/b/65a0d566dc74654018910961", {
      method: "GET",
      headers: {
        "X-Master-Key":
          "$2a$10$AXHiZB4BkTtqssKh4LVj1OnX8.UF3cOHAFR67QwEA4hJVCs4eIcoi",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        hideLoadingForModal();
      })
      .catch((error) => console.log("Error:", error));
  }
  //課題15
  // モーダル内にinput(typeがnumber)とinput(typeがtext)があるformをおく
  // form内のsubmitボタン押下で APIにGETリクエスト
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // getInfoViaAPI();
  });
});
