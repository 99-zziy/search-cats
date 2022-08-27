class SearchResult {
  $searchResult = null;
  data = null;
  isEmpty = false;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("ul");
    this.$searchResult.className = "search-result-section";
    $target.appendChild(this.$searchResult);

    this.data = initialData;

    this.$searchResult.addEventListener("click", (e) => {
      const catId = e.target.closest("li").dataset.catId;
      onClick(this.data[catId]);
    });

    this.render();
  }

  setState(nextData) {
    this.isEmpty = !nextData;
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.isEmpty) {
      return (this.$searchResult.innerHTML = "<p>검색 결과가 없습니다.</p>");
    }

    this.$searchResult.innerHTML = this.data
      .map(
        (cat, index) => `
        <li data-cat-id=${index} class="cat-item">
          <img src=${cat.url} alt=${cat.name} />
        </li>`
      )
      .join("");
  }
}
