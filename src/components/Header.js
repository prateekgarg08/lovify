import React from 'react'
import { AiFillHeart } from "react-icons/ai"
export default function Header() {
    return (
        <>
            <div className='flex-none flex justify-between bg-white shadow text-[#d44351] w-full py-4 px-10 '>
                <div className='flex text-2xl items-center gap-1'>
                    <AiFillHeart />
                    <h1 className=' font-semibold'>Lovi.fy</h1>
                </div>
                <div className='flex-none flex text-lg  gap-2 font-semibold items-center'>
                    <a href='#' className='list-none'>Home</a>
                    <a href='#' className='list-none'>Games</a>
                    <a href='#' className='list-none'>Offer</a>
                </div>
            </div>
        </>
    )
}

