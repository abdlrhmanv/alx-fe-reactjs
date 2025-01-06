import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUsers = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users from GitHub API.");
  }
};
