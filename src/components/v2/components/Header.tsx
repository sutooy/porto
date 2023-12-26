import { playfair } from '@components/app/font'
import React, { FC } from 'react'
import MarqueeLogo from '../../logo/MarqueeLogo'
import dayjs from 'dayjs'

const Header: FC = () => {
    return (
        <>

            <div className='border-black border-b-2  '>
                <div className={`flex justify-center items-center w-full mb-0  `}>
                    {["Aulia", "Sutowijoyo"].map((item: any, index: number) =>
                        item.split("").map((item2: string, index2: number) => (
                            <div className={` ${playfair.className} font-bold text-3xl lg:text-6xl lg:hover:text-5xl textColor cursor-default`} key={index2}>
                                <div className=' '>
                                    {item2}
                                </div>
                            </div>
                        )
                        ))}
                </div>

                <div className='flex justify-center items-center w-full sm:mt-0 lg:-mt-5 sm:text-sm md:text-lg  '>
                    Your Frontend Developer
                </div>
            </div>
            <div className='border-black border-b-2 flex justify-between text-xs md:text-lg'>
                <div className='text-left' >
                    newspaper theme portfolio
                </div>
                <div className='text-right '>
                    {dayjs().format("dddd / DD MMMM YYYY")}
                </div>
            </div>
        </>
    )
}

export default Header