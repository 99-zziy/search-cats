const store = {
  setLocalStorage(recentSearches) {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("recentSearches"));
  },
};
