class ImageInfo {
  $imageInfo = null;
  data = null;
  onCloseModal = null;

  constructor({ $target, data, onCloseModal }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;
    this.onCloseModal = onCloseModal;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
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
          </ㅁ>`;
      this.$imageInfo.style.display = "block";
      const closeButton = document.querySelector(".close");
      closeButton.addEventListener("click", () => {
        this.onCloseModal();
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
