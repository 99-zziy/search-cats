const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const HTTP_STATUS_CODE = {
  OK: 200,
};

const request = async (url) => {
  const response = await fetch(url);
  if (response.status === HTTP_STATUS_CODE.OK) {
    return response.json();
  }
};

const api = {
  async searchCats(keyword) {
    return await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  async getCatInfo(id) {
    return await request(`${API_ENDPOINT}/api/cats/${id}`);
  },
};
