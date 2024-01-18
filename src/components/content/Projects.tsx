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
    const truncated = (text: string) => text.substring(0, 150) + "...";


    return (
        <div className='scroll-smooth'>
            {/* container Project */}
            {project &&

                <section className="text-gray-600 body-font " id='display'
                >
                    <div className="w-full sm:p-4 px-4 mb-2">
                        <h1 className="title-font font-semibold text-xl text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                        <div className="leading-relaxed">  {project?.desc} </div>
                    </div>
                    <div className=" w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                        {/* <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" /> */}
                    </div>
                    <div className='w-full rounded-lg overflow-hidden flex  justify-center items-center' style={{ height: '100%' }}>
                        {display?.includes("mp4") ?
                            <video src={display} className=' w-full cursor-pointer' controls />
                            :
                            <Image loading='lazy'
                                className='cursor-pointer object-fill ' unoptimized src={display} alt='' width={100} height={100} />
                        }
                    </div>
                    <div className=' mt-1 gap-1 overflow-auto flex items-center'>
                        {project?.asset?.map((el: string, index: number) =>
                            el.includes("mp4") ?
                                <video src={el} key={index} className=' w-40 cursor-pointer' onClick={() => setDisplay(el)} />
                                :
                                <Image loading='lazy'
                                    className='cursor-pointer w-40' key={index} src={el} alt='' width={100} height={100} onClick={() => setDisplay(el)}
                                    style={{ height: '50px' }} />
                        )}
                    </div>
                    <div className="container mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -mx-4 mt-auto mb-auto content-start  ">
                            {/* <div className=' border text-xs w-full lg:w-1/5'   >
                            name: string;
                            git: string;
                            url: string;
                            Objective: string;
                            status: string;
                            desc: string;
                            techStack: string[];
                            asset: never[];
                            logo: string;
                        </div> */}
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                <p className="leading-relaxed">Users</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                <p className="leading-relaxed">Subscribes</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                <p className="leading-relaxed">Downloads</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                <p className="leading-relaxed">Products</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-wrap gap-2 overflow-auto '>
                        {project?.techStack.map((item: any, index: number) =>
                            <div key={index}
                                // style={{ color: 'gray', backgroundColor: 'black' }} 
                                className='flex  justify-center items-center hover:bg-bluelight  hover:text-white cursor-default text-center border rounded-full px-3 text-xs font-medium leading-5 bg-whitesoft text-black '  >
                                {item}
                            </div>
                        )}
                    </div>
                </section>
            }

            {/* card */}
            < div className='grid grid-cols-3 gap-3 mt-4 mb-2' >
                {
                    dataProject.map((item: any, index: number) =>
                        <Link href="/#display" key={index}>
                            <ContainerComponentProps onClick={() => {
                                handleSelect(item)
                            }} className='py-2 px-2 cursor-pointer hover:scale-105 hover:bg-whitesoft rounded'  >
                                {/* <Image/> */}
                                <div className='border-b-2'>
                                    {item.name}
                                </div>
                                <div className='text-ellipsis overflow-hidden  text-xs text-justify h-44 '>
                                    {item.desc.length > 150 ? truncated(item.desc) : item.desc}
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