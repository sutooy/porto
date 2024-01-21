import React, { MutableRefObject, useRef, useState } from 'react'
import ContainerComponentProps from '../ContainerComponentProps.components'
import { dataProject } from './data'
import Image from 'next/image';
import Link from 'next/link';

type dataProject = {
    name: string;
    git: string;
    url: string;
    Objective: string;
    status: string;
    desc: string;
    techStack: string[];
    asset: never[];
    logo: string;
}

function Projects() {
    const [project, setProject] = useState<dataProject>()
    const [display, setDisplay] = useState("")
    const handleSelect = (data: any) => {
        setProject(data)
        setDisplay(data.asset[0])
    }
    const truncated = (text: string) => text.substring(0, 180) + "...";


    return (
        <div className='scroll-smooth '>
            {/* container Project */}
            {project &&

                <section className="text-gray-600 body-font text-justify scroll-smooth	" id='display'
                >
                    <div className="w-full sm:p-4 px-4 mb-2">
                        <h1 className="title-font font-semibold text-xl text-gray-900">{project?.name}</h1>
                        <div className="leading-relaxed">{project?.desc} </div>
                    </div>
                    <div className='w-full rounded-lg overflow-hidden flex justify-center items-center' style={{ height: '100%' }}>
                        {display?.includes("mp4") ?
                            <video src={display} className=' w-full cursor-pointer' controls />
                            :
                            <Image loading='lazy'
                                className='cursor-pointer object-fill w-full' unoptimized src={display} alt='' width={100} height={100} />
                        }
                    </div>
                    <div className=' mt-1 gap-2 overflow-auto flex items-center'>
                        {project?.asset?.map((el: string, index: number) =>
                            el.includes("mp4") ?
                                <video src={el} key={index} className=' w-40 cursor-pointer' onClick={() => setDisplay(el)} />
                                :
                                <Image loading='lazy'
                                    className='cursor-pointer w-fit object-contain	' key={index} src={el} alt='' width={100} height={100} onClick={() => setDisplay(el)}
                                    style={{ height: '50px' }} />
                        )}
                    </div>
                    <div className="container mx-auto flex flex-wrap">
                        <div className="flex flex-wrap gap-2   mt-auto mb-auto content-start  ">

                            <div className=" p-2  ">
                                <h2 className="title-font font-semibold text-xl text-gray-900">Objective :</h2>
                                <p className="leading-relaxed">{project.Objective}</p>
                            </div>
                            <div className=" p-2  ">
                                <h2 className="title-font font-semibold text-xl text-gray-900">Status :</h2>
                                <div className="leading-relaxed m-0"> {project.status}</div>
                            </div>
                            <div className=" p-2  ">
                                <h2 className="title-font font-semibold text-xl text-gray-900">URL :</h2>
                                <p className="leading-relaxed">
                                    <Link target="_blank" href={project.url} >{project.url}</Link>
                                </p>
                            </div>
                            <div className=" p-2  ">
                                <h2 className="title-font font-semibold text-xl text-gray-900">Code :</h2>
                                <Link target="_blank" href={project.git} >{project.git}</Link>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-wrap gap-2 overflow-auto '>
                        {project?.techStack.map((item: any, index: number) =>
                            <div key={index}
                                // style={{ color: 'gray', backgroundColor: 'black' }} 
                                className='flex  justify-center items-center hover:bg-greyslate  hover:text-whitesoft text-greyslate cursor-default text-center border rounded-full px-3 text-xs font-medium leading-5 bg-whitesoft  '  >
                                {item}
                            </div>
                        )}
                    </div>
                </section>
            }

            {/* card */}
            < div className='grid grid-cols-3 gap-3 mt-4 mb-2 scroll-smooth	' >
                {
                    dataProject.map((item: any, index: number) =>
                        <Link href="#display" key={index} className='scroll-smooth	' >
                            <ContainerComponentProps onClick={() => {
                                handleSelect(item)
                            }} className=' py-2 px-2 cursor-pointer hover:scale-105 hover:bg-whitesoft rounded'  >
                                {/* <Image/> */}
                                <div className='border-b-2'>
                                    {item.name}
                                </div>
                                <div className=' text-ellipsis overflow-hidden text-xs text-justify h-44 '>
                                    {/* {item.desc.length > 150 ? truncated(item.desc) : item.desc} */}
                                    {item.desc}
                                </div>
                            </ContainerComponentProps>
                        </Link>
                    )
                }
            </ div>
        </div>
    )
}

export default Projects