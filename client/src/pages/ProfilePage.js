import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
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
    Profession:"Doctor",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    city: "New York",
    imageUrl: image2
  });

  // Example images for the 3x3 grid
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    <Container fluid className="profile-page">
      <Row className="">
        {/* Left Sidebar */}
          <Sidebar />
        

        {/* Main Content Area (Profile and Image Grid) */}
        <Col md={10} className="main-content">
          <div className="profile-info-container">
            <div className="profile-info">
              <h2>Profile Information</h2>
              <div className="bg-color-p">
                <Row className="profile-row">
                  <Col md={4} className="profile-image-col">
                    <div className="profile-image">
                      <img src={user.imageUrl} alt="Profile" />
                    </div>
                  </Col>
                  <Col md={8} className="profile-details-col">
                    <div className="profile-details">
                      <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                      <p><strong>Profession:</strong> {user.Profession} </p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                      <p><strong>City:</strong> {user.city}</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <Button className="edit-button">Edit Profile</Button>
            </div>

            {/* Horizontal Rule */}
            <hr className="divider" />

            {/* 3x3 Grid for Images */}
            <div className="image-grid">
              <Row>
                {images.map((image, index) => (
                  <Col key={index} md={4} className="image-item">
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
