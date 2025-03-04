import React from 'react'

export const Dashboard = () => {
  return (
    <>
    <div className='pl-10 pt-10'>
        <p className='text-white text-4xl'>
    Social Media Dashboard
        </p>
        <p className='text-[#8B97C6] font-semibold'>
    Total Followers
        </p>
        
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-10'>
        <div className='bg-[#252A41] rounded-md border-t-8 border-[#148CF5] text-center'>
            <div className='flex justify-center items-center p-5'>
            <img className='' src="/assets/icon-facebook.svg" alt="facebook" /> <p className='text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-white'>000</p>
            <p className='text-[#8B97C6]'>FOLLOWERS</p>
            <p>today</p>
        </div>
        <div className='bg-[#252A41] rounded-md border-t-8 border-[#1CA0F2] text-center'>
        <div className='flex justify-center items-center p-5'>
            <img className='' src="/assets/icon-twitter.svg" alt="twitter" /> <p className='text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-white'>000</p>
            <p className='text-[#8B97C6]'>FOLLOWERS</p>
            <p>today</p>
        </div>
        <div className='bg-[#252A41] rounded-md border-t-8 border-[#1CA0F2] text-center'>
        <div className='flex justify-center items-center p-5'>
            <img className='' src="/assets/icon-instagram.svg" alt="instagram" /> <p className='text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-white'>000</p>
            <p className='text-[#8B97C6]'>FOLLOWERS</p>
            <p>today</p>
        </div>
        <div className='bg-[#252A41] rounded-md border-t-8 border-[#C4032A] text-center'>
        <div className='flex justify-center items-center p-5'>
            <img className='' src="/assets/icon-youtube.svg" alt="youtube" /> <p className='text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-white'>000</p>
            <p className='text-[#8B97C6]'>FOLLOWERS</p>
            <p>today</p>
        </div>
    </div>
        <div className='pl-10'>
            <p className='text-white'>Overview: Today</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-10'>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Page Views</div>
                <div className='flex justify-end'><img src="/assets/icon-facebook.svg" alt="facebook" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-facebook.svg" alt="facebook" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-instagram.svg" alt="instagram" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Profile Views</div>
                <div className='flex justify-end'><img src="/assets/icon-instagram.svg" alt="instagram" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Retweets</div>
                <div className='flex justify-end'><img src="/assets/icon-twitter.svg" alt="twitter" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-twitter.svg" alt="twitter" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-youtube.svg" alt="youtube" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
            <div className='bg-[#252A41] rounded-md grid grid-cols-2 p-5'>
                <div className='font-semibold text-[#8B97C6]'>Total Views</div>
                <div className='flex justify-end'><img src="/assets/icon-youtube.svg" alt="youtube" /></div>
                <div className='text-4xl text-white'>000</div>
                <div className='flex justify-end items-end'>status</div>
            </div>
        </div>
    </>
  )
}