'use client';
import Image from 'next/image';
import React from 'react'

function FooterComponent() {
    return (
        <div className='relative bg-[#010008] overflow-hidden'>
            <div className="relative">
                <div className="absolute flex left-[-60%] top-[-70%] items-center justify-center w-full blur-3xl opacity-25">
                    <div className="backdrop-blur-[20rem] z-0"></div>
                    <div className="bg-[#7C82D8] w-4/5 h-[394px] blur-3xl rounded-[50%] -z-10"></div>
                </div>
                <div className="absolute flex left-[-75%] top-[-30%] items-center justify-center blur-3xl w-full opacity-25">
                    <div className="backdrop-blur-[20rem] z-0"></div>
                    <div className="bg-[#5432D3] w-4/5 h-[394px] rounded-[50%] blur-3xl -z-10"></div>
                </div>

                <div className="relative bg-[url('/Footer.svg')] h-96 bg-no-repeat bg-cover">
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
            
            <div className="px-4 pt-20 pb-4">
                <div className="p-20 flex gap-12 items-center justify-between">
                    <div className="flex flex-col">
                        <div className="mb-8">
                            <Image src="/Logo.svg" alt="Logo" width={33} height={33} />
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className='text-md text-[#A3A3A3]'>Get In Touch</p>
                            <div className="relative flex w-fit gap-2">
                                <input
                                    type="email"
                                    placeholder={'Your Email'}
                                    className="!w-96 !px-3 !py-2 !text-sm !bg-[#010008] !border-2 !border-[#444444] !rounded-3xl !placeholder:text-[#A3A3A3] !placeholder:text-sm"
                                />
                                <div className='flex justify-center items-center px-4 py-3 border-[#5845FB] bg-[#5845FB] drop-shadow-xs hover:drop-shadow-sm hover:border-[#5454C5] hover:bg-[#5454C5] border-solid border-2 rounded-3xl text-white align-middle select-none transition-all disabled:opacity-50 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:shadow-none disabled:pointer-events-none shadow-gray-900/10 hover:shadow-gray-900/20 '>
                                    <a className='text-sm'>LET&apos;S TALK</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div className="flex flex-col">
                            <p className='text-md text-white'>Quick Links</p>
                            <div className="flex flex-col gap-4 mt-4">
                                <a href="" className='text-sm text-[#A3A3A3]'>Home</a>
                                <a href="" className='text-sm text-[#A3A3A3]'>About</a>
                                <a href="" className='text-sm text-[#A3A3A3]'>Projects</a>
                                <a href="" className='text-sm text-[#A3A3A3]'>Contact</a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-md text-white'>Social Media</p>
                            <div className="flex flex-col gap-4 mt-4">
                                <a href="" className='text-sm text-[#A3A3A3]'>Instagram</a>
                                <a href="" className='text-sm text-[#A3A3A3]'>Linkedin</a>
                                <a href="" className='text-sm text-[#A3A3A3]'>Github</a>
                                <a href="" className='text-sm text-[#A3A3A3]'>Twitter</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='px-20 flex gap-12 items-center justify-center'>
                    <p className='text-sm text-[#A3A3A3]'>Copyright © {new Date().getFullYear()} Ahmad. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
};

export default FooterComponent;