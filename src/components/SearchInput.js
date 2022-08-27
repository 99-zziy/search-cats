/* eslint-disable */
const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.autofocus = true;

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", () => {
      $searchInput.value = "";
    });

    console.log("SearchInput created.", this);
  }
  render() {}
}
