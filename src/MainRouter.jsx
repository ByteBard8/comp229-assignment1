/*
 * Created on Sun Jan 28 2024
 *
 * Sandeep, ID 301400662
 */

import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import NavBar from './Navigation'
import Footer from './footer'
import Projects from './pages/projects'
import Services from './pages/services'
import Contact from './pages/contact'
const MainRouter = () => {
    return (
        <div style={{background: "linear-gradient(-90deg, #05445E, #D4F1F4)"}}>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default MainRouter