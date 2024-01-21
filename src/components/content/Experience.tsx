import Image from 'next/image'
import React from 'react'
import { dataExp } from './data'

function Experience() {


    return (
        <div className='w-full overflow-auto'>
            <div className='flex flex-col'>
                {dataExp.map((item: any, index: number) =>
                    <div className='flex flex-wrap my-2' key={index}  >
                        {/* style={{ height: '100vh', overflowY: 'scroll' }} */}
                        <div className=' pt-2  lg:w-1/3 w-full'   >
                            <div className='sticky top-0 bg-greyish max-w-sm'>
                                <Image className='mix-blend-multiply object-cover w-full ' src={item.logo} alt={item.company} width={100} height={100}
                                    loading='lazy'
                                    style={{ maxWidth: '350px' }}
                                />
                                <p className='font-semibold'>
                                    {item.date}
                                </p>
                            </div>
                        </div>
                        <div className=' lg:w-2/3 w-full'>
                            <div className='flex flex-col px-2'>
                                <p className='text-xl font-semibold '>
                                    {item.company}
                                </p>
                                <div className='flex'>
                                    <div className='font-bold '>
                                        Position : &nbsp;
                                    </div>
                                    {item.position}
                                </div>
                                <div>
                                    <table>
                                        <tbody>
                                            {item?.desc?.map((item: string, index: number) =>
                                                <tr key={index}>
                                                    <td className='flex items-start'>
                                                        -
                                                    </td>
                                                    <td className='pl-2 text-justify text-sm'>
                                                        {item}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='flex gap-2 flex-wrap mt-3'>
                                    {item.techStack.map((item: string, index: number) =>
                                        <div className='hover:bg-greyslate  hover:text-whitesoft cursor-default text-center border rounded-full px-3 text-xs font-medium leading-5  ' key={index}>
                                            {item}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Experience