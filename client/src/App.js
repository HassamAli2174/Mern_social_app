import React from 'react';
import Header from "./components/Header";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EditCreatePost from './pages/EditCreatePost';
import './App.css';

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
                <Routes>
                    <Route path="/create" element={<EditCreatePost />} />
                    <Route path="/" element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            {/* </div> */}
        </>
    );
}

export default App;
