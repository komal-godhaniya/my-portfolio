import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    // State to track the active button
    const [activeButton, setActiveButton] = useState("");

    // Function to handle button click
    const handleButtonClick = (name) => {
        setActiveButton(name); // Set the active button
    };

    return (
        <div id="part-3" style={{ display: "flex", gap: "10px" }}>
            <Link to="/">
                <button
                    className={activeButton === "home" ? "active" : ""}
                    onClick={() => handleButtonClick("home")}
                >
                    <i className="fa-solid fa-house"></i>
                    {activeButton === "home" && <span> Home</span>}
                </button>
            </Link>
            <Link to="/About">
                <button
                    className={activeButton === "about" ? "active" : ""}
                    onClick={() => handleButtonClick("about")}
                >
                    <i className="fa-solid fa-user"></i>
                    {activeButton === "about" && <span> About</span>}
                </button>
            </Link>
            <Link to="/Portfolio">
                <button
                    className={activeButton === "portfolio" ? "active" : ""}
                    onClick={() => handleButtonClick("portfolio")}
                >
                    <i className="fa-solid fa-briefcase"></i>
                    {activeButton === "portfolio" && <span> Portfolio</span>}
                </button>
            </Link>
            <Link to="/Contact">
                <button
                    className={activeButton === "contact" ? "active" : ""}
                    onClick={() => handleButtonClick("contact")}
                >
                    <i className="fa-solid fa-envelope"></i>
                    {activeButton === "contact" && <span> Contact</span>}
                </button>
            </Link>
            <Link to="/Blog">
                <button
                    className={activeButton === "blog" ? "active" : ""}
                    onClick={() => handleButtonClick("blog")}
                >
                    <i className="fa-solid fa-comments"></i>
                    {activeButton === "blog" && <span> Blog</span>}
                </button>
            </Link>
        </div>
    );
}
