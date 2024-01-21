'use client'
import Container from '@components/components/ContainerComponentProps.components'
import MarqueeLogo from '@components/components/logo/MarqueeLogo'
import About from '@components/components/content/About'
import Experience from '@components/components/content/Experience'
import Projects from '@components/components/content/Projects'
import { useState } from 'react'
import Contact from '@components/components/content/Contact'
import { playfair, } from '@components/app/font'
import Image from 'next/image'
import PP from '../../../public/images/PP.png'
import Header from './components/Header'
import code1 from "../../../public/images/code1.gif"
import code2 from "../../../public/images/code2.webp"
import code3 from "../../../public/images/code3.webp"
import code4 from "../../../public/images/code4.webp"
import pixelFace from '../../../public/images/PPPixelate.jpeg'


export default function V2() {
    const [content, setContent] = useState("About")
    const handleContent = (content: string) => {
        setContent(content)
    }
    const [isHovered, setIsHovered] = useState(false);

    const banner = `${playfair.className} border-black border-b-2 mb-1 text-center text-4xl font-bold`

    const renderContent = () => {
        switch (content) {
            case "About":
                return <  >
                    <div className={`${banner}`}>
                        {content}
                    </div>
                    <About selected={content} mouse={isHovered} />
                </>

            case "Experience":
                return <>
                    <div className={`${banner}`}>
                        {content}
                    </div>
                    <Experience />
                </>

            case "Projects":
                return <>
                    <div className={`${banner}`}>
                        {content}
                    </div>
                    <Projects />
                </>

            case "Contact":
                return <>
                    <div className={`${banner}`}>
                        {content}
                    </div>
                    <Contact />
                </>

            default: <></>
        }
    }
    const readMore = <div className='pl-2 absolute w-full bottom-0 right-2  text-1xl font-bold bg-greyish  text-right'>
        read more...
    </div>
    return (
        <main className="px-3 md:px-10 overflow-hidden bg-greyish "
            style={{ maxHeight: '100vh', minHeight: "100vh" }}
        >
            <div className='mb-2 '>
                <Header />
            </div>

            <div style={{ maxHeight: '80vh' }} className='grid md:gap-4  grid-cols-1 md:grid-cols-4  '>
                <div style={{ height: '80vh' }} className=' lg:flex flex-col justify-between hidden'>
                    <Container
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ height: '50%', }} className="bg-greyish p-3 overflow-hidden rounded grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
                        onClick={() => {
                            handleContent("About")
                        }}>
                        <div className={`${playfair.className} text-2xl font-bold`}>
                            About
                        </div>
                        <div className=" text-xs text-justify text-ellipsis ">
                            <About selected={content} mouse={isHovered} />
                            {readMore}
                        </div>
                    </Container>

                    <Container style={{ maxHeight: '47.5%' }} className=" p-3 overflow-hidden rounded grayscale hover:grayscale-0 h-full "   >
                        <div className={`${playfair.className} text-2xl font-bold`}>
                            Contact :
                        </div>
                        <Contact />
                    </Container>

                </div>

                <Container style={{ height: '80vh' }} className='px-6 rounded lg:col-span-2 col-span-4 overflow-auto h-full'>
                    {/* {renderContent()} */}
                    {renderContent()}
                </Container>

                <div style={{ maxHeight: '80vh' }} className='lg:flex flex-col justify-between hidden '>
                    <Container style={{ height: '40vh' }} className=" p-3  overflow-hidden rounded grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
                        onClick={() => {
                            handleContent("Experience")
                        }}>
                        <div className={`${playfair.className} text-2xl font-bold`}>
                            Experience
                        </div>

                        <div className=" text-xs text-justify text-ellipsis ">
                            <div className='flex  '>
                                <Image
                                    src={code4}
                                    alt=''
                                    width={100}
                                    height={100}
                                    style={{ width: "100%" }}
                                    loading='lazy'
                                />
                            </div>
                            As a Frontend Engineer with a non-IT background, Ive successfully navigated the dynamic landscape of web development, contributing my skills in React.js, HTML5, and CSS3 to create engaging and user-centric interfaces. Now, let me walk you through my journey:
                            <Experience />
                            {readMore}

                        </div>
                    </Container>

                    <Container style={{ height: '30vh' }} className="mt-3 mb-3 p-3 overflow-hidden rounded grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
                        onClick={() => {
                            handleContent("Projects")
                        }}>
                        <div className={`${playfair.className} text-2xl font-bold`}>
                            Project
                        </div>
                        <div className='flex '>
                            <Image
                                src={code1}
                                alt=''
                                width={100}
                                height={100}
                                style={{ width: "100%" }}
                                loading='lazy'
                            />
                        </div>
                        <div className=" text-xs text-justify text-ellipsis ">
                            {/* <About /> */}
                        </div>
                    </Container>

                    <Container className='flex py-2 rounded'>
                        <MarqueeLogo />
                    </Container>

                    {/* 
                    <div className='pb-5 hidden md:block'>
                        <div className='flex justify-center flex-wrap gap-2 my-3 '>
                            {["About", "Experience", "Projects", "Contact"].map((item: any, index: number) =>
                                <Container
                                    onClick={() => {
                                        handleContent(item)
                                    }}
                                    key={index}
                                    className='p-5 cursor-pointer font-bold text-xs hover:bg-white  '>
                                    {item}
                                </Container>
                            )}
                        </div>
                    </div> */}
                </div>

                {/* <div className='rounded overflow-auto h-full flex flex-col gap-3'>
                    <Container className="  max-h-80 overflow-hidden rounded grayscale hover:grayscale-0 hover:scale-105 cursor-pointer">
                        <div className={`${playfair.className} text-2xl font-bold`}>
                            About
                        </div>
                        <Image
                            className=' mix-blend-multiply centered-image pr-2'
                            alt=''
                            src={"/PP.png"}
                            height={100}
                            width={"100"}
                        />
                        <p className=" text-xs  text-justify text-ellipsis ">
                            <About />
                        </p>
                    </Container>

                    <Container className=" p-3 max-h-60 overflow-hidden rounded grayscale hover:grayscale-0 hover:scale-105 cursor-pointer">
                        <div className={`${playfair.className} text-2xl font-bold`}>
                            About
                        </div>
                        <Image
                            className=' mix-blend-multiply centered-image pr-2'
                            alt=''
                            src={"/PP.png"}
                            height={100}
                            width={"100"}
                        />
                        <p className=" text-xs  text-justify text-ellipsis ">
                            <About />
                        </p>
                    </Container>
                </div> */}
            </ div>
            <div className='w-full flex justify-between gap-2 lg:hidden'>
                {["About", "Experience", "Projects", "Contact"].map((item: string, index: number) =>
                    <Container className='px-2 py-4 my-3 w-full rounded text-center cursor-pointer hover:scale-105' key={index}
                        onClick={() => {
                            handleContent(item)
                        }}>
                        {item}
                    </Container>)}
            </div>
            {/* <div className='mt-2'>
                <MarqueeLogo />
            </div> */}

        </main >
    )
}
