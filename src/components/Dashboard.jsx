import React from 'react'

export const Dashboard = () => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10'>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-[#148CF5] h-2 flex items-start rounded-t-md'></div>
            <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-facebook.svg" alt="facebook" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>1987</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>FOLLOWERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>12 Today</p>
            </div>
        </div>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-[#1CA0F2] h-2 flex items-start rounded-t-md'></div>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-twitter.svg" alt="twitter" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>1044</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>FOLLOWERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>99 Today</p>
            </div>
        </div>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-gradient-to-r from-[#FDC468] to-[#DF4996] h-2 flex items-start rounded-t-md'></div>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-instagram.svg" alt="instagram" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@realnathanf</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>11k</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>FOLLOWERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>1099 Today</p>
            </div>
        </div>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-[#C4032A] h-2 flex items-start rounded-t-md'></div>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-youtube.svg" alt="youtube" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@Nathan F.</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>8239</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>SUBSCRIBERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-down.svg" alt="up" /> <p className=' text-[#DC414C] font-bold'>144 Today</p>
            </div>
        </div>
    </div>
    </>
  )
}