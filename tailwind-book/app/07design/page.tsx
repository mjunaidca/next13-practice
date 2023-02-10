import Image from 'next/image'
import React from 'react'

export default function Design() {
    return (
        <div>
            <div className='bg-gradient-to-l from-red-500 to-blue-500 via-yellow-500'>
                <Image className='m-10 rounded-lg bg-fixed' alt='box' src={'/as.JPG'} width={500} height={300}></Image>
            </div>

            <text className='md:hover:font-bold lg:hover:font-black sm:shadow-xl md:shadow-none "text-xl md:text-2xl lg:text-4xl'>asdasdsad</text>

            <text className='hidden lg:block'>hidden lg:block</text>

            <div className="grid items-stretch md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4">asd
                <div className="mb-6 lg:mb-0"></div>asd
                ...
            </div>

            <div className="w-full hidden lg:flex lg:flex-grow, lg:items-center lg:width-auto divide-black divide-y lg:divide-y-0" id="navbar-menu">
                <a className="block lg:mr-4 p-2 hover:bg-gray-200">Blog</a>
                ...
            </div>


            <nav className="flex items-center font-bold text-grey-600">
                <div className="block lg:hidden self-start">
                    <button id="navbar-burger"
                        className="px-3 py-2 border rounded border-grey-400 hover:border-black">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button id="navbar-close"
                        className="px-3 py-2 border rounded border-grey-400 hover:border-black">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="w-full hidden lg:flex lg:flex-grow, lg:items-center lg:width-auto divide-black divide-y lg:divide-y-0" id="navbar-menu">
                    <a className="block lg:mr-4 p-2 hover:bg-gray-200">Blog</a>
                    AND SO ON
                </div>
            </nav >

   

        </div >
    )
}
