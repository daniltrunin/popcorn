import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDVkN2E5NWEwMDQ4NTE3NTc3MTUwZmY2NTZiODcwYSIsIm5iZiI6MTczNzYzNTQ5OS4yMTcsInN1YiI6IjY3OTIzNmFiN2FmMjM1MjZkNzQ3MDJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruyQsJaYSdT3yTskcbhS_Q861fdQSXiMdDl5Fxncjk4";

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
