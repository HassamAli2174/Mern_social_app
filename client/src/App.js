import React from 'react';
import Header from "./components/Header";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EditCreatePost from './pages/EditCreatePost';
import './App.css';
import AccountPage from './pages/Accounts';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <>
            {/* <Header /> */}
            {/* <div className="app">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Create Post</Link>
                        </li>
                    </ul>
                </nav> */}
            <div className="app-background">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/accounts" element={<AccountPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/create-blog" element={<EditCreatePost />} />
                    <Route path="/my-blogs" />
                    <Route path="/settings" />
                </Routes>
            </div>

            {/* </div> */}
        </>
    );
}

export default App;
