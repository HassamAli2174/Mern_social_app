import React, { useState } from 'react';
import { Container, Row, Col, Button, } from 'reactstrap';
import Sidebar from '../components/Left_sideBar_Component/left_sidebar';
import "../designing/profile_page.css";
// Import images from the assets folder
import image1 from '../assets/Model.jpeg';
import image2 from '../assets/hichy.png';
import image3 from '../assets/Card.jpeg';
import image4 from '../assets/Model.jpeg';
import image5 from '../assets/hichy.png';
import image6 from '../assets/Card.jpeg';
import image7 from '../assets/Model.jpeg';
import image8 from '../assets/hichy.png';
import image9 from '../assets/Card.jpeg';

const ProfilePage = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    Profession: "Doctor",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    city: "New York",
    imageUrl: image2,
    blogs: 34,
  });

  // Example images for the 3x3 grid
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    // <Container  className="profile-page ">
    //   <Row className="">
    //     {/* Left Sidebar */}
    //     <Sidebar />


    //     {/* Main Content Area (Profile and Image Grid) */}
    //     <Col md={10} className="main-content p-0">
    //       <div className="profile-info-container bg-dark">
    //         {/* <div className="profile-info">
    //           <h2>Profile Information</h2>
    //           <div className="bg-color-p">
    //             <Row className="profile-row">
    //               <Col md={4} className="profile-image-col">
    //                 <div className="profile-image">
    //                   <img src={user.imageUrl} alt="Profile" />
    //                 </div>
    //               </Col>
    //               <Col md={8} className="profile-details-col">
    //                 <div className="profile-details">
    //                   <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
    //                   <p><strong>Profession:</strong> {user.Profession} </p>
    //                   <p><strong>Email:</strong> {user.email}</p>
    //                   <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
    //                   <p><strong>City:</strong> {user.city}</p>
    //                 </div>
    //               </Col>
    //             </Row>
    //           </div>
    //           <Button className="edit-button">Edit Profile</Button>
    //         </div> */}



    //         {/* Horizontal Rule */}
    //         <hr className="divider" />

    //         {/* 3x3 Grid for Images */}
    //         <div className="image-grid">
    //           <Row>
    //             {images.map((image, index) => (
    //               <Col key={index} md={4} className="image-item">
    //                 <img src={image} alt={`Image ${index + 1}`} className="image-grid-img" />
    //               </Col>
    //             ))}
    //           </Row>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>

    <Container fluid className="profile-page">
      <Row className="h-100">
        {/* Left Sidebar */}
        <Col md={2} className="p-0 sidebar-container">
          <Sidebar />
        </Col>

        {/* Main Content Area */}
        <Col md={10} className="main-content p-0 text-white">
          <div className="profile-info-container ">

            <Row className=''>
              <Col className='profile-image-section' >
                <img src={user.imageUrl} alt='profile-image' className='w-100 rounded-4' />
              </Col>
              <Col className='p-0' >
                <h2 className='user-name'>{user.firstName + user.lastName}</h2>
                <Row className=' flex align-items-center row'>
                  <div className='w-50'><p className='fs-4'><strong>Email</strong> {user.email}</p></div>
                  <div className='w-50'><p className='fs-4'><strong>Number</strong> {user.phoneNumber}</p></div>
                </Row>
                <Row className=' flex align-items-center row'>
                  <div className='w-50'><p className='fs-4'><strong>City</strong> {user.city}</p></div>
                  <div className='w-50'><p className='fs-4'><strong>Profession</strong> {user.Profession}</p></div>
                </Row>
                <Row className=' flex align-items-center row'>
                  <div className='w-50'><p className='fs-4'><strong>Blogs</strong> {user.blogs}</p></div>
                </Row>
              </Col>
            </Row>
            {/* Horizontal Rule */}
            <hr className="divider" />

            {/* 3x3 Grid for Images */}
            <div className="image-grid">
              <Row className="g-3">
                {images.map((image, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={10} xl={4} className="image-item">
                    <img src={image} alt={`Image ${index + 1}`} className="image-grid-img" />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  );
};

export default ProfilePage;
