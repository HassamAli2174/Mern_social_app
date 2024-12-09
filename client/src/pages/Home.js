import React from "react";
import { Container, Row, Col, Card } from 'reactstrap';
import AllBlogs from "../components/home_components/all_blogs/all_blogs";
import BlogMode from "../components/home_components/blog_mode/blog_mode";
import Sidebar from "../components/Left_sideBar_Component/left_sidebar";
import RightSidebar from "../components/Right_sideBar_Component/right_sidebar";
import "../designing/home_page.css";

function Home() {
    return (
        <Container fluid className="home_background_image vh-100">
            <Row className="h-100 pt-4 pb-4 pl-2 pr-2 d-flex justify-content-center">
                {/* Left Sidebar */}
                
                    <Sidebar />
                

                {/* Main Content */}
                <Col md="8" className="p-2 d-flex flex-column gap-4 main_content">
                    <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
                        <BlogMode />
                    </Card>
                    <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
                        <AllBlogs />
                    </Card>
                </Col>

                {/* Right Sidebar */}
                    <RightSidebar />
                
            </Row>
        </Container>
    );
}

export default Home;



// import React from "react";
// import { CiLogout, CiHome } from "react-icons/ci";
// import { WiDayCloudy } from "react-icons/wi";
// import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { FaUserAlt, FaBlog, FaRegListAlt, FaCog } from 'react-icons/fa';
// import AllBlogs from "../components/home_components/all_blogs/all_blogs";
// import BlogMode from "../components/home_components/blog_mode/blog_mode";
// import Sidebar from "../components/Left_sideBar_Component/left_sidebar";
// import "../designing/home_page.css";
// import RightSidebar from "../components/Right_sideBar_Component/right_sidebar";

// function Home() {
//     return (
//         <Container fluid className="home_background_image vh-100">
//             <Row className="h-100 pt-4 pb-4 pl-2 pr-2 d-flex justify-content-center">
//                 {/* Left Sidebar */}
//                 <Sidebar/>

//                 {/* Main Content */}
//                 <Col md="7" className="p-2 d-flex flex-column gap-4">
//                     <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
//                         <BlogMode />
//                     </Card>
//                     <Card className="bg-transparent p-0 mr-3 ml-3 border-0">
//                         <AllBlogs />
//                     </Card>
//                 </Col>

//                 {/* Right Sidebar */}
//                 <RightSidebar />
//             </Row>
//         </Container>
//     );
// }

// export default Home;

