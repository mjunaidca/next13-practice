import React from 'react'

export default function Animations() {
    return (
        <div className='container flex m-10'>
            <div className='items-center justify-center'>
                <h1 className='text-3xl my-10'>Animations</h1>
                <h2 className='text-xl my-3'>Small Animations</h2>
                <h3 className='text-lg hover:animate-bounce'>animate-bounce</h3>
                <h3 className='text-lg hover:animate-ping'>animate-ping</h3>
                <h3 className='text-lg hover:animate-pulse'>animate-pulse</h3>
                <h3 className='text-lg hover:animate-spin'>animateas</h3>
                <h3 className='text-lg motion-reduce:animate-spin h-5 w-5 mr-3'>animate-spin</h3>

                <h2 className='text-xl my-3'>Transitions</h2>
                <h3 className='text-lg bg-green-500 hover:bg-yellow-500 cursor-wait'>Green to yellow on hover</h3>
                <h3 className='transition duration-1000 hover:scale-110 hover:box-shadow-lg cursor-pointer'>Transition Test</h3>

            </div>
        </div>
    )
}
