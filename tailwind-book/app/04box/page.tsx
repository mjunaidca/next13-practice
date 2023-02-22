import React from 'react'
import Image from 'next/image'

export default function Box() {
    return (
        <div className='bg-gradient-to-l from-red-500 to-blue-500 via-yellow-500'>
            <Image className='m-10 border-r-4 border-dotted border-y-8 rounded-lg bg-fixed' alt='box' src={'/box.JPG'} width={250} height={250}></Image>
            <div>
                Exploring borders in detail
                <div className="mb-10">
                    <button className="p-10 border border-black">One</button>
                    <button className="m-10 border border-black">Two</button>
                    <button className="m-2 p-2 border-4 border-black">Three</button>
                </div>
                <div>
                    <button className="m-4 p-4 border-2 border-black rounded-md">Four</button>
                    <button className="m-4 p-4 border-2 border-black rounded-2xl">Five</button>
                    <button className="m-4 p-4 border-2 border-black rounded-full">Six</button>
                </div>
            </div>

            // Rings

            <div>
                <button className="m-4 p-4 rounded-md ring">Four</button>
                <button className="m-4 p-4 rounded-2xl ring-2">Five</button>
                <button className="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-offset-black"> Six</button>
            </div>
            <div>
                Making Border to Rings
                <div className="mb-10 bg-red-700/[43]">
                    <button className="p-10 border ring">One</button>
                    <button className="m-10 border ring">Two</button>
                    <button className="m-2 p-2 border-4 ring">Three</button>
                </div>
                <div>
                    <button className="m-4 p-4 border-2 ring rounded-md">Four</button>
                    <button className="m-4 p-4 border-2 ring rounded-2xl">Five</button>
                    <button className="m-4 p-4 border-2 ring rounded-full">Six</button>
                </div>
            </div>

            // Shadows
            <div className="bg-gray-50 p-10">
                <div className="mb-10">
                    <button className="p-10 mx-10 shadow-sm bg-white">One</button>
                    <button className="p-10 mx-10 shadow-sm bg-white">Two</button>
                    <button className="p-10 mx-10 shadow-lg bg-white">Three</button>
                </div>
                <div>
                    <button className="p-10 mx-10 shadow-xl bg-white">Four</button>
                    <button className="p-10 mx-10 shadow-2xl bg-white">Five</button>
                    <button className="p-10 mx-10 shadow-inner bg-white">Six</button>
                </div>
            </div>

            // Gradient

            <div>
                <div className="mb-10 bg-gradient-to-r from-gray-50 to-black p-10 w-1/2">
                    <button className="p-10 mx-10 bg-white">One</button>
                    <button className="p-10 mx-10 bg-white">Two</button>
                </div>
                <div
                    className="mb-10 p-10 w-1/2 bg-gradient-to-r from-gray-50 via-black to-gray-50">
                    <button className="p-10 mx-10 bg-white">Three</button>
                    <button className="p-10 mx-10 bg-white">Four</button>
                </div>
            </div>

                // BG Image Styles
                <div className="min-h-screen blur-xl brightness-200 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r bg-repeat-x bg-fixed"></div>
            <div className="bg-gray-50">
                <div className="text-6xl font-bold p-10">
                    <div
                        className="bg-clip-text text-transparent py-2 bg-gradient-to-l from-gray-50 to-black">
                        NorthBy: A Premium in Sight and Sound
                    </div>
                </div>
            </div>

            

        </div >
    )
}
