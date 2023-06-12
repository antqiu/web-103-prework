import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client';
import "./EditCreator.css"

const EditCreator = () => {

    const [creator, setCreator] = useState({});
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(creator)
        setCreator((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const editCreator = async (event) => {
        event.preventDefault();

        await supabase
            .from('creators')
            .update({ name: creator.name, imageURL: creator.imageURL, description: creator.description, url: creator.url })
            .eq("id", id);

        window.location = "/";
    }
    return (
        <div>
            <h3>Edit {creator.name}'s Information</h3>
            <form onSubmit={editCreator}>
                <input name="name" type=" text" placeholder="Creator Name" value={creator.name} onChange={handleChange}></input>
                <input name="imageURL" type="text" placeholder="Image/Video URL" value={creator.imageURL} onChange={handleChange}></input>
                <input name="description" type="text" placeholder="Description" value={creator.description} onChange={handleChange}></input>
                <input name="url" type="text" placeholder="Social Media URL" value={creator.url} onChange={handleChange}></input>
                <input className="btn submit" type="submit" value="Submit" />
            </form >

        </div>
    )
}

export default EditCreator