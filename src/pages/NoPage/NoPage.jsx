import React from 'react'
import { Link } from 'react-router'

function NoPage() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='main-text text-5xl font-black'>404</h1>
            <p className='font-mono text-xl mb-4'>Page not found !</p>
            <Link to={"/"} className='btn btn-primary sub-text'>🏡 Home</Link>
        </div>
    )
}

export default NoPage