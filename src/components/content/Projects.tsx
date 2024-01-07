import React, { useState } from 'react'
import ContainerComponentProps from '../ContainerComponentProps.components'
import { dataProject } from './data'
import Image from 'next/image';

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
    const handleSelect = (data: any) => setProject(data)
    const truncated = (text: string) => text.substring(0, 150) + "...";
    return (
        <>
            {/* container Project */}
            <div style={{ height: `${project ? "50vh" : "0px"}`, backgroundColor: `${project ? "transparent" : "white"}` }} className={`${project ? " opacity-1" : "opacity-0"} relative ease-in-out transition duration-500 mt-2`}>
                <div className='flex' style={{ height: '40vh', }}>
                    <div className='  w-full' style={{ width: "80%", backgroundColor: 'red' }}>
                        <Image width={100} height={100} alt='' src='/project/cocosumiLanding.png' className='w-full h-full object-cover' />
                    </div>
                    <div className=' border text-xs '
                        style={{
                            width: "20%",
                            height: '100%'
                        }}
                    >
                        name: string;
                        git: string;
                        url: string;
                        Objective: string;
                        status: string;
                        desc: string;
                        techStack: string[];
                        asset: never[];
                        logo: string;
                    </div>
                </div>

                <div className='flex flex-col   gap-2 mb-2'>
                    <div className='text-xs text-justify'>
                        {project?.desc}
                    </div>

                    <div className='flex gap-2'>
                        {project?.techStack.map((item: any, index: number) =>
                            <div key={index} style={{ color: 'gray' }} className='hover:bg-black hover:font-white  text-center border rounded-full px-3 text-xs font-medium leading-5  '  >
                                {item}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* card */}
            <div className='grid grid-cols-3 gap-3 my-2'>
                {dataProject.map((item: any, index: number) =>
                    <ContainerComponentProps onClick={() => handleSelect(item)} key={index} className='py-2 px-2 cursor-pointer hover:scale-105 rounded'  >
                        {/* <Image/> */}
                        <div className='border-b-2'>
                            {item.name}
                        </div>
                        <div className='text-ellipsis overflow-hidden  text-xs text-justify h-44 '>
                            {item.desc.length > 150 ? truncated(item.desc) : item.desc}
                        </div>
                    </ContainerComponentProps>
                )}
            </div>

        </>
    )
}

export default Projects