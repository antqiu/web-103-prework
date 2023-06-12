import React from 'react'
import "./ShowCreators.css"
import Card from "../components/Card"

const ShowCreators = ({ creators }) => {


    return (
        <div>
            <h2>All Creators</h2>
            <div className="grid-container">
                {creators.map((creator) => (<Card key={creator.id} creator={creator} />))}
            </div>
        </div>
    )
}

export default ShowCreators