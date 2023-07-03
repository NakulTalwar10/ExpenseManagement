import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'


import axios from 'axios'

const Signup = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://expensebackend-lxm8.onrender.com/api/users/register', { ...user })
            navigate('/')
            console.log(response)
        } catch (err) {
            setError(err.response.data.message)
        }
    }

    return (
        <div>
            <div className='flex justify-center my-20'>
                <div className="form-box">
                    <form className="form" onSubmit={handleSubmit}>
                        <span className="title">Sign up</span>
                        <span className="subtitle">Create a free account with your email.</span>
                        {error && <div className="error">{error}</div>}
                        <div className="form-container">
                            <input type="text" className="input" placeholder="Full Name" name={'name'} value={user.name} onChange={handleChange} />
                            <input type="email" className="input" placeholder="Email" name={'email'} value={user.email} onChange={handleChange}/>
                            <input type="password" className="input" placeholder="Password" name={'password'} value={user.password} onChange={handleChange} />
                        </div>
                        <button type="submit" className="button">Sign up</button>
                    </form>
                    <div className="form-section">
                        <p>Have an account? <Link to="/">Log in</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
