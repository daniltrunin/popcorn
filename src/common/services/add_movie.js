import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export default async function sendMoviesData(movie, user) {
    try {
        const response = await axios.post(`${API_URL}/api/add-favorite`, {
            username: user.username,
            movie,
        });

        // console.log(response.data.message);
        return response.data.movies;
    } catch (error) {
        console.error("Error adding movie to favorites:", error.response?.data || error.message);
    }
}