import { React, useEffect, useState } from 'react'
import { DatabaseInfo } from '../services/DashboardData'

export const Dashboard = () => {

    const [Facebook, setFacebook] = useState('');
    const [Twitter, setTwitter] = useState('');
    const [Instagram, setInstagram] = useState('');
    const [Youtube, setYoutube] = useState('');
    const [FBToday, setFbToday] = useState('');
    const [TWToday, setTwToday] = useState('');
    const [INToday, setInToday] = useState('');
    const [YOToday, setYoToday] = useState('');
    

    useEffect(() => {
        const fetchData = async () => {
            const data = await DatabaseInfo();
            setFacebook(data[0].facebook)
            setTwitter(data[0].twitter)
            setInstagram(data[0].instagram / 1000 + 'k')
            setYoutube(data[0].youtube)
            setFbToday(data[0].fbToday)
            setTwToday(data[0].twToday)
            setInToday(data[0].inToday)
            setYoToday(data[0].yoToday)
        }
        fetchData();
    }, [])

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10'>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-[#148CF5] h-1 flex items-start rounded-t-md'></div>
            <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-facebook.svg" alt="facebook" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>{Facebook}</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>FOLLOWERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>{FBToday} Today</p>
            </div>
        </div>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-[#1CA0F2] h-1 flex items-start rounded-t-md'></div>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-twitter.svg" alt="twitter" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@nathanf</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>{Twitter}</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>FOLLOWERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>{TWToday} Today</p>
            </div>
        </div>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-gradient-to-r from-[#FDC468] to-[#DF4996] h-1 flex items-start rounded-t-md'></div>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-instagram.svg" alt="instagram" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@realnathanf</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>{Instagram}</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>FOLLOWERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-up.svg" alt="up" /> <p className=' text-[#1DB489] font-bold'>{INToday} Today</p>
            </div>
        </div>
        <div className='h-60 bg-[#F0F2FA] dark:bg-[#252A41] rounded-md text-center hover:bg-[#E1E3F0] dark:hover:bg-[#323A55]'>
            <div className='bg-[#C4032A] h-1 flex items-start rounded-t-md'></div>
        <div className='flex justify-center items-center p-5'>
            <img className='mr-2' src="/assets/icon-youtube.svg" alt="youtube" /> <p className='text-[#63687E] dark:text-[#8B97C6]'>@Nathan F.</p>
            </div>
            <p className='text-5xl font-semibold text-[#1E202A] dark:text-white'>{Youtube}</p>
            <p className='text-[#63687E] dark:text-[#8B97C6] tracking-widest font-light'>SUBSCRIBERS</p>
            <div className='flex justify-center mt-6 items-center'>
                <img className='mr-2' src="/assets/icon-down.svg" alt="up" /> <p className=' text-[#DC414C] font-bold'>{YOToday} Today</p>
            </div>
        </div>
    </div>
    </>
  )
}