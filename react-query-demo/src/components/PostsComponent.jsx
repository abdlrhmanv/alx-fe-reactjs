import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
  return response.json();
};

const PostsComponent = () => {
  const { isLoading, error, data, refetch } = useQuery('posts', fetchPosts); // Destructure refetch

  if (isLoading) return <p>Loading posts...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch Posts</button> {/* Use the destructured refetch function */}
    </div>
  );
};

export default PostsComponent;