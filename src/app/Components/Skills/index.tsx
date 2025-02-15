'use client';
import Image from 'next/image'
import React from 'react'

function SkillSection() {

    const skillsIcons = ['Bootstrap.svg', 'Node.svg', 'Python.svg', 'Swift.svg', 'Flutter.svg', 'Bootstrap.svg', 'Node.svg', 'Python.svg', 'Swift.svg', 'Flutter.svg'];

    return (
        <div className='relative bg-white flex flex-col justify-center items-center p-14'>
            <div className='py-1 px-2 bg-[#F1F5FC] w-fit rounded-3xl mb-5'>
                <p className='text-[#5454C5] text-xs'>My Projects</p>
            </div>
            <div className="mb-5">
                <h1 className='text-5xl font-bold uppercase text-black'>Skills & Tech Stack</h1>
            </div>
            <div className="mb-16">
                <p className='text-sm text-[#A3A3A3]'>Harnessing the latest technologies to build efficient and scalable solutions.</p>
            </div>
            <div className="flex gap-8">
                {
                    skillsIcons.map((icon, index) => (
                        <div key={index} className="flex justify-center items-center px-5 py-6 border-2 border-[#B4C1ED] rounded-2xl bg-[#F1F5FC">
                            <Image src={`/Logo/${icon}`} alt="Logo" width={105} height={86} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default SkillSection;