import React, { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const query = [];
      if (username) query.push(`user:${username}`);
      if (location) query.push(`location:${location}`);
      if (minRepos) query.push(`repos:>=${minRepos}`);

      const searchQuery = query.join("+");
      const data = await fetchUsers(searchQuery);
      if (data.items && data.items.length > 0) {
        setResults(data.items);
      } else {
        setError("No users found with the specified criteria.");
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleFormSubmit} className="mb-4 space-y-2">
        <input
          type="text"
          value={username}
          onChange={(e) => handleInputChange(e, setUsername)}
          placeholder="GitHub Username"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => handleInputChange(e, setLocation)}
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => handleInputChange(e, setMinRepos)}
          placeholder="Minimum Repositories"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-4 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow-md rounded-md">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <p>Location: {user.location || "N/A"}</p>
                <p>Repositories: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
