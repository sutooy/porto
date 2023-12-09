import Image from 'next/image'
import { LOGO_LIST } from '../component/logo/logoList'
import Marquee from 'react-fast-marquee'
import TiltImage from '@components/component/logo/TiltImage';
import './globals.css';

export default function Home() {
  // console.log("tes", LOGO_LIST)
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className='items-center flex flex-col md:flex-row gap-3'>
        {/* <Image className='rounded-full' src="/PP.PNG" alt='PP' width={250} height="50" /> */}
        <TiltImage />
        <div className='text-center'>
          <div className='font-playfair flex  mb-0  px-2'>
            {["Aulia", "Sutowijoyo"].map((item: any, index: number) =>
              item.split("").map((item2: string, index2: number) => (
                <>
                  <div className='text-6xl hover:text-5xl' key={index2}>{item2}</div>
                </>
              )
              ))}
          </div>
          <div>
            Curiosity takes me this far and still going
          </div>
        </div>
      </div>
      <div className=' '>
        tes tes tesaaa
      </div>
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <Marquee className='gap-4'>
        tes marqueeeee
        {LOGO_LIST?.map((item: any, index: number) =>
          <div key={index} className='gap-2 ml-2'>
            <Image
              src={item?.url}
              alt={item?.name}
              // className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
        )}
      </Marquee>

    </main>
  )
}
