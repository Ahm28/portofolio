'use client';
import React from 'react'

function FooterComponent() {
    return (
        <div className='relative bg-[#010008] overflow-hidden'>
            <div className="absolute flex left-[-60%] top-[-70%] items-center justify-center w-full blur-3xl opacity-25">
                <div className="backdrop-blur-[20rem] z-0"></div>
                <div className="bg-[#7C82D8] w-4/5 h-[394px] blur-3xl rounded-[50%] -z-10"></div>
            </div>
            <div className="absolute flex left-[-75%] top-[-30%] items-center justify-center blur-3xl w-full opacity-25">
                <div className="backdrop-blur-[20rem] z-0"></div>
                <div className="bg-[#5432D3] w-4/5 h-[394px] rounded-[50%] blur-3xl -z-10"></div>
            </div>

            <div className="relative bg-[url('/Footer.svg')] h-96 bg-no-repeat bg-cover">
                <div className="absolute"></div>
                <div className="absolute w-full flex justify-around items-center bottom-14">
                    <div className="w-[887px]">
                        <h1 className='text-5xl font-bold uppercase text-white mb-4'>make your digital dream come true with me</h1>
                        <p className='text-sm text-[#A3A3A3]'>I’m here to help you create captivating designs. If you’re ready to bring your vision to life, let’s connect.</p>
                    </div>
                    <div className="relative flex w-36 h-36 items-center justify-center rounded-full bg-white text-black">
                        {/* <p className="absolute w-full h-full flex items-center justify-center text-[12px] tracking-wide rotate-45 font-bold text-black">
                            * LET’S GET STARTED * LET’S GET STARTED * LET’S GET STARTED *
                        </p> */}
                        <svg className="absolute w-full h-full" viewBox="0 0 120 120">
                            <defs>
                                <path id="circlePath" d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                            </defs>
                            <text className="text-[9px] font-bold">
                                <textPath href="#circlePath" startOffset="50%" text-anchor="middle">
                                    * LET’S GET STARTED * LET’S GET STARTED * LET’S GET STARTED
                                </textPath>
                            </text>
                        </svg>
                        <span className="-rotate-45 text-7xl font-bold">→</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterComponent;