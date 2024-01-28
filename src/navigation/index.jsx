/*
 * Created on Sun Jan 28 2024
 *
 * Sandeep, ID 301400662
 */

import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className='navbar-nav'>
                <Link  to="/"><img src="logo.png" className="d-inline-block align-top rounded-circle" width="40" height="40"></img></Link>
                <Link className="nav-item nav-link" to="/">Home</Link> | 
                <Link className="nav-item nav-link" to="/about">About Me</Link> |
                <Link className="nav-item nav-link" to="/projects">Projects</Link> | 
                <Link className="nav-item nav-link" to="/services">Services</Link> | 
                <Link className="nav-item nav-link" to="/contact">Contact</Link>
                </div>
            </nav>
            <hr />
        </>
    )
}