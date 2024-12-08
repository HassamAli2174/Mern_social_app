import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input,Button  } from 'reactstrap';
import Sidebar from '../components/Left_sideBar_Component/left_sidebar';
import "../designing/account_page.css";

function AccountPage() {
    return (
        <Container fluid className="account-page">
            <Row className="d-flex align-items-center justify-content-center">
                <Sidebar />
                <Col md={9} className="account-info">
                    <h2>Account Information</h2>
                    <div className="bg-color">
                        {/* <Form className="account-form row">  Added row for form layout */}
                        <Form className="">  {/* Added row for form layout */}
                            <div className="profile-image">
                                <img src="path_to_your_image.jpg" alt="Profile" />
                            </div>
                            <Row>
                                <Col md={6}> {/* First column for inputs */}

                                    <FormGroup className="form-group">
                                        <Label for="firstName">First Name</Label>
                                        <Input className="form_input" type="text" name="firstName" id="firstName" placeholder="First Name" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="email">Email</Label>
                                        <Input className="form_input" type="email" name="email" id="email" placeholder="Email" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="dob">Date of Birth</Label>
                                        <Input className="form_input" type="date" name="dob" id="dob" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}> {/* Second column for inputs */}
                                    <FormGroup className="form-group">
                                        <Label for="lastName">Last Name</Label>
                                        <Input className="form_input"type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="phoneNumber">Phone Number</Label>
                                        <Input className="form_input" type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Label for="city">City</Label>
                                        <Input className="form_input" type="text" name="city" id="city" placeholder="City" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                            <Col md={{ size: 4, offset: 2 }}>
                                <Button type="submit" className="btn-block update-button">Update</Button>
                            </Col>
                            <Col md={4}>
                                <Button type="button" className="btn-block cancel-button">Cancel</Button>
                            </Col>
                        </Row>
                        </Form>
                    </div>

                </Col>
            </Row>
        </Container >
    );
}

export default AccountPage;
