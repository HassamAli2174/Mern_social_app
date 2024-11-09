import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [commentInput, setCommentInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/posts")
             .then(response => setPosts(response.data))
             .catch(error => console.error("Error fetching posts:", error));
    }, []);

    const handleLike = (postId) => {
        // Optimistic update
        const updatedPosts = posts.map(post => 
            post._id === postId ? { ...post, likes: post.likes + 1 } : post
        );
        setPosts(updatedPosts);

        axios.post(`http://localhost:5000/api/posts/like/${postId}`)
             .catch(error => {
                 console.error("Error liking post:", error);
                 // Revert back if error
                 setPosts(posts);
             });
    };

    const handleAddComment = (postId, commentText) => {
        if (!commentText.trim()) {
          return;
        } // Prevent adding empty comments
        const updatedPosts = posts.map(post => 
            post._id === postId ? { ...post, comments: [...post.comments, { text: commentText }] } : post
        );
        setPosts(updatedPosts);
        setCommentInput(''); // Clear input field

        axios.post(`http://localhost:5000/api/posts/comment/${postId}`, { text: commentText })
             .catch(error => {
                 console.error("Error adding comment:", error);
                 // Revert back if error
                 setPosts(posts);
             });
    };

    return (
        <div className="home">
            <h2>Recent Posts</h2>
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    {post.file && (
                        <div>
                            {post.file.includes(".mp4") ? (
                                <video width="320" height="240" controls>
                                    <source src={`http://localhost:5000/uploads/${post.file}`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img src={`http://localhost:5000/uploads/${post.file}`} alt="Post Media" />
                            )}
                        </div>
                    )}
                    <p>Likes: {post.likes}</p>
                    <button onClick={() => handleLike(post._id)}>Like</button>
                    <p>Comments: {post.comments.length}</p>
                    <ul>
                        {post.comments.map((comment, index) => (
                            <li key={index}>{comment.text}</li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        placeholder="Add a comment"
                        className="comment-input"
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                    />
                    <button
                        onClick={() => handleAddComment(post._id, commentInput)}
                        className="comment-button"
                    >
                        Add Comment
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Home;
