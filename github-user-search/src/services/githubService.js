import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";

// Basic user search by username
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Returns the user's data object
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
}

// Advanced search with query parameters
export async function fetchAdvancedUserData({ username = "", location = "", minRepos = 0 }) {
  try {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    return response.data.items; // Returns an array of users
  } catch (error) {
    console.error("Error fetching advanced user data:", error.message);
    throw error;
  }
}
