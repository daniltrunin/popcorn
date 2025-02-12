import axios from "axios";

export default async function sendMoviesDataToRemove(movieId, user) {
    try {
        const response = await axios.post("http://localhost:5000/api/remove-favorite", {
            username: user.username,
            movieId,
        });

        // console.log(response.data.message);
        return response.data.movies;
    } catch (error) {
        console.error("Error removing movie from favorites:", error.response?.data || error.message);
    }
}