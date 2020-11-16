import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/Logo/Logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-light">
                <Link> <img src={logo} alt=''/></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link>Service</Link>
                    </li>
                    <li class="nav-item">
                        <Link>Concerns</Link>
                    </li>
                    <li class="nav-item">
                        <Link>Event</Link>
                    </li>
                    <li class="nav-item">
                        <Link>Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link><button>Login</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;