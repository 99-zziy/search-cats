/* eslint-disable */

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        const { data } = await api.searchCats(keyword);
        this.setState(data);
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        const { data } = await api.getCatInfo(image.id);
        this.imageInfo.setState({
          visible: true,
          image: data,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
      onCloseModal: () => {
        this.imageInfo.setState({
          visible: false,
          image: null,
        });
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
