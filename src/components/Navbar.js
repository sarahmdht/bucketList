// import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light border-bottom p-3 fixed-top">
                <div className="container-fluid d-flex justify-content-between align-content-center">
                    {/* logo */}
                    <Link className="navbar-brand fw-bold display-5" to="/">BucketList</Link>

                    {/* Centered Links */}
                    <div className="navbar-nav fw-bold mx-auto">
                        <Link className="nav-link me-4" to="/samples">Samples</Link>
                        <Link className="nav-link me-4" to="/blog">Blog</Link>
                        <Link className="nav-link me-4" to="/about">About</Link>
                        <Link className="nav-link me-4" to="/contactus">Contact Us</Link>
                        </div>

                    {/* user button  */}
                    <div className="dropdown">
                        <button
                            className="btn btn-success rounded-pill text-white dropdown-toggle d-flex align-items-center"
                            type="button"
                            id="userDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                           Log in
                        </button>

                        <ul className="dropdown-menu me-4" aria-labelledby="userDropdown">
                            <li><a className="dropdown-item" href="/signin">Sign In</a></li>
                            <li><a className="dropdown-item" href="/register">Register</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
