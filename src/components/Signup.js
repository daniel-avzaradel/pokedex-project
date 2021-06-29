import React, {useState} from 'react'
import './styles/Signup.css'

function Signup({pokemon}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dragonite = pokemon.filter(item => {
        if(item.name === 'dragonite') {
            return item
        }
    })

    const fetchLogin = (e) => {  
        e.preventDefault();
        console.log(email, password);
        fetch('http://localhost:5000/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({email, password})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="body-page">

            <div className="signup-page">
            <img src={dragonite[0].sprites.other.dream_world.front_default} alt="" />

                <div className="account-div">
                    <div className="signup-div">
                    <h1>SIGN UP</h1>
                    <p>Create your new account.</p>
                    <hr />
                    <form action="/signup" method="POST" className="login-form">
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="Submit" className="btn-login">Sign Up</button>
                    </form>
                    </div>
                    <div className="signup-div">
                    <h1>LOG IN</h1>
                    <p>Enter your credentials.</p>
                    <hr />
                    <form className="login-form" onSubmit={(e) => fetchLogin(e)} >
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button type="Submit" className="btn-login">Log In</button>
                    </form>
            </div>
            </div>
            
            </div>
        </div>
    )
}

export default Signup
