import Image from 'next/image'
import React from 'react'

function Heroes() {
  return (
    <div className="bg-[url('/Globe.svg')] bg-no-repeat bg-bottom">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="">
          <div className="absolute hidden top-[40%] left-[15%] lg:top-1/3 lg:left-[10%] xl:top-1/3 xl:left-1/4 -rotate-45 md:flex justify-center items-center p-2 border-2 border-[#9A9A9A] rounded-lg">
            <Image src="/Logo/Bootstrap.svg" alt="Logo" width={33} height={33} />
          </div>
          <div className="absolute hidden top-[35%] right-[18%] lg:top-1/4 xl:top-[35%] xl:right-1/4 rotate-12 md:flex justify-center items-center p-2 border-2 border-[#9A9A9A] rounded-lg">
            <Image src="/Logo/Node.svg" alt="Logo" width={33} height={33} />
          </div>
          <div className="absolute hidden bottom-[38%] right-[15%] lg:bottom-1/3 xl:bottom-1/3 xl:right-1/4 -rotate-45 md:flex justify-center items-center p-2 border-2 border-[#9A9A9A] rounded-lg">
            <Image src="/Logo/Python.svg" alt="Logo" width={33} height={33} />
          </div>
          <div className="absolute hidden bottom-[38%] left-[26%] lg:bottom-1/3 lg:left-[18%] xl:bottom-1/3 xl:left-[30%] rotate-6 md:flex justify-center items-center p-2 border-2 border-[#9A9A9A] rounded-lg">
            <Image src="/Logo/Swift.svg" alt="Logo" width={33} height={33} />
          </div>
          <h1 color='white' className="uppercase w-[300px] font-bold text-5xl text-center md:w-[500px] lg:w-[965px] lg:text-8xl text-white">brings your <span className='text-[#7C82D8]'>briliant</span> idea into reality</h1>
        </div>

        <p className='mt-6 text-center text-base'>Building seamless web experiences with clean code & modern technology.</p>

        <div className="flex flex-col md:flex-row mt-9 gap-4">
          <div className="flex justify-center items-center px-8 py-4 bg-[#5845FB] drop-shadow-xs hover:drop-shadow-sm hover:bg-[#5454C5] cursor-pointer rounded-3xl text-white">
            <a href="">SEE MY WORK</a>
          </div>
          <div className="flex justify-center items-center px-8 py-4 border-[#5454C5] drop-shadow-xs hover:drop-shadow-sm hover:bg-[#44448F] border-solid border-2 rounded-3xl text-white">
            <a href="">LET&apos;S TALK</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroes