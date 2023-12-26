import React, { FC, useState } from 'react'
import "./timeline.css"
import ContainerComponentProps from '../ContainerComponentProps.components'

export const dataEdu = [
    {
        date: "2021",
        place: "Binar Academy",
        spec: "Frontend Developer",
        desc: ["Learned FrontEnd fundamentals including HTML, CSS, Javascript, ReactJS (incl. Redux Thunk & Saga), Trained to use styling framework, Git, also testing App & debugging.",
            "Successfully created 2 Web-App for Glints mini-project & final-project achieved 100% MVP and additional Enhancement",
            " Got Achievement the only frontend team that initiated to create Admin Page & the functionality on mini-project. "]
    },
    {
        date: "2007 - 2011",
        spec: "Business Administration",
        place: "University of Indonesia",
        desc: ["Business Administration"]
    },
]

const Education: FC = () => {
    const [index, setIndex] = useState(0)


    return (
        <>
            <div className='font-bold text-xl mt-3'>
                Education :
            </div>
            {/* <div>
                Front End Developer
                Glints Academy Batch 13
                July 2021 - Oktober 2021

                Business Administration
                University of Indonesia
                August 2007 - July 2011

            </div> */}
            <ContainerComponentProps className='p-2 max-h-48 overflow-auto gap-2 h-full grid-cols-3 grid rounded '>

                <div>
                    {dataEdu.map((item: any, idx: number) =>
                        <div key={idx}>
                            <div className={`${index === idx ? "font-semibold border-2 border-opacity-5  " : "text-sm hover:scale-105 border-opacity-95  shadow-lg "}  rounded text-sm px-2 cursor-pointer mb-1 p-1`}
                                onClick={() => setIndex(idx)}>
                                {index === idx && '-> '}
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

        // <div className='dl w-full'>
        //     {dataEdu.map((item: any, index: number) =>
        //         <div className='cell' key={index}>
        //             <div className='cell-content'>
        //                 <div className='dt'>
        //                     {item.date}
        //                 </div>
        //                 <div className='dd'>
        //                     {item.place}
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </div>
    )
}

export default Education