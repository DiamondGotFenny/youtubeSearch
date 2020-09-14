import axios from "axios";
import youtube from "./Youtube";

const youtubeSearchRes = axios.create(youtube.SearchReq);

export default {
  getSearch: youtubeSearchRes.get
};
