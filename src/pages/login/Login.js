import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate, } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://expensebackend-lxm8.onrender.com/api/users/login', { email, password })
            localStorage.setItem('token', response.data.token)
            console.log(response)
            if (!response.data.token){
                setError('Invalid Email and Password')
            } else {
                const token = response.data.token;
                const userResponse = await axios.get('https://expensebackend-lxm8.onrender.com/api/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                localStorage.setItem('userName', userResponse.data.name);
                console.log("Navigating to home page...")
                navigate('/home')
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error)
            } else {
                setError('Something went wrong. Please try again later.')
            }
        }
    }
    

    return (
        <div>
            <div className='flex justify-center my-32'>
                <div className="form-box">
                    <form className="form" onSubmit={handleSubmit}>
                        <span className="title">Login</span>
                        <span className="subtitle">Welcome to our website</span>
                        {error && <div className="error">{error}</div>}
                        <div className="form-container">
                            <input type="email" className="input" placeholder="Email" value={email} onChange={handleEmailChange} required />
                            <input type="password" className="input" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <div className="form-section">
                        <p>Haven't an account? <Link to="/signup">Sign-Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login