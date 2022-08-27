class ImageInfo {
  $imageInfo = null;
  data = null;
  onCloseModal = null;

  constructor({ $target, data, onCloseModal }) {
    this.$imageInfo = document.createElement("div");
    this.$imageInfo.className = "image-info";
    $target.appendChild(this.$imageInfo);

    this.data = data;
    this.onCloseModal = onCloseModal;

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        onCloseModal();
      }
    });

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (!this.data.visible) {
      return (this.$imageInfo.style.display = "none");
    }

    const { name, url, temperament, origin } = this.data.image;

    this.$imageInfo.innerHTML = `
      <article class="content-wrapper">
        <article class="title">
          <span>${name}</span>
          <button class="close">x</button>
        </article>
        <img src="${url}" alt="${name}"/>        
        <article class="description">
          <p>성격: ${temperament}</p>
          <p>태생: ${origin}</p>
        </article>
      </article>`;

    this.$imageInfo.style.display = "block";

    const $imageInfo = document.querySelector(".image-info");
    const $closeButton = document.querySelector(".close");

    $closeButton.addEventListener("click", () => {
      this.onCloseModal();
    });

    $imageInfo.addEventListener("click", (e) => {
      if (e.target.classList.contains("image-info")) {
        this.onCloseModal();
      }
    });
  }
}
