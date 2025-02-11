import fetchMoviesData from "./receive_movies"

export default async function getData() {
    const userStr = localStorage.getItem("userData");
    const userStr2 = JSON.parse(userStr);
    const userJSON = JSON.parse(userStr2);
    const user = {
        username: userJSON.username,
        password: userJSON.password,
    };
    const movies = await fetchMoviesData(user);
    return movies;
}