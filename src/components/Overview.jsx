import React from 'react'

export const Overview = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-10'>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Page Views</div>
                <div className='flex justify-end'><img src="/assets/icon-facebook.svg" alt="facebook" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-facebook.svg" alt="facebook" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-instagram.svg" alt="instagram" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Profile Views</div>
                <div className='flex justify-end'><img src="/assets/icon-instagram.svg" alt="instagram" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Retweets</div>
                <div className='flex justify-end'><img src="/assets/icon-twitter.svg" alt="twitter" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-twitter.svg" alt="twitter" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-youtube.svg" alt="youtube" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Total Views</div>
                <div className='flex justify-end'><img src="/assets/icon-youtube.svg" alt="youtube" /></div>
                <div className='text-4xl dark:text-white font-semibold'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
        </div>
  )
}
