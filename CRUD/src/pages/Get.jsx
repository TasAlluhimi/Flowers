import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Get() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://656d8d4fbcc5618d3c2364a0.mockapi.io/crud")
        .then(res=>{setData(res.data)})
    }, [])

  return (
    <>
        <div className='h-screen flex flex-wrap gap-10 bg-pink-50 p-10'>
            {data.map((item)=>{
                return(
                    <>
                        <div 
                        key={item.id}
                        className='w-80 border'>
                            <div style={{backgroundImage: `url(${item.image})`}}
                            className='h-52 bg-cover bg-center'></div>
                            <p>{item.flower}</p>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default Get