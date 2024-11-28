import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div id="part-3">
            <Link to="/">
                <button>
                    <i className="fa-solid fa-house"></i>
                </button>
            </Link>
            <Link to="/About">
                <button>
                    <i className="fa-solid fa-user"></i>
                </button>
            </Link>
            <Link to="/Portfolio">
                <button>
                    <i className="fa-solid fa-briefcase"></i>
                </button>
            </Link>
            <Link to="/Contact">
                <button>
                    <i className="fa-solid fa-envelope"></i>
                </button>
            </Link>
            <Link to="/Blog">
                <button>
                    <i className="fa-solid fa-comments"></i>
                </button>
            </Link>
        </div>
    );
}
