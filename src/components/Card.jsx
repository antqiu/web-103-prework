import React from 'react'
import { useEffect } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import { FaInfoCircle, FaPencilAlt, FaYoutube } from 'react-icons/fa'


const Card = ({ creator }) => {

    // useEffect(() => {
    //     console.log(creator)
    // })

    return (
        <div className="card" style={{ backgroundImage: `url(${creator.imageURL})`, backgroundSize: 'cover' }}>
            <h3 className="title">{creator.name}</h3>
            <div className="icons">
                <Link to={`/${creator.id}`}><FaInfoCircle /></Link>
                <Link to={`/edit/${creator.id}`}><FaPencilAlt /></Link>
                <a href={creator.url} target="_blank"><FaYoutube /></a>
            </div>
            <p>{creator.description}</p>
        </div >
    )
}

export default Card