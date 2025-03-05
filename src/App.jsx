import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Overview } from './components/Overview'

function App() {

  return (
    <>
    <div className='flex justify-between px-10 pt-10'>
        <div className=''>
        <p className='dark:text-white text-4xl font-semibold'>
    Social Media Dashboard
        </p>
        <p className='text-[#63687E] dark:text-[#8B97C6] font-semibold'>
    Total Followers
        </p>
    </div>
    <div>
        <label class="inline-flex items-center cursor-pointer">
        <span class="mr-3 text-sm font-medium text-white dark:text-gray-300">Dark Mode</span>
      <input type="checkbox" value="" class="sr-only peer"/>
      <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
    </label>
    </div>
    </div>
      <Dashboard/>
      <div className='pl-10'>
            <p className='text-[#63687E] dark:text-[#8B97C6] font-semibold text-3xl'>Overview - Today</p>
      </div>
      <Overview/>
    </>
  )
}

export default App
