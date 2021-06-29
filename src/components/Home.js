import React from 'react';
import pikachu003 from '../img/pikachu003.png';
import { Link } from 'react-router-dom';
import './styles/Home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <>
            <div className="home">
                <img src={pikachu003} alt=""/>
                <Link to='/pokedex'><button className="enter">ENTER</button></Link>
            </div>
            <footer>
                All rights reserved. Pokedex WebApp was created by Daniel Avzaradel for his Final Project at Developers Institute - JavaScript Full Stack DeveloperBootcamp
            </footer>
            </>
        )
    }
}

export default Home;