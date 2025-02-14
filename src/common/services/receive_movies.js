import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export default async function fetchMoviesData(user) {
    try {
        const response = await axios.post(`${API_URL}/api/get-favorites`, {
            username: user.username,
            password: user.password,
        });

        // console.log("Favorites fetched:", response.data.movies); // Лог избранных фильмов
        return response.data.movies; // Возвращаем массив фильмов
    } catch (error) {
        console.error("Error fetching favorites:", error.response?.data || error.message);
        return [];
    }
}
