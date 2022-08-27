const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const HTTP_STATUS_CODE = {
  OK: 200,
  INTERNAL_SERVER_ERROR: 500,
};

const request = async (url) => {
  const response = await fetch(url);
  switch (response.status) {
    case HTTP_STATUS_CODE.OK:
      return response.json();
    case HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR:
      return alert("죄송합니다. 서버에러가 발생했습니다. 다시 시도해주세요.");
  }
};

const api = {
  async searchCats(keyword) {
    return await request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  async getCatInfo(id) {
    return await request(`${API_ENDPOINT}/api/cats/${id}`);
  },
  async randomGetCats() {
    return await request(`${API_ENDPOINT}/api/cats/random50`);
  },
};
