import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import { Link } from 'react-router-dom'
import "./ViewCreator.css"

const ViewCreator = () => {
    const [creator, setCreator] = useState([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const getCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id);
            if (error) {
                console.error('Error fetching creator:', error);
            } else {
                setCreator(data[0]);
                // console.log('Fetched creator:', data[0]); // Log the fetched data
            }
        };
        getCreator();
    }, []);

    const deleteCreator = async (e) => {
        e.preventDefault()

        await supabase
            .from("creators")
            .delete()
            .eq('id', id)

        window.location = "/"
    }

    return (
        <div className="creator">
            <div className="content">
                <h3>{creator.name}</h3>
                <p>{creator.description} <a href={creator.url} target="_blank">Check out their socials!</a></p>
                <img src={creator.imageURL} />
            </div>
            <div className="btns">
                <Link style={{ backgroundColor: "blue" }} className="btn" to={`/edit/${id}`}>Edit</Link>
                <button style={{ backgroundColor: "red" }} className='btn' onClick={deleteCreator}>Delete</button>
            </div>
        </div>
    );
};

export default ViewCreator;