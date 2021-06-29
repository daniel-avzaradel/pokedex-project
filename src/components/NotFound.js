import React from 'react';
import './styles/Not-found.css'

const NotFound = () => {
    return(
        <div className="not-found">
        <h1 style={{color: 'salmon', textAlign: 'center'}}>404 PAGE NOT FOUND</h1>
        <br/>
        <a href="/">Go Back</a>
        </div>
    )
}

export default NotFound;