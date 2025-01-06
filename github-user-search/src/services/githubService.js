import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export async function fetchAdvancedUserData({ username = "", location = "", minRepos = 0 }) {
    try {
        let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching advanced user data:", error.message);
    throw error;
  }
}
