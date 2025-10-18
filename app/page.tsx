'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-2 text-center text-4xl font-bold text-gray-800">
          Welcome to Neuronix
        </h1>
        <p className="mb-8 text-center text-gray-600">
          Hello World! This is a Next.js 14 application.
        </p>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-6 text-center">
            <p className="mb-2 text-sm text-gray-500">Button Click Counter</p>
            <p className="text-5xl font-bold text-indigo-600">{count}</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setCount(count + 1)}
              className="flex-1 rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="flex-1 rounded-lg bg-gray-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Decrement
            </button>
          </div>
          
          <button
            onClick={() => setCount(0)}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            Built with Next.js 14, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </main>
  )
}