'use client';
import Image from 'next/image';
import React from 'react'

function ProjectSection() {
    return (
        <div className='py-14 bg-white'>
            <div className='relative bg-white flex flex-col justify-center items-center'>
                <div className='py-1 px-2 bg-[#F1F5FC] w-fit rounded-3xl mb-5'>
                    <p className='text-[#5454C5] text-xs'>My Projects</p>
                </div>
                <div className="mb-5">
                    <h1 className='text-5xl font-bold uppercase text-black'>Highlighting My projects Journey</h1>
                </div>
                <div className="mb-8">
                    <p className='text-sm text-[#A3A3A3] w-96 text-center'>A showcase of my favorite projects, where creativity and strategy meet to produce stunning results.</p>
                </div>
                <div className="flex justify-center items-center px-8 py-4 bg-[#5454C5] drop-shadow-xs hover:drop-shadow-sm hover:bg-[#44448F] cursor-pointer rounded-3xl text-white">
                    <a href="">SEE MORE</a>
                </div>
            </div>
            <div className='flex mt-8 bg-white justify-center gap-6'>
                <div className='min-w-min-[595px]'>
                    <Image src="/Projects.png" alt="Project Image" width={595} height={500} />
                    <div className='mt-5'>
                        <h1 className='text-4xl font-bold text-black'>Pet Care Website</h1>
                        <div className="flex gap-2 mt-3">
                            {['HTML', 'CSS', 'JavaScript'].map((tech, index) => (
                                <div key={index} className="text-[#7E94AD] px-5 py-2 border-2 border-[#7E94AD] rounded-3xl">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectSection;