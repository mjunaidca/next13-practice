import React from "react";

export default function Typo() {
    return (
        <div>
            <h1 className="text-3xl font-semibold">Title Default</h1>
            <h2 className="text-xl">Subtitle Default</h2>
            <h1 className="text-4xl font-bold">Title</h1>
            <h2 className="text-2xl font-semibold">Subtitle</h2>
            <h3 className="text-lg font-medium italic selection:font-bold">Header</h3>



/* Tailwind lets you adjust the color and opacity of text. */
            <div className="marker:text-blue-300 text-gray-300 hover:text-gray-700 selection:bg-red-400 first-letter:text-9xl first-letter:font-bold first-line:text-2xl">
                Hi
            </div>

            /* Using tailwind Plugin */
            <article className="prose prose-zinc prose-sm">
                All your text
            </article>

            /* Using tailwind Form Plugin */

            <input type="email" className="form-input px-4 py-3 rounded-full" />

            <select className="form-select px-4 py-3 rounded-full">
            </select>
            <input type="checkbox" className="form-checkbox rounded text-pink-500" />

        </div>
    );
}

