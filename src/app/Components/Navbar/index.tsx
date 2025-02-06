'use client';
import { MobileNav } from '@material-tailwind/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function NavbarComponent() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
        if (window.innerWidth >= 960) {
            setOpenNav(false);
        }
        })
    }, [])

    return (
        <>
            <nav className="sticky top-0 z-10 flex items-center justify-between flex-wrap px-6 py-5 md:px-10 md:py-7 lg:px-20 lg:py-9 bg-transparent">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Image src="/Logo.svg" alt="Logo" width={33} height={37} />
                </div>
                <div className="block lg:hidden" onClick={() => setOpenNav(!openNav)}>
                    {
                        !openNav ? (
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                        ) : (
                        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-3 w-3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        </button>
                        )
                    }
                </div>

                <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-base flex justify-center lg:flex-grow">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold hover:text-white hover:font-semibold lg:mr-20 mr-24">
                        Home
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white hover:font-semibold lg:mr-20 mr-24">
                        About
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white hover:font-semibold lg:mr-20 mr-24">
                        Skill & Tech
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white hover:font-semibold lg:mr-20 mr-24">
                        Projects
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white hover:font-semibold lg:mr-20 mr-24">
                        Testimony
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="inline-block text-base px-0 py-2 leading-none text-white border-white mt-4 hover:text-white hover:font-semibold lg:mt-0 underline">Get In Touch</a>
                    </div>
                </div>

                <MobileNav open={openNav} className="flex flex-col items-center">
                    <div className="w-full flex-grow">
                        <div className="text-base flex flex-col items-center">
                        <a href="#responsive-header" className="block mt-4 lg:inline-block font-semibold hover:text-white hover:font-semibold">
                            Home
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block text-gray-500 hover:text-white hover:font-semibold">
                            About
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block text-gray-500 hover:text-white hover:font-semibold">
                            Skill & Tech
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block text-gray-500 hover:text-white hover:font-semibold">
                            Projects
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block text-gray-500 hover:text-white hover:font-semibold">
                            Testimony
                        </a>
                        </div>
                        <div className="flex items-center justify-center"> 
                        <a href="#" className="block text-base leading-none text-white border-white mt-4 hover:text-white hover:font-semibold hover:border-b-2">Get In Touch</a>
                        </div>
                    </div>
                </MobileNav>
            </nav>
        </>
    )
};

export default NavbarComponent;