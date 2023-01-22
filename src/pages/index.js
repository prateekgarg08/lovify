import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
// import Image from 'next/image'
import mazePhoto from "@/image/maze.png"
import platformer from "@/image/platformer.png"
import doYouKnow from "@/image/do-you-know.png"
import myntra from "@/image/myntra.svg"
import nykaa from "@/image/nykaa.webp"
import photocopy from "@/image/photocopy.jpg"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center  grow justify-center h-full ">
        <div className='bg-white w-full max-w-[1000px] rounded shadow pt-5'>
          <div className='flex flex-col'>

            <div className='flex justify-between px-4 py-1'>
              <h1 className='text-[#d44351] text-2xl font-semibold'>Stats</h1>
            </div>
            <div className=" grid grid-cols-3 overflow-hidden">
              <div className='flex flex-col items-center border border-1 border-y-0 px-2 py-5'>
                <span className='text-9xl text-[#d44351] font-semibold'>40</span>
                <span className='text-xl text-gray-600 font-semibold'>Day of streak</span>
              </div>
              <div className='flex flex-col items-center border border-1 border-y-0 px-2 py-5'>
                <span className='text-9xl text-[#d44351] font-semibold'>400</span>
                <span className='text-xl text-gray-600 font-semibold'>Point in Wallet</span>
              </div>
              <div className='flex flex-col items-center border border-1 border-y-0 px-2 py-5'>
                <span className='text-9xl text-[#d44351] font-semibold'>500</span>
                <span className='text-xl text-gray-600 font-semibold'>Total points spent</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>

            <div className='flex justify-between items-center px-4 py-1'>
              <div className='flex flex-col'>

                <h1 className='text-[#d44351] text-2xl font-semibold'>Games</h1>
                <span className='text-gray-600'>Play games to score points</span>
              </div>
              <a href="#" className='text-[#d44351] text-xl font-semibold underline'>More</a>
            </div>
            <div className=" grid grid-cols-3 overflow-hidden">
              <div className='flex flex-col justify-end cursor-pointer items-center border border-1 border-y-0 px-2 py-5'>
                <span className='text-9xl text-[#d44351] font-semibold '><Image src={mazePhoto} width={200} height={200} /></span>
                <span className='text-xl text-gray-600 font-semibold'>Co-op maze</span>
              </div>
              <div className='flex flex-col justify-end cursor-pointer items-center border border-1 border-y-0 px-2 py-5'>
                <div className='text-9xl text-[#d44351] font-semibold'><Image src={platformer} fill={false} width={200} height={200} /></div>
                <span className='text-xl text-gray-600 font-semibold'>Co-op platformer</span>
              </div>
              <div className='flex flex-col justify-end cursor-pointer items-center border border-1 border-y-0 px-2 py-5'>
                <span className='text-9xl text-[#d44351] font-semibold'><Image src={doYouKnow} width={200} height={200} /></span>
                <span className='text-xl text-gray-600 font-semibold'>Do you know your partener</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>

            <div className='flex justify-between items-center px-4 py-1'>
              <div className='flex flex-col'>

                <h1 className='text-[#d44351] text-2xl font-semibold'>Offers</h1>
                <span className='text-gray-600'>Use your points to redeem gifts</span>
              </div>
              <a href="#" className='text-[#d44351] text-xl font-semibold underline'>More</a>
            </div>
            <div className=" grid grid-cols-3 overflow-hidden">
              <div className='flex flex-col justify-end  items-center border border-1 border-y-0 px-2 py-5'>
                <span className='text-9xl text-[#d44351] cursor-pointer font-semibold '><Image src={myntra} width={200} height={200} /></span>
                <span className='text-xl text-gray-600 font-semibold mt-2'>Flat ₹500 Discount </span>
                <span className='text-md text-gray-400 font-semibold'>Cost: 400 points</span>

              </div>
              <div className='flex flex-col justify-end  items-center border border-1 border-y-0 px-2 py-5'>
                <div className='text-9xl text-[#d44351] cursor-pointer font-semibold'><Image src={nykaa} fill={false} width={200} height={200} /></div>
                <span className='text-xl text-gray-600 font-semibold mt-2'>Flat ₹1000 Discount </span>
                <span className='text-md text-gray-400 font-semibold'>750 points</span>
              </div>
              <div className='flex flex-col justify-between  items-center border border-1 border-y-0 px-2 py-5'>
                <span className='text-9xl text-[#d44351] cursor-pointer font-semibold '><Image src={photocopy} width={200} height={200} /></span>
                <span className='text-xl text-gray-600 font-semibold mt-2'>Free Photobook </span>
                <span className='text-md text-gray-400 font-semibold'>300 points</span>
              </div>
            </div>
          </div>
        </div>



      </div>

    </>
  )
}
