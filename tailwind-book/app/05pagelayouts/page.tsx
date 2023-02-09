import React from 'react'

export default function PageLayouts() {
    return (
        <div className='container mx-auto py-12 px-6 items-center justify-center place-content-center'>In this chapter, we’ll look at how Tailwind can manage the layout of multiple elements.
            <h1 className='my-5 font-extrabold hover:text-gray-700 selection:bg-red-400 text-5xl'>Containers</h1>
            <table className="table-fixed border border-collapse">
                <tr>
                    <th className="border border-black w-1/6">Small</th>
                    <th className="border border-black w-2/6">Medium</th>
                    <th className="border border-black w-3/6">Large</th>
                </tr>
            </table>
            <h1 className='my-5 font-semibold hover:text-gray-700 selection:bg-red-400 text-2xl text-blue-600'>Grids (two-dimensional layout)</h1>
            <div className="grid grid-cols-2 w-1/4 gap-4">
                <div className="border bg-gray-300 text-center">A</div>
                <div className="border bg-gray-300 text-center">B</div>
                <div className="border bg-gray-300 text-center">C</div>
                <div className="border bg-gray-300 text-center">D</div>
            </div>
            <div className="pt-10 grid grid-rows-2 w-1/4 gap-4 grid-flow-col">
                <div className="border bg-gray-300 text-center">A</div>
                <div className="border bg-gray-300 text-center">B</div>
                <div className="border bg-gray-300 text-center">C</div>
                <div className="border bg-gray-300 text-center">D</div>
            </div>
            <h1 className='my-5 font-semibold hover:text-gray-700 selection:bg-red-400 text-xl'>Spans</h1>
            <div className="grid grid-cols-2 w-1/4 gap-4">
                <div className="border bg-gray-300 text-center col-span-2">A</div>
                <div className="border bg-gray-300 text-center">B</div>
                <div className="border bg-gray-300 text-center">C</div>
                <div className="border bg-gray-300 text-center">D</div>
            </div>
            <div className="grid grid-cols-2 w-1/4 gap-4 pt-10">
                <div className="border bg-gray-300 text-center row-span-3">A</div>
                <div className="border bg-gray-300 text-center">B</div>
                <div className="border bg-gray-300 text-center">C</div>
                <div className="border bg-gray-300 text-center">D</div>
            </div>
            <h1 className='my-5 font-semibold hover:text-gray-700 selection:bg-red-400 text-2xl text-green-600'>Flexbox (one-dimensional layout)</h1>
            Typically in a grid:
            <div className="pb-5 grid grid-cols-3 gap-4 w-1/3">
                <div className="text-center col-span-3">Header</div>
                <div className="text-center w-1/5">Left Sidebar</div>
                <div className="text-center w-3/5">Content</div>
                <div className="text-center w-1/5">Right Sidebar</div>
                <div className="text-center col-span-3">Footer</div>
            </div>
            Thats not bad, but you can also think of the layout as a flexbox:
            <div className="py-5 my-5 flex flex-col w-1/3">
                <div className="flex-grow">Header</div>
                <div className="flex flex-row">
                    <div className="text-center w-1/5">Left Sidebar</div>
                    <div className="text-center w-3/5">Content</div>
                    <div className="text-center w-1/5">Right Sidebar</div>
                </div>
                <div className="flex-grow">Footer</div>
            </div>

            <div className="flex flex-row flex-wrap w-1/3">
                <div className="w-full">Header</div>
                <div className="text-center w-1/5">Left Sidebar</div>
                <div className="text-center w-3/5">Content</div>
                <div className="text-center w-1/5">Right Sidebar</div>
                <div className="w-full">Footer</div>
            </div>


        </div>
    )
}
