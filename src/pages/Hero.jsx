import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <h1>Creatorverse</h1>
            <div className="btns">
                <Link className="btn" to="/">View All Creators</Link>
                <Link className="btn" to="/new">Add a Creator</Link>
            </div>
            <hr></hr>
        </div>
    )
}

export default Hero