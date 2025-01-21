import axios from "axios";

export default function requestAPI(title) {
  return axios(`http://www.omdbapi.com/?apikey=3be32c27&t=${title}`);
}
