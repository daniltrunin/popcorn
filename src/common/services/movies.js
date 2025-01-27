import axios from "axios";
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

const requestAPI = function (title, page = 1) {
  try {
    return axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query: `${title}`,
          page: `${page}`
        },
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    ).then((response) => { return response.data })
  } catch (error) {
    console.log(error)
  }

}

export default requestAPI;
