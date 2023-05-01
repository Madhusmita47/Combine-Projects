import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [TotalSum, setTotalSum] = useState()


    const getOutput = async (e) => {
        e.preventDefault();

        let result = await fetch(`http://localhost:3001/addNumber`, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ a, b })
        })

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            setTotalSum(result.data)
        }
    }
    

    return (
        <div>
            Home
            <br />
            <Link to="/profile">
                <button>
                    Go to Profile
                </button>
            </Link>

            <div>
                <form onSubmit={getOutput}>
                    <input type="number" value={a} onChange={(e) => setA(e.target.value)} /><br />
                    <input type="number" value={b} onChange={(e) => setB(e.target.value)} /><br />
                    <button type='submit'> Submit</button>
                </form>
            </div>

            <input type="text" value={TotalSum} />

        </div>
    )
}

export default Home