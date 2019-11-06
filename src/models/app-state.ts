/** During development, use this URL to access the server. */
const apiService = process.env.SERVER || window.location.origin;

/** Application state */
export const AppState = {
  isSearching: false,
  searchQuery: '',
  apiService,
};
