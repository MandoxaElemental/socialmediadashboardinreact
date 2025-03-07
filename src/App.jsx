import { React, useEffect, useState } from 'react'
import { DatabaseInfo } from './services/DashboardData'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Overview } from './components/Overview'

function App() {

  const [Followers, setFollowers] = useState('');
  

  useEffect(() => {
      const fetchData = async () => {
          const data = await DatabaseInfo();
          setFollowers(data[0].followers.toLocaleString())
      }
      fetchData();
  }, [])

const [theme, setTheme] = useState('dark');

const changeTheme = () => {
  setTheme(theme == 'light' ? 'dark' : 'light');
};

useEffect(() => {
  if (theme == 'dark'){
    document.querySelector('html')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
  }
}, [theme]);

  return (
    <>
    <div className='bg-white dark:bg-[#1E202A] fixed flex h-full w-full'>
    </div>
    <div className='absolute h-[50%] sm:h-[40%] w-[100%] bg-[#F5F7FF] dark:bg-[#1F212E]'>
    </div>
      <div className='relative'>
    <div className='grid grid-cols-1 sm:grid-cols-2 px-10 pt-10'>
        <div className=''>
        <p className='text-[#1E202A] dark:text-white text-4xl font-bold'>
    Social Media Dashboard
        </p>
        <p className='text-[#63687E] dark:text-[#8B97C6] font-semibold'>
    Total Followers: {Followers}
        </p>
        <hr className="sm:hidden my-6 h-[1px] border-t-0 bg-[#63687E] dark:bg-[#8B97C6]" />
    </div>
    <div className='flex justify-between sm:justify-end items-center'>
        <span className="mr-3 text-sm font-semibold text-[#63687E] dark:text-[#8B97C6] ">Dark Mode</span>
        <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div onClick={changeTheme}  className="relative w-14 h-7 bg-[#8B97C6] dark:bg-gradient-to-r from-[#378FE6] to-[#3EDA82] hoverpeer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[rgb(240,242,250)] dark:peer-focus:ring-[#1E202A] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#F5F7FF] dark:after:border-[#1E202A] after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white dark:after:bg-[#1F212E] after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-[#] dark:peer-checked:bg-blue-600"></div>
    </label>
    </div>
    </div>
      <Dashboard/>
      <div className='pl-10'>
            <p className='text-[#63687E] dark:text-[#8B97C6] font-semibold text-3xl'>Overview - Today</p>
      </div>
      <Overview/>
      </div>
    </>
  )
}

export default App
