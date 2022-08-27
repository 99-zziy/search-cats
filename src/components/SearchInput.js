/* eslint-disable */
class SearchInput {
  $searchContainer = null;
  $recentSearchContainer = null;
  onSearch = null;
  onRandomBtnClick = null;
  recentSearchList = [];

  constructor({ $target, onSearch, onRandomBtnClick }) {
    this.$searchContainer = document.createElement("section");
    this.$searchContainer.className = "search-input-section";
    $target.appendChild(this.$searchContainer);

    this.$recentSearchContainer = document.createElement("ul");
    this.$recentSearchContainer.className = "recent-search-section";
    $target.appendChild(this.$recentSearchContainer);

    if (store.getLocalStorage()) {
      this.recentSearchList = store.getLocalStorage();
    }

    this.onSearch = onSearch;
    this.onRandomBtnClick = onRandomBtnClick;
    this.render();
    this.renderRecentSearch();
  }

  onKeywordClick(e) {
    const keywordName = e.target.closest("li").dataset.keywordName;
    this.onSearch(keywordName);
  }

  renderRecentSearch() {
    this.$recentSearchContainer.innerHTML = "";
    this.$recentSearchContainer.innerHTML += `<p class="search-keyword-label">최근 검색어</p>`;
    this.$recentSearchContainer.innerHTML += this.recentSearchList
      .map(
        (searchKeyword) =>
          `<li data-keyword-name = ${searchKeyword} class="search-keyword">${searchKeyword}</li>`
      )
      .join("");
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

    $searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.onSearch(e.target.value);
        if (this.recentSearchList.length > 5) {
          this.recentSearchList.pop();
        }
        this.recentSearchList.unshift(e.target.value);
        store.setLocalStorage(this.recentSearchList);
        this.renderRecentSearch();
      }
    });

    $searchInput.addEventListener("click", () => {
      $searchInput.value = "";
    });

    $randomButton.addEventListener("click", () => {
      this.onRandomBtnClick();
    });

    this.$recentSearchContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("search-keyword")) {
        return this.onKeywordClick(e);
      }
    });
  }
}
