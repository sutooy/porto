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
                        src={item?.url}
                        alt={item?.name}
                        className="mix-blend-multiply "
                        width={100}
                        height={25}
                        priority
                        style={{ height: '30px', width: 'auto' }}
                    />
                    {/* <div className='text-xs  hover:block '>{item?.name}</div> */}
                </div>
            )}
        </Marquee>
    )
}

export default MarqueeLogo