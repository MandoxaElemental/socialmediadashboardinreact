import {React, useEffect, useState } from 'react'
import { DatabaseInfo } from '../services/DashboardData'

export const Overview = () => {

    const [PageViews, setPageViews] = useState('');
        const [FBLikes, setFbLikes] = useState('');
        const [INLikes, setInLikes] = useState('');
        const [ProfileViews, setProfileViews] = useState('');
        const [Retweets, setRetweets] = useState('');
        const [TWLikes, setTwLikes] = useState('');
        const [YOLikes, setYoLikes] = useState('');
        const [TotalViews, setTotalViews] = useState('');
        
    
        useEffect(() => {
            const fetchData = async () => {
                const data = await DatabaseInfo();
                setPageViews(data[0].pageViews)
                setFbLikes(data[0].fbLikes)
                setInLikes(data[0].inLikes)
                setProfileViews(data[0].profileViews / 1000 + 'k')
                setRetweets(data[0].retweets)
                setTwLikes(data[0].twLikes)
                setYoLikes(data[0].yoLikes)
                setTotalViews(data[0].totalViews)
            }
            fetchData();
        }, [])


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10'>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Page Views</div>
                <div className='flex justify-end'><img src="/assets/icon-facebook.svg" alt="facebook" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{PageViews}</div>
                <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>3%</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-facebook.svg" alt="facebook" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{FBLikes}</div>
                <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-down.svg" alt="up" /> <p className=' text-[#C4032A] font-bold'>2%</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-instagram.svg" alt="instagram" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{INLikes}</div>
                <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>2257%</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Profile Views</div>
                <div className='flex justify-end'><img src="/assets/icon-instagram.svg" alt="instagram" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{ProfileViews}</div>
                <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>1375%</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Retweets</div>
                <div className='flex justify-end'><img src="/assets/icon-twitter.svg" alt="twitter" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{Retweets}</div>
                <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>303%</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-twitter.svg" alt="twitter" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{TWLikes}</div>
                <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>553%</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Likes</div>
                <div className='flex justify-end'><img src="/assets/icon-youtube.svg" alt="youtube" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{YOLikes}</div>
                <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-down.svg" alt="up" /> <p className=' text-[#C4032A] font-bold'>19%</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F0F2FA] dark:bg-[#252A41] rounded-md grid grid-cols-2 p-7 hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
                <div className='font-semibold text-[14px] text-[#63687E] dark:text-[#8B97C6]'>Total Views</div>
                <div className='flex justify-end'><img src="/assets/icon-youtube.svg" alt="youtube" /></div>
                <div className='text-4xl text-[#1E202A] dark:text-white font-bold pt-6'>{TotalViews}</div>
                <div className='flex justify-end items-end'>
                    <div className='flex justify-center items-center'>
                    <img className='mr-2' src="/assets/icon-down.svg" alt="up" /> <p className=' text-[#C4032A] font-bold'>12%</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
