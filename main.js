document.addEventListener("DOMContentLoaded", function () {
  const ul = document.getElementById("newsUlComponent");
  ul.style.display = "flex";
  const categories = ["news", "economy", "entertaiment", "sports", "domestic"];
  const articles = {
    news: [
      { title: "News Article 1", comments: ["Comment 1", "Comment 2"] },
      { title: "News Article 2", comments: [] },
      { title: "News Article 3", comments: ["Comment 1"] },
    ],
    economy: [
      { title: "Economy Article 1", comments: ["Comment 1"] },
      {
        title: "Economy Article 2",
        comments: ["Comment 1", "Comment 2", "Comment 3"],
      },
      { title: "Economy Article 3", comments: [] },
    ],
    entertaiment: [
      { title: "Entertaiment Article 1", comments: ["Comment 1"] },
      {
        title: "Entertaiment Article 2",
        comments: ["Comment 1", "Comment 2", "Comment 3"],
      },
      { title: "Entertaiment Article 3", comments: [] },
    ],
    sports: [
      { title: "Sports Article 1", comments: ["Comment 1"] },
      {
        title: "Sports Article 2",
        comments: ["Comment 1", "Comment 2", "Comment 3"],
      },
      { title: "Sports Article 3", comments: [] },
    ],
    domestic: [
      { title: "Domestic Article 1", comments: ["Comment 1"] },
      {
        title: "Domestic Article 2",
        comments: ["Comment 1", "Comment 2", "Comment 3"],
      },
      { title: "Domestic Article 3", comments: [] },
    ],
  };
  let activeCategory = null;

  function showArticlesForCategory(category) {
    const newsContentDiv = document.getElementById(`${category}Div`);
    newsContentDiv.innerHTML = "";
    const articlesForCategory = articles[category];
    if (articlesForCategory) {
      articlesForCategory.forEach((article) => {
        const articleContainer = document.createElement("div");
        articleContainer.classList.add("article-container");
        const titleP = document.createElement("p");
        titleP.textContent = article.title;
        articleContainer.appendChild(titleP);
        if (Math.random() < 0.25) {
          // 25% の確率
          const newLabel = document.createElement("span");
          newLabel.textContent = "new ";
          newLabel.style.color = "red";
          newLabel.style.fontWeight = "bold";
          titleP.appendChild(newLabel);
        }
        // コメントの追加
        const commentList = document.createElement("ul");
        commentList.style.display = "inline-block";
        article.comments.forEach((comment) => {
          const commentLi = document.createElement("li");
          commentLi.textContent = comment;
          commentList.appendChild(commentLi);
        });
        if (article.comments.length > 0) {
          articleContainer.appendChild(commentList);
          const commentCount = document.createElement("span");
          commentCount.textContent = `${article.comments.length} 件`;
          articleContainer.appendChild(commentCount);
        }
        newsContentDiv.appendChild(articleContainer);
      });
    }
  }
  function hideArticlesForCategory(category) {
    const newsContentDiv = document.getElementById(`${category}Div`);
    newsContentDiv.innerHTML = "";
  }
  function setActiveCategory(category) {
    if (activeCategory === category) {
      return;
    }
    if (activeCategory !== null) {
      const currentActiveLi = ul.querySelector(`#${activeCategory}Li`);
      hideArticlesForCategory(activeCategory);
      currentActiveLi.style.backgroundColor = "#fff";
    }
    const selectedLi = ul.querySelector(`#${category}Li`);
    showArticlesForCategory(category);
    selectedLi.style.backgroundColor = "grey";
    activeCategory = category;
  }

  function addListItem() {
    categories.forEach((category, index) => {
      const li = document.createElement("li");
      li.id = `${category}Li`;
      li.textContent = category;
      li.style.padding = "10px 20px";
      li.style.cursor = "pointer";
      li.style.border = "1px solid #aaa";
      li.style.backgroundColor = "#fff";
      li.style.marginRight = index === categories.length - 1 ? "0" : "5px";

      const categoryDiv = document.createElement("div");
      categoryDiv.id = `${category}Div`;
      ul.appendChild(li);
      document.body.appendChild(categoryDiv);
      if (category === "news") {
        setActiveCategory("news");
      }
      li.onclick = () => setActiveCategory(category);
    });
  }
  addListItem();
});
