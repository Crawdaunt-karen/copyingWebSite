document.addEventListener("DOMContentLoaded", () => {
  const userTableItems = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          ID: 1,
          name: "やまだ",
          sex: "男性",
          age: 32,
        },
        {
          ID: 2,
          name: "さとう",
          sex: "女性",
          age: 18,
        },
        {
          ID: 4,
          name: "たなか",
          sex: "男性",
          age: 25,
        },
        {
          ID: 3,
          name: "あんどう",
          sex: "女性",
          age: 48,
        },
      ]);
    }, 3000);
  });
  userTableItems.then((userItem) => {
    // テーブル要素を作成してidを付与
    const table = document.createElement("table");
    table.id = "userTable";
    // テーブルのスタイルを設定
    table.style.width = "50%";
    table.style.borderCollapse = "collapse";
    table.style.border = "1px solid black";
    // テーブルヘッダーを作成
    const thead = document.createElement("thead");
    table.appendChild(thead);

    // ヘッダー行を作成
    const headerRow = document.createElement("tr");
    const headings = ["ID", "名前", "性別", "年齢"]; // ヘッダータイトル
    headings.forEach((heading) => {
      const th = document.createElement("th");
      th.textContent = heading;
      th.style.border = "1px solid black";
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // テーブルボディを作成
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    // 各ユーザデータに対する行を作成
    userItem.forEach((user) => {
      const row = document.createElement("tr");
      Object.values(user).forEach((text) => {
        const td = document.createElement("td");
        td.textContent = text;
        td.style.border = "1px solid black"; // 各セルに枠線を設定
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    // テーブルをページに挿入
    const container = document.getElementById("tableContainer"); // 事前に設定しておく必要がある
    container.appendChild(table);

    // ここからソート機能をつくるお
    document.querySelectorAll("th").forEach((th) => {
      if (th.textContent.trim() === "ID") {
        const bothImg = document.createElement("img");
        bothImg.src = "both.svg";
        th.appendChild(bothImg);
        bothImg.addEventListener("click", () => {
          th.removeChild(bothImg);
          const ascImg = document.createElement("img");
          ascImg.src = "asc.svg";
          th.appendChild(ascImg);
          document.querySelectorAll("td").forEach((td) => {
            td.remove();
          });
          userTableItems.then((item) => {
            const copiedItems = [...item];
            const ascSortedItems = copiedItems.sort((a, b) => a.ID - b.ID);
            ascSortedItems.forEach((ascSortedItem) => {
              const row = document.createElement("tr");
              Object.values(ascSortedItem).forEach((text) => {
                const td = document.createElement("td");
                td.textContent = text;
                td.style.border = "1px solid black";
                row.appendChild(td);
              });
              tbody.appendChild(row);
            });
          });
          ascImg.addEventListener("click", () => {
            th.removeChild(ascImg);
            const descImg = document.createElement("img");
            descImg.src = "desc.svg";
            th.appendChild(descImg);
            document.querySelectorAll("td").forEach((td) => {
              td.remove();
            });
            userTableItems.then((item) => {
              const copiedItems = [...item];
              const descSortedItems = copiedItems.sort((a, b) => b.ID - a.ID);
              descSortedItems.forEach((descSortedItem) => {
                const row = document.createElement("tr");
                Object.values(descSortedItem).forEach((text) => {
                  const td = document.createElement("td");
                  td.textContent = text;
                  td.style.border = "1px solid black";
                  row.appendChild(td);
                });
                tbody.appendChild(row);
              });
            });
            descImg.addEventListener("click", () => {
              th.removeChild(descImg);
              th.appendChild(bothImg);
              document.querySelectorAll("td").forEach((td) => {
                td.remove();
              });
              userTableItems.then((userItem) => {
                console.log(userItem);
                userItem.forEach((user) => {
                  const row = document.createElement("tr");
                  Object.values(user).forEach((text) => {
                    const td = document.createElement("td");
                    td.textContent = text;
                    td.style.border = "1px solid black"; // 各セルに枠線を設定
                    row.appendChild(td);
                  });
                  tbody.appendChild(row);
                });
              });
            });
          });
        });
      }
    });
  });
});
