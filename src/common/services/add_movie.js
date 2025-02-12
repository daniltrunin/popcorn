import axios from "axios";

export default async function sendMoviesData(movie, user) {
    try {
        const response = await axios.post("http://localhost:5000/api/add-favorite", {
            username: user.username,
            movie,
        });

        // console.log(response.data.message);
        return response.data.movies;
    } catch (error) {
        console.error("Error adding movie to favorites:", error.response?.data || error.message);
    }
}