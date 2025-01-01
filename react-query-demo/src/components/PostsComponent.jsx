// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
        staleTime: 5000, // Cache data for 5 seconds
        cacheTime: 10000, // Cache will persist for 10 seconds even if inactive
        refetchOnWindowFocus: false, // Disable refetching when window regains focus
        keepPreviousData: true, // Keep previous data while fetching new data
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch} style={{ marginBottom: '10px' }}>
                Refetch Posts
            </button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
