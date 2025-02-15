'use client';
import Image from 'next/image';
import React from 'react'

function TestimoniSection() {
    return (
        <div className='py-14 bg-white'>
            <div className='relative bg-white flex flex-col justify-center items-center'>
                <div className='py-1 px-2 bg-[#F1F5FC] w-fit rounded-3xl mb-5'>
                    <p className='text-[#5454C5] text-xs'>My Projects</p>
                </div>
                <div className="mb-5">
                    <h1 className='text-5xl font-bold uppercase text-black'> Trusted by Clients, Proven by Results</h1>
                </div>
                <div className="mb-8">
                    <p className='text-sm text-[#A3A3A3] w-96 text-center'>Here’s what clients say about my commitment and creativity.</p>
                </div>
            </div>
            <div className='flex mt-8 bg-white justify-center gap-6'>
                <div className='flex flex-col justify-center items-center px-5 py-6 border-2 border-[#F1F5FC] rounded-2xl w-4/5 bg-[#F1F5FC]'>
                    <div className="text-4xl text-center mb-5 text-black">“Ahmad’s expertise in full-stack development exceeded our expectations. His attention to detail and problem-solving skills made a huge impact on our project!”</div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src="/Testimony.png" alt="Logo" width={64} height={64} className='rounded-full mb-4' />
                        <div className="text-lg text-black">Ahmad</div>
                        <div className="text-xs text-[#A3A3A3]">CEO, XYZ Company</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TestimoniSection;