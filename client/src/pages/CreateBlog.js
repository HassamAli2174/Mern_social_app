import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Input, Button, Form,CardBody } from 'reactstrap';
import axios from 'axios';
import { CiLogout } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { CiTextAlignLeft } from 'react-icons/ci';
import { LuImageUp } from 'react-icons/lu';
import "../designing/create_blog.css"
import Sidebar from '../components/Left_sideBar_Component/left_sidebar';

function CreateBlog() {
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
        <Container className="vh-100 create_blog">
            <Row className="h-100 p-4 d-flex row gap-4 justify-content-end">
                <Sidebar />

                <Col md="10" className="p-4 d-flex flex-column gap-4 rounded-2 form_container">
                    <h2 className='text-white fs-1'>Create Blog</h2>
                    <Form className="p-4" >
                        <Row className=" gap-4 d-flex justify-content-between mb-4">
                            <CardBody className="d-flex p-2 gap-4 input_container">
                                <IoPersonOutline size={32} color="white" />
                                <Input type="text" placeholder="Title" className="bg-transparent text-white input_field border-0 rounded-4" />
                            </CardBody>
                            <CardBody className="d-flex p-2 gap-4 input_container">
                                <IoPersonOutline size={32} color="white" />
                                <Input type="text" placeholder="Topic" className="bg-transparent text-white input_field border-0 rounded-4" />
                            </CardBody>
                        </Row>
                        <Row className="mb-4">
                            <CardBody className="d-flex p-2 gap-4 textarea_container">
                                <CiTextAlignLeft size={32} color="white" />
                                <textarea rows={15} type="text" placeholder="Description" className="bg-transparent w-100 text-white input_field rounded-4" />
                            </CardBody>
                        </Row>
                        <Row className="mb-4">
                            <CardBody className="d-flex p-2 gap-4 upload_image input_container">
                                <LuImageUp size={32} color="white" />
                                <h4 className="text-white">Upload Image</h4>
                                <Input type="file" placeholder="Date of Birth" className="bg-transparent text-white input_field border-0 rounded-4" />
                            </CardBody>
                        </Row>
                        <Row>
                            <Button className='create-blog-button p-3' > Create </Button>
                        </Row>
                    </Form>
                </Col>

            </Row>
        </Container>

    );
}

export default CreateBlog;
