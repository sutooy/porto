import React, { FC, useState } from 'react'
import "./timeline.css"
import ContainerComponentProps from '../ContainerComponentProps.components'
import { dataEdu } from "./data"


const Education: FC = () => {
    const [index, setIndex] = useState(0)
    return (
        <>
            <div className='font-bold text-xl mt-3'>
                Education :
            </div>

            <ContainerComponentProps className='p-2 max-h-48 overflow-auto gap-2 h-full grid-cols-3 grid rounded '>

                <div>
                    {dataEdu.map((item: any, idx: number) =>
                        <div key={idx}>
                            <div className={`${index === idx ? "font-semibold border-2 border-opacity-5  " : "text-sm hover:scale-105 border-opacity-95  shadow-lg "}  rounded text-sm px-2 cursor-pointer mb-1 p-1`}
                                onClick={() => setIndex(idx)}>
                                {/* {index === idx && '-> '} */}
                                {item.date}
                            </div>
                        </div>
                    )}
                </div>
                <div className='col-span-2 border-l-2 pl-5'>
                    <div className='  text-lg flex flex-col '>
                        <div className='font-bold '>
                            {dataEdu[index].place}
                        </div>
                        <div className='text-xs font-semibold -mt-1'>
                            {dataEdu[index].spec}
                        </div>
                    </div>
                    <div>
                        <ul>
                            {dataEdu[index].desc.map((item: string, index: number) =>
                                <li className='text-sm list-disc list-inside' key={index}>
                                    {item}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </ContainerComponentProps>
        </>
    )
}

export default Education