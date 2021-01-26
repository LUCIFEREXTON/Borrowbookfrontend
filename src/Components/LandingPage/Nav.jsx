import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <nav id="menu">
            <div className="inner">
            <h2>Menu</h2>
            <ul>
                <li><NavLink
                        exact 
                        to="/"
                        activeStyle={{
                            fontWeight:'bold',
                            color:'pink'
                        }} className="active">Home</NavLink></li>
                <li><NavLink 
                        to="/products"
                        activeStyle={{
                            fontWeight:'bold',
                            color:'pink'
                        }}>Products</NavLink></li>
                <li>
                    <NavLink to="/about" className="dropdown-toggle">About</NavLink>
                    <ul>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/terms">Terms</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            </div>
            <NavLink className="close" to="#menu">Close</NavLink>
        </nav>
    )
}
