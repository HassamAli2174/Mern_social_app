import React from 'react';
import { Container, Row, Col, Form, FormGroup, CardBody, Input, Button } from 'reactstrap';
import Sidebar from '../components/Left_sideBar_Component/left_sidebar';
import "../designing/account_page.css";
import { IoPersonOutline } from 'react-icons/io5';
import { CiTextAlignLeft, CiCalendar } from 'react-icons/ci';
import { LuImageUp, LuPhone } from 'react-icons/lu';
import { AiOutlineMail } from "react-icons/ai";
import { PiCity } from "react-icons/pi";

function AccountPage() {
    return (
        // <Container fluid className="account-page">
        //     <Row className="d-flex gap-4 align-items-center justify-content-between">
        //         <Sidebar />
        //         <Col md={10} className="account-info">
        //             <h2>Account Information</h2>
        //             <div className="bg-color">
        //                 {/* <Form className="account-form row">  Added row for form layout */}
        //                 <Form className="row">  {/* Added row for form layout */}
        //                     <div className="profile-image">
        //                         <img src="path_to_your_image.jpg" alt="Profile" />
        //                     </div>
        //                     <Row>
        //                         <Col md={6}> {/* First column for inputs */}

        //                             <FormGroup className="form-group">
        //                                 <Label for="firstName">First Name</Label>
        //                                 <Input className="form_input" type="text" name="firstName" id="firstName" placeholder="First Name" />
        //                             </FormGroup>
        //                             <FormGroup className="form-group">
        //                                 <Label for="email">Email</Label>
        //                                 <Input className="form_input" type="email" name="email" id="email" placeholder="Email" />
        //                             </FormGroup>
        //                             <FormGroup className="form-group">
        //                                 <Label for="dob">Date of Birth</Label>
        //                                 <Input className="form_input" type="date" name="dob" id="dob" />
        //                             </FormGroup>
        //                         </Col>
        //                         <Col md={6}> {/* Second column for inputs */}
        //                             <FormGroup className="form-group">
        //                                 <Label for="lastName">Last Name</Label>
        //                                 <Input className="form_input"type="text" name="lastName" id="lastName" placeholder="Last Name" />
        //                             </FormGroup>
        //                             <FormGroup className="form-group">
        //                                 <Label for="phoneNumber">Phone Number</Label>
        //                                 <Input className="form_input" type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
        //                             </FormGroup>
        //                             <FormGroup className="form-group">
        //                                 <Label for="city">City</Label>
        //                                 <Input className="form_input" type="text" name="city" id="city" placeholder="City" />
        //                             </FormGroup>
        //                         </Col>
        //                     </Row>
        //                     <Row >
        //                     <Col md={{ size: 4, offset: 2 }}>
        //                         <Button type="submit" className="btn-block update-button">Update</Button>
        //                     </Col>
        //                     <Col md={4}>
        //                         <Button type="button" className="btn-block cancel-button">Cancel</Button>
        //                     </Col>
        //                 </Row>
        //                 </Form>
        //             </div>

        //         </Col>
        //     </Row>
        // </Container >

        <Container fluid className="account-page">
            <Row className="d-flex row gap-2 align-items-center justify-content-end">
                {/* Sidebar */}

                <Sidebar />


                {/* Account Info Section */}
                <Col xs={12} md={10} className="account-info p-4">
                    <h2 className="text-center text-md-start">Account Information</h2>
                    <div className="bg-color">
                        <Form className="row g-3 text-white">
                            {/* Profile Image */}
                            <Col xs={12} className="text-center">
                                <div className="profile-image">
                                    <LuImageUp />
                                    <Input type='flie' className=' text-white border-0 rounded-4' />
                                    <img src="path_to_your_image.jpg" alt="Profile" />
                                </div>
                            </Col>

                            {/* Form Inputs */}
                            <Col xs={12} md={6}>
                                <FormGroup className="form-group">
                                    <CardBody className='d-flex align-items-center gap-2 p-2 rounded-4 input-container'>
                                        <IoPersonOutline size={32} color="white" />
                                        <Input className="form_input" type="text" name="firstName" id="firstName" placeholder="First Name" />
                                    </CardBody>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <CardBody className='d-flex align-items-center gap-2 p-2 rounded-4 input-container'>
                                        <AiOutlineMail size={32} color='white' />
                                        <Input className="form_input" type="email" name="email" id="email" placeholder="Email" />
                                    </CardBody>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <CardBody className='d-flex align-items-center gap-2 p-2 rounded-4 input-container'>
                                        <CiCalendar size={32} color='white' />
                                        <Input className="form_input" type="date" placeholder='Date of Birth' name="dob" id="dob" />
                                    </CardBody>
                                </FormGroup>
                            </Col>

                            <Col xs={12} md={6}>
                                <FormGroup className="form-group">
                                    <CardBody className='d-flex align-items-center gap-2 p-2 rounded-4 input-container'>
                                        <IoPersonOutline size={32} color="white" />
                                        <Input className="form_input" type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                    </CardBody>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <CardBody className='d-flex align-items-center gap-2 p-2 rounded-4 input-container'>
                                        <LuPhone size={32} color='white' />
                                        <Input className="form_input" type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                                    </CardBody>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <CardBody className='d-flex align-items-center gap-2 p-2 rounded-4 input-container'>
                                        <PiCity size={32} color='white' />
                                        <Input className="form_input" type="text" name="city" id="city" placeholder="City" />
                                    </CardBody>
                                </FormGroup>
                            </Col>

                            {/* Buttons */}
                            <Col xs={12} sm={6} className="text-center">
                                <Button type="submit" className="btn-block update-button w-50">Update</Button>
                            </Col>
                            <Col xs={12} sm={6} className="text-center">
                                <Button type="button" className="btn-block cancel-button w-50">Cancel</Button>
                            </Col>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AccountPage;
