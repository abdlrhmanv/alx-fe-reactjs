import axios from "axios";

export const fetchUserData = async (username) => {
  const endpoint = `https://api.github.com/users/${username}`;
  const response = await axios.get(endpoint);
  return response.data;
};
