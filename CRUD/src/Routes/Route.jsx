import React from 'react'
import Post from '../pages/Post'
import {Routes , Route as R} from 'react-router-dom'
import Get from '../pages/Get'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Post/>}></R>
            <R path='/flowers' element={<Get/>}></R>
        </Routes>
    </>
  )
}

export default Route