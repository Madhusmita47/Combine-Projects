import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Profile() {
    return (
        <div className='home'>
            <h1>Profile</h1>
            <h5>Name: <b>Madhusmita</b></h5>
            <h5>Gender: <b>Female</b></h5>
            <h5>Address: <b>Bhubaneswar</b></h5>

            <Link to="/">
                <button>
                    Go to Home
                </button>
            </Link>
        </div>
    )
}

export default Profile