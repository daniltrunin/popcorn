import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export default async function sendMoviesDataToRemove(movieId, user) {
    try {
        const response = await axios.post(`${API_URL}/api/remove-favorite`, {
            username: user.username,
            movieId,
        });

        // console.log(response.data.message);
        return response.data.movies;
    } catch (error) {
        console.error("Error removing movie from favorites:", error.response?.data || error.message);
    }
}