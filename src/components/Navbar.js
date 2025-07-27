// import React, { useState } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // set tabs
    const navItems = [
        { label: "Samples", path: "samples" },
        { label: "Blog", path: "blog" },
        { label: "About", path: "about" },
        { label: "Contact Us", path: "contact-us" }
    ]
    // set dropdown items
    const dropdownItems = ["Sign in", "Register"]
    // to handle active tab class
    const [selected, setSelected] = useState(-1);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light border-bottom p-3 fixed-top">
                <div className="container-fluid d-flex justify-content-between align-content-center">
                    {/* logo */}
                    <Link className="navbar-brand fw-bold display-5" to="/">BucketList</Link>

                    {/* Centered Links */}
                    <div className="navbar-nav fw-bold mx-auto">
                        {navItems.map(({ label, path }, index) => (
                            <Link className={selected === index ? "nav-link me-4 active" : "nav-link me-4"}
                                key={path}
                                to={`/${path}`}
                                onClick={() => setSelected(index)}
                            >
                                {label}
                            </Link>))}
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
                        {/* dropdown items  */}
                        <ul className="dropdown-menu me-4" aria-labelledby="userDropdown">
                            <li>{dropdownItems.map((dropdownItems) => (
                                <a className="dropdown-item" href={`/${dropdownItems}`} key={dropdownItems}>{dropdownItems}</a>
                            ))}</li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}
export default Navbar;