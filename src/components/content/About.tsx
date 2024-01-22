import { noticia } from '@components/app/font'
import Image from 'next/image'
import React, { FC } from 'react'
import Education from './Education'
import pixelFace from '../../../public/images/PPPixelate.jpeg'
// import PP from '../../../public/project/mov

type Props = {
  selected?: any;
  mouse?: boolean;
}

const About: FC<Props> = ({ selected, mouse }) => {
  // console.log(mouse)
  return (
    <>
      <div className={`text-justify ease-in-out transition duration-500`}>
        <Image
          className={`${mouse || selected === "About" ? "" : "blur-sm"} rounded mix-blend-multiply centered-image pr-2 object-contain float-left ease-in-out transition duration-500 `}
          alt=''
          src={"/images/foto.jpg"}
          height={200}
          width={125}
          style={{ height: '150px', width: "150px" }}
          loading='lazy'
        />
        {/*  eslint-disable-next-line react/no-unescaped-entities */}
        <p className={`${selected ? "" : ""}`}>Hello there! I'm a passionate Frontend Engineer since 2021, transitioning from a non-IT background.<br /> My journey into the world of web development has been both challenging and rewarding, allowing me to bring a fresh perspective to the codebase.</p>

        <p className='my-2'>
          {`  My coding journey began with a curiosity-driven approach, and I've since evolved into a detail-oriented developer who appreciates the power of clean and efficient code.`}
        </p>

        <p className='mb-2'>
          I believe in the power of collaboration and continuous learning, traits that have fueled my growth as a Frontend Engineer.
        </p>

        <p>
          I am eager to contribute my skills to a forward-thinking team, pushing the boundaries of web development and creating user experiences that leave a lasting impression.
        </p>

      </div >
      <Education />
    </>

  )
}

export default About