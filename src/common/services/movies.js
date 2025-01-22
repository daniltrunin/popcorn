import axios from "axios";

const apikey = "3be32c27";

export default function requestAPI(title) {
  return axios(`http://www.omdbapi.com/?apikey=${apikey}&t=${title}`);
}
