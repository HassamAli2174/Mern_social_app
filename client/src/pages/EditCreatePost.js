import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditCreatePost() {
    const { id } = useParams();  // ID will be undefined when creating a new post
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: '',
        content: '',
        file: null
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Load post data if id is available
    useEffect(() => {
        if (id) {
            setLoading(true);
            axios.get(`http://localhost:5000/api/posts/${id}`)
                .then(response => {
                    setPost(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Failed to fetch post:', err);
                    setError('Failed to load the post.');
                    setLoading(false);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setPost(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('content', post.content);
        if (post.file) {
            formData.append('file', post.file);
        }

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        };

        setLoading(true);
        const apiEndpoint = id ? `http://localhost:5000/api/posts/${id}` : 'http://localhost:5000/api/posts';
        const method = id ? axios.patch : axios.post;

        method(apiEndpoint, formData, config)
            .then(() => {
                navigate('/');
            })
            .catch(err => {
                console.error('Failed to save post:', err);
                setError('Failed to save the post.');
                setLoading(false);
            });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={post.title} onChange={handleChange} />
            </label>
            <label>
                Content:
                <textarea name="content" value={post.content} onChange={handleChange} />
            </label>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">{id ? 'Update Post' : 'Create Post'}</button>
        </form>
    );
}

export default EditCreatePost;
