/* eslint-disable */

class SearchInput {
  $searchContainer = null;
  onSearch = null;

  constructor({ $target, onSearch, onRandomBtnClick }) {
    this.$searchContainer = document.createElement("section");
    this.$searchContainer.className = "search-input-section";
    $target.appendChild(this.$searchContainer);

    this.onSearch = onSearch;
    this.render();
  }

  render() {
    this.$searchContainer.innerHTML = `
      <input class="search-input"/>
      <button class="random-button">random</button>
    `;

    const $searchInput = document.querySelector(".search-input");
    const $randomButton = document.querySelector(".random-button");

    $searchInput.placeholder = "고양이를 검색해보세요.";
    $searchInput.autofocus = true;

    $searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", () => {
      $searchInput.value = "";
    });

    $randomButton.addEventListener("click", () => {
      onRandomBtnClick();
    });
  }
}
