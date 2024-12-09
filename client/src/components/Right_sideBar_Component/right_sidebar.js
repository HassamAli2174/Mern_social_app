// src/components/RightSidebar/RightSidebar.js
import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { Col } from 'reactstrap';
import { WiDayCloudy } from 'react-icons/wi';
import '../Right_sideBar_Component/right_sidebar.css'

const RightSidebar = () => {
    return (
        <Col md="2" className="right_side_bar d-flex flex-column">
            <div className="gap-4 p-3 rounded">
                {/* Weather Card */}
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

                {/* Topics Card */}
                <Card className="bg-transparent border-0">
                    <CardBody className="text-white p-0">
                        <h2>Topics</h2>
                        <div className="d-flex flex-column gap-2 mt-3">
                            {["Programming", "Sports", "E-commerce", "Fashion", "AI"].map((topic) => (
                                <Button key={topic} color="" className="rounded-pill bg_color text-start bg-[red] text-white">
                                    {topic}
                                </Button>
                            ))}
                        </div>
                    </CardBody>
                </Card>

                {/* Chat Card */}
                <Card className="bg-transparent border-0">
                    <CardBody className="text-white p-0">
                        <h2>Chat</h2>
                        <div className="mt-3 p-2 rounded-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="d-flex align-items-center gap-2 mb-3">
                                    <img alt="user_image" className="rounded-circle" width="40" height="40" />
                                    <p className="mb-0">Zayahan</p>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};

export default RightSidebar;
