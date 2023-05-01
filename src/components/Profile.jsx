import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
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