import React from 'react';
import { supabase } from '../client';
import { useState } from 'react';
import "./AddCreator.css"
const AddCreator = () => {
    const [data, setData] = useState({
        name: '',
        imageURL: '',
        description: '',
        url: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(data)
        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const addCreator = async (event) => {
        event.preventDefault();

        await supabase
            .from('creators')
            .insert({ name: data.name, imageURL: data.imageURL, description: data.description, url: data.url })
            .select();

        window.location = "/";
    }


    return (
        <div>
            <h3>Add a Creator</h3>
            <form onSubmit={addCreator}>
                <input name="name" type=" text" placeholder="Creator Name" onChange={handleChange}></input>
                <input name="imageURL" type="text" placeholder="Image/Video URL" onChange={handleChange}></input>
                <input name="description" type="text" placeholder="Description" onChange={handleChange}></input>
                <input name="url" type="text" placeholder="Social Media URL" onChange={handleChange}></input>
                <input className="btn" type="submit" value="Submit" />
            </form >
        </div>
    )
}

export default AddCreator