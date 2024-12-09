import React from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { Col, Button } from 'reactstrap';
import { CiHome, CiLogout, CiApple } from "react-icons/ci";
import { FaUserAlt, FaBlog, FaRegListAlt, FaCog } from 'react-icons/fa';
import '../Left_sideBar_Component/left_sidebar.css'; 

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Function to determine if the path is active
    const isActive = (path) => {
        return location.pathname === path;
    };
    const handleLogout = () => {
        // Redirect user to the login page
        navigate('/login');
    };

    return (
        <Col md="2" className="left_side_bar d-flex flex-column justify-content-between p-3 text-white rounded">
            <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                    {/* <img alt="app_img" className="rounded-circle" width="50" height="50" /> */}
                    <CiApple className="sidebar-icon rounded-circle"  width="50" height="50" size={50} />
                    <h2>Social App</h2>
                </div>
                <div className="d-flex flex-column gap-3">
                    <Link to="/" className={`invisible-btn ${isActive('/') ? 'active' : ''}`}>
                        <CiHome className="sidebar-icon" size={24} /> Home
                    </Link>
                    <Link to="/accounts" className={`invisible-btn ${isActive('/accounts') ? 'active' : ''}`}>
                        <FaUserAlt className="sidebar-icon" size={20} /> Account
                    </Link>
                    <Link to="/profile" className={`invisible-btn ${isActive('/profile') ? 'active' : ''}`}>
                        <FaUserAlt className="sidebar-icon" size={20} /> Profile
                    </Link>
                    <Link to="/create-blog" className={`invisible-btn ${isActive('/create-blog') ? 'active' : ''}`}>
                        <FaBlog className="sidebar-icon" size={20} /> Create a blog
                    </Link>
                    <Link to="/my-blogs" className={`invisible-btn ${isActive('/my-blogs') ? 'active' : ''}`}>
                        <FaRegListAlt className="sidebar-icon" size={20} /> My blogs
                    </Link>
                    <Link to="/settings" className={`invisible-btn ${isActive('/settings') ? 'active' : ''}`}>
                        <FaCog className="sidebar-icon" size={20} /> Settings
                    </Link>
                </div>
            </div>
            <div className="d-flex align-items-center gap-2">
                <Button onClick={handleLogout} className="invisible-btn"><CiLogout className="sidebar-icon" size={24} /> Logout</Button>
            </div>
        </Col>
    );
};

export default Sidebar;
