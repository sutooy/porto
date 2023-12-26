'use client'
import Container from '@components/components/ContainerComponentProps.components'
import MarqueeLogo from '@components/components/logo/MarqueeLogo'
import About from '@components/components/content/About'
import Experience from '@components/components/content/Experience'
import Projects from '@components/components/content/Projects'
import { useState } from 'react'
import Contact from '@components/components/content/Contact'
// import { pacifico } from './layout'
import { inter, pacifico, vidaloka } from '@components/app/font'
import Image from 'next/image'

export default function Home() {
    const [content, setContent] = useState("About")
    const handleContent = (content: string) => {
        setContent(content)
    }
    const renderContent = () => {
        switch (content) {
            case "About":
                return <About />

            case "Experience":
                return <Experience />

            case "Projects":
                return <Projects />

            case "Contact":
                return <Contact />

            default: <></>
        }
    }

    return (
        <main className="p-3 md:p-10 h-screen overflow-auto " style={{ background: '#ededed' }} >
            <div className='grid md:gap-4 md:h-full grid-cols-1 md:grid-cols-3 '>
                <Container className='h-full overflow-auto flex flex-col justify-between'>
                    <div className=''>
                        <Container className='pb-3 m-4'>
                            <div className=' flex flex-col md:flex-row gap-3 rounded p-2'>
                                {/* <Image
                  className='rounded-xl'
                  width={100} height={100}
                  src="/favicon.ico"
                  alt="Image"
                  style={{
                    width: '100%', // Make the image fill the container
                    height: 'auto',
                  }}
                /> */}
                                <div className=' '>
                                    <div className='  flex mb-0 w-4/5'>
                                        {["Aulia", "Sutowijoyo"].map((item: any, index: number) =>
                                            item.split("").map((item2: string, index2: number) => (
                                                <div className={` ${inter.className} font-bold text-2xl lg:text-4xl lg:hover:text-3xl textColor cursor-default`} key={index2}>
                                                    <div className='colorChange'>
                                                        {item2}
                                                    </div>
                                                </div>
                                            )
                                            ))}
                                    </div>
                                    Front-End Developer
                                </div>
                            </div>
                            <MarqueeLogo />
                        </Container>
                    </div>

                    <div className='pb-5 hidden md:block'>
                        <div className='flex justify-center flex-wrap gap-2 my-3 '>
                            {["About", "Experience", "Projects", "Contact"].map((item: any, index: number) =>
                                <Container
                                    onClick={() => {
                                        handleContent(item)
                                    }}
                                    key={index}
                                    className='p-5 cursor-pointer font-bold text-sm hover:bg-white  '>
                                    {item}
                                </Container>
                            )}
                        </div>
                    </div>
                </Container>

                <Container className='p-6 rounded col-span-2 h-full overflow-auto'>
                    {renderContent()}
                </Container>
            </div>


        </main>
    )
}
