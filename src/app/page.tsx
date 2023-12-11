import Image from 'next/image'
import { LOGO_LIST } from '../component/logo/logoList'
import Marquee from 'react-fast-marquee'
// import TiltImage from '@components/component/logo/TiltImage.component';
import Container from '@components/component/ContainerComponentProps.components'
export default function Home() {
  // console.log("tes", LOGO_LIST)
  return (
    // flex min-h-screen flex-col items-center md:justify-normal justify-between 
    <main className="p-3 md:p-10 h-screen"  >
      <div className='grid md:gap-4 h-full grid-cols-1 md:grid-cols-3 '>
        <div className='h-full overflow-auto'>
          <Container className='p-2 '>
            <div className=' flex flex-col md:flex-row gap-3 rounded p-3'>
              {/* <Image
            className='rounded-xl'
            width={100} height={100}
            src="/PP.png"
            alt="Image"
            style={{
              width: '100%', // Make the image fill the container
              height: 'auto',
            }}
          /> */}
              <div className='  p-2 '>
                <div className='font-vidaloka flex mb-0 w-4/5'>
                  {["Aulia", "Sutowijoyo"].map((item: any, index: number) =>
                    item.split("").map((item2: string, index2: number) => (
                      <>
                        <div className='text-4xl hover:text-3xl' key={index2}>{item2}</div>
                      </>
                    )
                    ))}
                </div>
                Experienced Front-End Developer
              </div>
            </div>

          </Container>

          <div className='flex flex-wrap gap-2 mt-3 overflow-auto'>
            {LOGO_LIST?.map((item: any, index: number) =>
              <Container key={index} className='p-10'>
                <Image
                  src={item?.url}
                  alt={item?.name}
                  // className="dark:invert"
                  width={100}
                  height={25}
                  priority
                  style={{
                    height: '25px', width: 'auto',
                    filter: 'blur(.5px)'
                  }}
                />
              </Container>
            )}
          </div>
          <Container className='py-5'>
            <Marquee className='gap-4 w-full'>
              {LOGO_LIST?.map((item: any, index: number) =>
                <div key={index} className='gap-2 ml-2'>
                  <Image
                    src={item?.url}
                    alt={item?.name}
                    // className="dark:invert"
                    width={100}
                    height={25}
                    priority
                    style={{ height: '30px', width: 'auto' }}
                  />
                </div>
              )}
            </Marquee>
          </Container>
        </div>

        <Container
          className='py-6 rounded  col-span-2 h-full'>
          {/* <Marquee className='gap-4 w-full'>
            {LOGO_LIST?.map((item: any, index: number) =>
              <div key={index} className='gap-2 ml-2'>
                <Image
                  src={item?.url}
                  alt={item?.name}
                  // className="dark:invert"
                  width={100}
                  height={25}
                  priority
                  style={{ height: '25px', width: 'auto' }}
                />
              </div>
            )}
          </Marquee> */}
        </Container>
      </div>


    </main>
  )
}
