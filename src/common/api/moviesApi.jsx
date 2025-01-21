import axios from "axios";

export default function requestApi(t) {
  return axios(`http://www.omdbapi.com/?apikey=3be32c27&t=${t}`);
}
