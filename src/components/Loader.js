class Loader {
  $loader = null;
  isLoading = null;

  constructor({ $target, isLoading }) {
    this.$loader = document.createElement("div");
    this.$loader.className = "Loader";
    $target.appendChild(this.$loader);

    this.isLoading = isLoading;
    this.render();
  }

  setState(nextData) {
    this.isLoading = nextData;
    this.render();
  }

  render() {
    this.$loader.innerHTML = `<div class="spinner"></div>`;

    if (this.isLoading) {
      this.$loader.style.display = "flex";
    } else {
      this.$loader.style.display = "none";
    }
  }
}
