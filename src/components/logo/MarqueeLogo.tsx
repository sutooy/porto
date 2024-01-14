import React from 'react'
import ContainerComponentProps from '../ContainerComponentProps.components'
import Marquee from 'react-fast-marquee'
import { LOGO_LIST } from './logoList'
import Image from 'next/image'

function MarqueeLogo() {
    return (
        <Marquee className='  w-full'
            pauseOnHover
            speed={30}
        >
            {LOGO_LIST?.map((item: any, index: number) =>
                <div key={index} style={{ background: '#ededed' }} className=' mx-1 cursor-pointer'>
                    <Image
                        // loading='lazy'
                        src={item?.url}
                        alt={item?.name}
                        className="mix-blend-multiply grayscale hover:grayscale-0 object-fit"
                        width={100}
                        height={25}
                        priority
                        style={{ height: '30px', width: 'auto' }}
                    />
                    {/* <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2  -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">
                        Tooltip
                    </span> */}
                    {/* <div className='text-xs  hover:block '>{item?.name}</div> */}
                </div>
            )}
        </Marquee>
    )
}

export default MarqueeLogo