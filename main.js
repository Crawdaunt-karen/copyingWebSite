// DOMが読み込まれてから実行するためのイベントリスナー
document.addEventListener("DOMContentLoaded", () => {
  // ul要素を取得する
  const list = document.querySelector(".list");

  //課題1-1
  const listItem = document.createElement("li");
  // liにコンテンツ(テキスト等)を追加する
  // textContentプロパティは、特定のノードに対して、ノード内のテキストを文字列で取得
  listItem.textContent = "これです";
  // ulの中に新しいliを追加する
  list.appendChild(listItem);

  // 課題1-2
  // 新しいli・a・img要素を作成し、imgに属性を設定
  const listItem2 = document.createElement("li");
  const anchor = document.createElement("a");
  const image = document.createElement("img");
  image.setAttribute("src", "bookmark.png");
  image.setAttribute("alt", "ブックマーク");
  // img要素をa要素の子にする
  // appendChildは特定の親要素の中に要素を追加するメソッド
  anchor.appendChild(image);
  // テキストノードを作成する
  var textNode = document.createTextNode("これです");
  // テキストノードをa要素の子にする
  anchor.appendChild(textNode);
  // a要素をli要素の子にする
  listItem2.appendChild(anchor);
  // li要素をul要素の子にする
  list.appendChild(listItem2);

  // 課題1-3
  // ul要素を作る
  const ul = document.createElement("ul");
  const imgSrc = "/img/bookmark.png";
  const links = [
    { href: "a1.html", text: "a1" },
    { href: "a2.html", text: "a2" },
  ];
  links.forEach(function (link) {
    // <li><a><img>要素を作成し、a要素のhrefとimg要素のsrc属性に値を設定
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    const img = document.createElement("img");
    img.setAttribute("src", imgSrc);
    // <img>を<a>の子要素として追加
    a.appendChild(img);
    // テキストノードを<a>の子要素として追加
    a.appendChild(document.createTextNode(link.text));
    // <a>を<li>の子要素として追加
    li.appendChild(a);
    // <li>を<ul>の子要素として追加
    ul.appendChild(li);
  });
  list.appendChild(ul);

  // 課題1-4
  // 配列を定義する
  const menuItems = [
    { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
    { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
  ];
  // ul要素を生成する
  const ul2 = document.createElement("ul");

  // 配列をループして各項目のHTMLを生成する
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
  // 結果のul要素をbodyに追加
  document.body.appendChild(ul2);

  // 課題1-5
  const menuPromiseItems = Promise.resolve([
    { to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク" },
    { to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ" },
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
          text: "ブックマーク",
        },
        {
          to: "message.html",
          img: "2.png",
          alt: "画像2",
          text: "メッセージ",
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
});
