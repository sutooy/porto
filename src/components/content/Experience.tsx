import Image from 'next/image'
import React from 'react'
import { dataExp } from './data'

function Experience() {


    return (
        <div className='w-full overflow-auto'>
            <div className='flex flex-col'>
                {dataExp.map((item: any, index: number) =>
                    <div className='flex  my-2' key={index}  >
                        {/* style={{ height: '100vh', overflowY: 'scroll' }} */}
                        <div className=' pt-2 ' style={{ width: '30%', }} >
                            <div className='sticky top-0 bg-greyish '>
                                <Image className='mix-blend-multiply object-cover' src={item.logo} alt={item.company} width={100} height={100}
                                    style={{ width: '100%' }} />
                                <p className='font-semibold'>
                                    {item.date}
                                </p>
                            </div>
                        </div>
                        <div style={{ width: '70%' }}>
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
                                        <div style={{ color: 'gray' }} className='hover:bg-black hover:font-white  text-center border rounded-full px-3 text-xs font-medium leading-5  ' key={index}>
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