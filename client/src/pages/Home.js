import React from "react";
import { CiLogout, CiHome } from "react-icons/ci";
import { WiDayCloudy } from "react-icons/wi";
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBlog, FaRegListAlt, FaCog } from 'react-icons/fa';
import AllBlogs from "../components/home_components/all_blogs/all_blogs";
import BlogMode from "../components/home_components/blog_mode/blog_mode";
import Sidebar from "../components/Left_sideBar_Component/left_sidebar";
import "../designing/home_page.css";

function Home() {
    return (
        <Container fluid className="home_background_image vh-100">
            <Row className="h-100 pt-4 pb-4 pl-2 pr-2 d-flex justify-content-center">
                {/* Left Sidebar */}
                <Sidebar/>

                {/* Main Content */}
                <Col md="7" className="p-2 d-flex flex-column gap-4">
                    <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
                        <BlogMode />
                    </Card>
                    <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
                        <AllBlogs />
                    </Card>
                </Col>

                {/* Right Sidebar */}
                <Col md="2" className="right_side_bar d-flex flex-column gap-4 p-3 rounded">
                    <Card className="bg-transparent border-0 text-white">
                        <CardBody className="p-0">
                            <div className="d-flex justify-content-between align-items-center pr-2">
                                <h2>Weather</h2>
                                <WiDayCloudy size={32} />
                            </div>
                            <div className="d-flex justify-content-between mt-3 pr-2">
                                <h4>Karachi</h4>
                                <h4>28°C</h4>
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="bg-transparent border-0">
                        <CardBody className="text-white p-0">
                            <h2>Topics</h2>
                            <div className="d-flex flex-column gap-2 mt-3">
                                {["Programming", "Sports", "E-commerce", "Fashion", "AI"].map((topic) => (
                                    <Button key={topic} className="invisible-btn">{topic}</Button>
                                ))}
                            </div>
                        </CardBody>
                    </Card>

                    <Card className="bg-transparent border-0">
                        <CardBody className="text-white p-0">
                            <h2>Chat</h2>
                            <div className="mt-3 p-2 rounded-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="d-flex align-items-center gap-2 mb-3">
                                        <img alt="user_image" className="rounded-circle" width="40" height="40" />
                                        <p className="mb-0">Hassam</p>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;




// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function Home() {
// //     const [commentInput, setCommentInput] = useState("");
// //     const [posts, setPosts] = useState([]);

// //     useEffect(() => {
// //         axios.get("http://localhost:5000/api/posts")
// //              .then(response => setPosts(response.data))
// //              .catch(error => console.error("Error fetching posts:", error));
// //     }, []);

// //     const handleLike = (postId) => {
// //         // Optimistic update
// //         const updatedPosts = posts.map(post => 
// //             post._id === postId ? { ...post, likes: post.likes + 1 } : post
// //         );
// //         setPosts(updatedPosts);

// //         axios.post(`http://localhost:5000/api/posts/like/${postId}`)
// //              .catch(error => {
// //                  console.error("Error liking post:", error);
// //                  // Revert back if error
// //                  setPosts(posts);
// //              });
// //     };

// //     const handleAddComment = (postId, commentText) => {
// //         if (!commentText.trim()) {
// //           return;
// //         } // Prevent adding empty comments
// //         const updatedPosts = posts.map(post => 
// //             post._id === postId ? { ...post, comments: [...post.comments, { text: commentText }] } : post
// //         );
// //         setPosts(updatedPosts);
// //         setCommentInput(''); // Clear input field

// //         axios.post(`http://localhost:5000/api/posts/comment/${postId}`, { text: commentText })
// //              .catch(error => {
// //                  console.error("Error adding comment:", error);
// //                  // Revert back if error
// //                  setPosts(posts);
// //              });
// //     };

// //     return (
// //         <div className="home">
// //             <h2>Recent Posts</h2>
// //             {posts.map((post) => (
// //                 <div key={post._id} className="post">
// //                     <h3>{post.title}</h3>
// //                     <p>{post.content}</p>
// //                     {post.file && (
// //                         <div>
// //                             {post.file.includes(".mp4") ? (
// //                                 <video width="320" height="240" controls>
// //                                     <source src={`http://localhost:5000/uploads/${post.file}`} type="video/mp4" />
// //                                     Your browser does not support the video tag.
// //                                 </video>
// //                             ) : (
// //                                 <img src={`http://localhost:5000/uploads/${post.file}`} alt="Post Media" />
// //                             )}
// //                         </div>
// //                     )}
// //                     <p>Likes: {post.likes}</p>
// //                     <button onClick={() => handleLike(post._id)}>Like</button>
// //                     <p>Comments: {post.comments.length}</p>
// //                     <ul>
// //                         {post.comments.map((comment, index) => (
// //                             <li key={index}>{comment.text}</li>
// //                         ))}
// //                     </ul>
// //                     <input
// //                         type="text"
// //                         placeholder="Add a comment"
// //                         className="comment-input"
// //                         value={commentInput}
// //                         onChange={(e) => setCommentInput(e.target.value)}
// //                     />
// //                     <button
// //                         onClick={() => handleAddComment(post._id, commentInput)}
// //                         className="comment-button"
// //                     >
// //                         Add Comment
// //                     </button>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // }

// // export default Home;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { CiLogout } from "react-icons/ci";
// import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
// import { WiDayCloudy } from "react-icons/wi";
// import AllBlogs from "../components/home_components/all_blogs/all_blogs";
// import BlogMode from "../components/home_components/blog_mode/blog_mode";
// import "../designing/home_page.css";

// function Home() {
//     // const [commentInput, setCommentInput] = useState("");
//     // const [posts, setPosts] = useState([]);

//     // useEffect(() => {
//     //     axios.get("http://localhost:5000/api/posts")
//     //          .then(response => setPosts(response.data))
//     //          .catch(error => console.error("Error fetching posts:", error));
//     // }, []);

//     // const handleLike = (postId) => {
//     //     // Optimistic update
//     //     const updatedPosts = posts.map(post => 
//     //         post._id === postId ? { ...post, likes: post.likes + 1 } : post
//     //     );
//     //     setPosts(updatedPosts);

//     //     axios.post(`http://localhost:5000/api/posts/like/${postId}`)
//     //          .catch(error => {
//     //              console.error("Error liking post:", error);
//     //              // Revert back if error
//     //              setPosts(posts);
//     //          });
//     // };

//     // const handleAddComment = (postId, commentText) => {
//     //     if (!commentText.trim()) {
//     //       return;
//     //     } // Prevent adding empty comments
//     //     const updatedPosts = posts.map(post => 
//     //         post._id === postId ? { ...post, comments: [...post.comments, { text: commentText }] } : post
//     //     );
//     //     setPosts(updatedPosts);
//     //     setCommentInput(''); // Clear input field

//     //     axios.post(`http://localhost:5000/api/posts/comment/${postId}`, { text: commentText })
//     //          .catch(error => {
//     //              console.error("Error adding comment:", error);
//     //              // Revert back if error
//     //              setPosts(posts);
//     //          });
//     // };s

//     return (
//         // <div className="home">
//         //     <h2>Recent Posts</h2>
//         //     {posts.map((post) => (
//         //         <div key={post._id} className="post">
//         //             <h3>{post.title}</h3>
//         //             <p>{post.content}</p>
//         //             {post.file && (
//         //                 <div>
//         //                     {post.file.includes(".mp4") ? (
//         //                         <video width="320" height="240" controls>
//         //                             <source src={`http://localhost:5000/uploads/${post.file}`} type="video/mp4" />
//         //                             Your browser does not support the video tag.
//         //                         </video>
//         //                     ) : (
//         //                         <img src={`http://localhost:5000/uploads/${post.file}`} alt="Post Media" />
//         //                     )}
//         //                 </div>
//         //             )}
//         //             <p>Likes: {post.likes}</p>
//         //             <button onClick={() => handleLike(post._id)}>Like</button>
//         //             <p>Comments: {post.comments.length}</p>
//         //             <ul>
//         //                 {post.comments.map((comment, index) => (
//         //                     <li key={index}>{comment.text}</li>
//         //                 ))}
//         //             </ul>
//         //             <input
//         //                 type="text"
//         //                 placeholder="Add a comment"
//         //                 className="comment-input"
//         //                 value={commentInput}
//         //                 onChange={(e) => setCommentInput(e.target.value)}
//         //             />
//         //             <button
//         //                 onClick={() => handleAddComment(post._id, commentInput)}
//         //                 className="comment-button"
//         //             >
//         //                 Add Comment
//         //             </button>
//         //         </div>
//         //     ))}
//         // </div>

//         <>

//             {/* <div className="home_background_image">
//                 <div className="left_side_bar">
//                     <div className="upper_sidebar">

//                         <div className="appname_and_appimg">
//                             <img alt="app_img" />
//                             <h2>Social App</h2>
//                         </div>

//                         <div className="other_pages_links">
//                             <h4>Profile</h4>
//                             <h4>Create a blog</h4>
//                             <h4>My blogs</h4>
//                             <h4>Settings</h4>
//                         </div>

//                     </div>

//                     <div className="lower_siderbar">
//                         <CiLogout color="white" size={24} />
//                         <h4>Logout</h4>
//                     </div>

//                 </div>


//                 <div className="main_content">
//                     <div></div>
//                     <div className="all_blogs" ></div>
//                 </div>

//                 <div className="right_side_bar">
//                     <div className="upper_sidebar">

//                         <div className="weather">
//                             <div className="Weather_stats">
//                                 <h2>Weather</h2>
//                                 <WiDayCloudy color="white" size={44} />
//                             </div>

//                             <div className="weather_city">
//                                 <h4>Karachi</h4>
//                                 <h4>28°C</h4>
//                             </div>
//                         </div>

//                         <div className="topics">
//                             <div className="topic_heading">
//                                 <h2>Topics</h2>
//                             </div>
//                             <div className="trending_topics">
//                                 <h4>Programming</h4>
//                                 <h4>Sports</h4>
//                                 <h4>E-commerce</h4>
//                                 <h4>Fashion</h4>
//                                 <h4>Ai</h4>
//                             </div>
//                         </div>

//                         <div className="chat_section">
//                             <div className="chat_heading">
//                                 <h2>Chat</h2>
//                             </div>
//                             <div className="chat_with_people">
//                                 <div className="users" >
//                                     <img alt="user_image" />
//                                     <p>Zayahan</p>
//                                 </div>
//                                 <div className="users">
//                                     <img alt="user_image" />
//                                     <p>Zayahan</p>
//                                 </div>
//                                 <div className="users">
//                                     <img alt="user_image" />
//                                     <p>Zayahan</p>
//                                 </div>
//                                 <div className="users">
//                                     <img alt="user_image" />
//                                     <p>Zayahan</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

                    

//                 </div>

//             </div> */}

//             <Container fluid className="home_background_image vh-100 ">
//                 <Row className="h-100 pt-4 pb-4 pl-2 pr-2 flex row gap-4 justify-content-center">
//                     {/* Left Sidebar */}
//                     <Col md="2" className="left_side_bar d-flex flex-column justify-content-between p-3 text-white rounded">
//                         <div>
//                             <div className="d-flex align-items-center gap-3 mb-4">
//                                 <img alt="app_img" className="rounded-circle" width="50" height="50" />
//                                 <h2>Social App</h2>
//                             </div>
//                             <div className="d-flex flex-column gap-3">
//                                 <h4>Profile</h4>
//                                 <h4>Create a blog</h4>
//                                 <h4>My blogs</h4>
//                                 <h4>Settings</h4>
//                             </div>
//                         </div>
//                         <div className="d-flex align-items-center gap-2">
//                             <CiLogout size={24} color="white" />
//                             <h4>Logout</h4>
//                         </div>
//                     </Col>

//                     {/* Main Content */}
//                     <Col md="7" className="p-2 d-flex flex-column gap-4 ">
//                         <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
//                             <BlogMode />
//                         </Card>
//                         <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
//                             <AllBlogs />
//                         </Card>
//                     </Col>

//                     {/* Right Sidebar */}
//                     <Col md="2" className="right_side_bar d-flex flex-column gap-4 p-3 rounded">
//                         <Card className="bg-transparent border-0 text-white">
//                             <CardBody className="p-0">
//                                 <div className="d-flex justify-content-between align-items-center pr-2">
//                                     <h2>Weather</h2>
//                                     <WiDayCloudy size={32} />
//                                 </div>
//                                 <div className="d-flex justify-content-between mt-3 pr-2">
//                                     <h4>Karachi</h4>
//                                     <h4>28°C</h4>
//                                 </div>
//                             </CardBody>
//                         </Card>

//                         <Card className="bg-transparent border-0">
//                             <CardBody className="text-white p-0">
//                                 <h2 className="text-white">Topics</h2>
//                                 <div className="d-flex flex-column gap-2  mt-3">
//                                     {["Programming", "Sports", "E-commerce", "Fashion", "AI"].map((topic) => (
//                                         <Button key={topic} color="" className="rounded-pill bg_color text-start bg-[red] text-white">
//                                             {topic}
//                                         </Button>
//                                     ))}
//                                 </div>
//                             </CardBody>
//                         </Card>

//                         <Card className="bg-transparent border-0">
//                             <CardBody className="text-white p-0 ">
//                                 <h2 className="text-white">Chat</h2>
//                                 <div className="mt-3 p-2 rounded-4">
//                                     {[...Array(4)].map((_, i) => (
//                                         <div key={i} className="d-flex align-items-center gap-2 mb-3">
//                                             <img alt="user_image" className="rounded-circle" width="40" height="40" />
//                                             <p className="mb-0">Zayahan</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>

//         </>
//     );
// }

// export default Home;
