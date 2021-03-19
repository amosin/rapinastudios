import React from 'react'
import Placeholder from '../assets/placeholder.svg'
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {

    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <a className="navbar-brand" href="/"><img src={Placeholder} alt=""/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">

        <NavLink exact to="/">
            <li className="nav-link btn btn-outline-primary rounded-pill">
            HOME
            </li>
        </NavLink>     

        <NavLink exact to="/about">
            <li className="nav-item nav-link btn btn-outline-primary rounded-pill">
                ABOUT US
            </li>
        </NavLink>
        
        <li className="nav-item">
        <a className="nav-link btn btn-outline-primary rounded-pill" target="_blank" href="https://rapinastudios.medium.com/">NEWS</a>
        </li>

        <NavLink exact to="/nft">
            <li className="nav-item nav-link btn btn-outline-primary rounded-pill">
            NFT
            </li>
        </NavLink>
        
        <li className="nav-item">
        <a className="nav-link btn btn-outline-primary rounded-pill disabled" href="#">GAMES</a>
        </li>
    </ul>
    </div>
    </nav>
    )
}

export default Navbar
