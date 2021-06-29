import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
            <div>
            <h1>Pokedex</h1>
            <p>by: Daniel Avzaradel</p>
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/' className="li-link">Home</NavLink></li>
                    <li><NavLink to='/pokedex' className="li-link">Pokedex</NavLink></li>
                    <li><NavLink to='/myteams' className="li-link">My Teams</NavLink></li>
                    <li><NavLink to='/signup' className="li-link"><button className="signup">Sign Up / Log In</button></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;