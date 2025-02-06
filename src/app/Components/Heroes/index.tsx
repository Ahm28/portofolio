import React from 'react'

function Heroes() {
  return (
    <div className="bg-[url('/Globe.svg')] bg-no-repeat bg-bottom h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="">
          <h1 color='white' className="uppercase w-[965px] font-bold text-8xl text-center">brings your <span className='text-[#7C82D8]'>briliant</span> idea into reality</h1>
        </div>
        <p className='mt-6 text-base'>Building seamless web experiences with clean code & modern technology.</p>

        <div className="flex mt-9 gap-4">
          <div className="flex justify-center items-center px-8 py-4 bg-[#5454C5] rounded-3xl text-white">
            <a href="">SEE MY WORK</a>
          </div>
          <div className="flex justify-center items-center px-8 py-4 border-[#5454C5] border-solid border-2 rounded-3xl text-white">
            <a href="">LET&apos;S TALK</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heroes