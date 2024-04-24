import React from 'react'
import { SiFramer } from "react-icons/si";
import { FaWebflow } from "react-icons/fa6";
import { CgFigma } from "react-icons/cg";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hero() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='flex flex-col items-center gap-4 p-6 text-center bg-white dark:bg-gray-900' data-aos="fade-right" >
            <p className="p-2 text-sm font-normal text-black bg-purple-100 border-2 rounded-full md:w-2/12">Products for Designers & Devs</p>

            <h1 className="mb-4 text-4xl font-normal leading-none tracking-tight text-gray-900 md:w-8/12 md:text-5xl lg:text-6xl dark:text-white">The creators library of
                components & templates</h1>
            <p className="mb-6 text-sm font-normal text-gray-500 md:w-8/12 lg:text-md sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

            <form class="max-w-md w-full mx-auto">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Search components (eg. Footer, Header)" required />
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
                </div>
            </form>

            <div className='flex flex-row justify-center gap-4'>
            <p className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-normal bg-purple-100 border-2 rounded-full dark:text-black " > <SiFramer />Framer </p>
            <p className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-normal bg-purple-100 border-2 rounded-full dark:text-black " > <FaWebflow />Webflow </p>
            <p className="flex flex-row items-center gap-2 px-4 py-2 text-sm font-normal bg-purple-100 border-2 rounded-full dark:text-black " ><CgFigma /> Figma </p>
            </div>

            <div className='grid justify-center grid-cols-3 gap-4 text-center md:grid-cols-4 md:grid-rows-3 ' >
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>Components</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>Templates</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>Wireframes</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>Headers</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>UI Elements & Cards</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>Club Access</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>Footers</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>Pricing</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg md:col-start-2 dark:text-gray-300'>Chrome Extension</p>
            <p className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg dark:text-gray-300'>ChalkUI</p>
            </div>

        </div>

    )
}
