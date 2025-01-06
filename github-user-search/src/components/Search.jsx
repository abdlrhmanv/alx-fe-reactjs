import React, { useState } from "react";
import { fetchUserData, fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let data;
      if (location || minRepos) {
        // Use advanced search
        data = await fetchAdvancedUserData({ username, location, minRepos: parseInt(minRepos) || 0 });
      } else {
        // Use basic search
        data = [await fetchUserData(username)]; // Wrap in an array for consistency
      }
      setResults(data);
    } catch (err) {
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., john"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700 font-semibold mb-1">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., San Francisco"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-gray-700 font-semibold mb-1">Minimum Repositories:</label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., 10"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && results.length === 0 && <p className="text-gray-700">No results found.</p>}
        {!loading && !error && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((user) => (
              <div key={user.id} className="p-4 bg-white rounded shadow">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h2 className="text-lg font-semibold text-center mt-2">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-500 text-center mt-2"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
