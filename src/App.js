/* eslint-disable */

class App {
  $target = null;
  data = [];
  loader = null;

  constructor($target) {
    this.$target = $target;
    this.loader = new Loader({ $target, isLoading: false });

    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        this.loader.setState(true);
        const { data } = await api.searchCats(keyword);
        this.searchResult.setState(data);
        this.loader.setState(false);
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        this.loader.setState(true);
        const { data } = await api.getCatInfo(image.id);
        this.imageInfo.setState({
          visible: true,
          image: data,
        });
        this.loader.setState(false);
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
}
