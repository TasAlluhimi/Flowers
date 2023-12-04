import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post() {

    const [flower, setFlower] = useState('')
    const [flowerImg, setFlowerImg] = useState('')

    const n = useNavigate()

    const handleFlower = ()=>{
        axios.post('https://656d8d4fbcc5618d3c2364a0.mockapi.io/crud', {
            flower: flower,
            image: flowerImg
        })
        .then(()=>{n('/flowers')})
    }

  return (
    <>
    <div className='h-screen flex flex-col items-center justify-center'>

        <input 
        type="text" 
        className='border p-1'
        value={flower} 
        placeholder='add ur fav flowers <3'
        onChange={(event)=>(setFlower(event.target.value))}
        />

        <input 
        type="text" 
        className='border p-1 mt-5'
        value={flowerImg} 
        placeholder='add ur img link'
        onChange={(event)=>(setFlowerImg(event.target.value))}
        />
        <button onClick={handleFlower} className='bg-black text-white p-1 rounded-md mt-5'>
            Add
        </button>
        </div>
    </>
  )
}

export default Post