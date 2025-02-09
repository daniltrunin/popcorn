import axios from "axios";

export default async function fetchMoviesData(user) {
    try {
        const response = await axios.post("http://localhost:5000/api/get-favorites", {
            username: user.username,
            password: user.password,
        });

        console.log("Favorites fetched:", response.data.movies); // Лог избранных фильмов
        return response.data.movies; // Возвращаем массив фильмов
    } catch (error) {
        console.error("Error fetching favorites:", error.response?.data || error.message);
        return [];
    }
}
