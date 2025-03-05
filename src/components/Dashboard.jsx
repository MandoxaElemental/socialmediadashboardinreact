import React from 'react'

export const Dashboard = () => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-10'>
        <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md border-t-8 border-[#148CF5] text-center'>
            <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-facebook.svg" alt="facebook" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-6xl font-semibold dark:text-white'>000</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest'>FOLLOWERS</p>
            <p>today</p>
        </div>
        <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md border-t-8 border-[#1CA0F2] text-center'>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-twitter.svg" alt="twitter" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-6xl font-semibold dark:text-white'>000</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest'>FOLLOWERS</p>
            <p>today</p>
        </div>
        <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md border-t-8 border-[#1CA0F2] text-center'>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-instagram.svg" alt="instagram" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@realnathanf</p>
            </div>
            <p className='text-6xl font-semibold dark:text-white'>000</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest'>FOLLOWERS</p>
            <p>today</p>
        </div>
        <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md border-t-8 border-[#C4032A] text-center'>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-youtube.svg" alt="youtube" />
            <p className='text-[#63687E] dark:text-[#8B97C6]'>@Nathan F.</p>
            </div>
            <p className='text-6xl font-semibold dark:text-white'>000</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest'>FOLLOWERS</p>
            <p>today</p>
        </div>
    </div>
    </>
  )
}