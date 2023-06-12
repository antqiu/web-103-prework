import { useState } from 'react'
import './App.css'
import React from 'react'
import ShowCreators from "./pages/ShowCreators"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { supabase } from './client';

function App() {

  const [creators, setCreators] = useState([])

  useEffect(() => {
    const getCreators = async () => {
      const { data, error } = await supabase.from("creators").select();
      console.log('data: ', data);
      setCreators(data)
    }
    getCreators()
  }, [])



  return (
    <div className="App">
      {creators.length > 0 ? <ShowCreators creators={creators} /> : <p style={{ textAlign: "center" }}>Add a creator to get started</p>}
    </div >
  )
}

export default App
