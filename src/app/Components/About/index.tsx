'use client';
import Image from 'next/image'
import React from 'react'

function AboutSection() {
    return (
        <div className='relative'>
            <div className="absolute flex bottom-[-10%] -left-[40%] items-center justify-center w-full blur-[200px] opacity-25">
                <div className="backdrop-blur-[20rem] z-0"></div>
                <div className="bg-[#5B8FB9] w-4/5 h-[394px] rounded-[50%] blur-3xl -z-10"></div>
            </div>
            <div className="p-20 grid grid-cols-2 gap-12 items-center justify-center">
                <div className='w-full px-5'>
                    <div className='py-1 px-2 bg-[#F1F5FC] w-fit rounded-3xl mb-5'>
                        <p className='text-[#5454C5] text-xs'>About Me</p>
                    </div>
                    <div className="mb-5">
                        <h1 className='text-5xl font-bold'>DISCOVER MY JOUR & MY EXPERTISE</h1>
                    </div>
                    <div className="mb-16">
                        <p className='text-base'>Hey there! I’m Ahmad, a full-stack developer who loves creating awesome web apps. I know my way around both front-end and back-end tech, so I can whip up high-performance solutions that fit what businesses need. Whether it’s building cool APIs or designing user-friendly interfaces, I’m all about turning ideas into reality.</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className="text-4xl mb-4">
                                500+
                            </div>
                            <div className="text-base">
                                Happy CLients
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">
                                360+
                            </div>
                            <div className="text-base">
                                Done Projects
                            </div>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">
                                200+
                            </div>
                            <div className="text-base">
                                Satisfied Customers
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex justify-center py-2 px-1 w-full rounded-3xl'>
                        <Image src="/image.png" alt="about" width={580} height={557} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;