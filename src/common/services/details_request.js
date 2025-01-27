import axios from "axios"
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN

const requestAPIWithDetailsAndId = function (id) {
    try {
        return axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            }
        ).then((response) => { return response.data })
    } catch (error) {
        console.log(error)
    }
};

export default requestAPIWithDetailsAndId