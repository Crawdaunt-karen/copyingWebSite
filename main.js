document.addEventListener("DOMContentLoaded", function () {
  const ul = document.getElementById("newsUlComponent");
  const categories = ["news", "economy", "entertaiment", "sports", "domestic"];
  function addListItem() {
    categories.forEach((category, index) => {
      const li = document.createElement("li");
      li.textContent = category;
      ul.appendChild(li);
    });
  }
  addListItem();
});
