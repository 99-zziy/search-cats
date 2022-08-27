const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  getCatInfo: async (id) => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      return res.json();
    } catch (err) {
      alert(err);
    }
  },
};
