import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import MyBooks from './components/MyBooks';
import BookSearch from './components/BookSearch';
import Navbar from "./components/Navbar";

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mybooks" element={<MyBooks />} />
                <Route path="/findbooks" element={<BookSearch />} />
            </Routes>
        </BrowserRouter>
    );
}