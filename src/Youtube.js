const KEY = "AIzaSyCSfnYCOhPIbfXB9jfv_Ig8cpZwptGQwxI";
const baseURL = "https://www.googleapis.com/youtube/v3";
const searchEndpoint = "/search";

const SearchReq = {
  baseURL: baseURL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
};

export default {
  SearchReq: SearchReq,
  searchEndpoint: searchEndpoint
};
