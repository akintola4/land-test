import React from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Main() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <main className='flex flex-col gap-20 px-10 py-10'>
            <section className='grid grid-cols-2 gap-5 rounded-lg bg-zinc-50 dark:bg-gray-800 sm:px-20 sm:py-10 sm:grid-cols-4 sm:grid-rows-1'  data-aos="fade-right">
                <div class="relative ...">
                    <img src="img/hero-1.svg" alt="" />
                    <div class="absolute text-sm bottom-5 sm:bottom-10 md:left-10 text-center ...">
                        <h4 className=''>Components</h4>
                        <p className=''>Browse 2,000+ Components</p>
                    </div>
                </div>
                <div class="relative ...">
                    <img src="img/hero-2.svg" alt="" />
                    <div class="absolute text-sm bottom-5 sm:bottom-10 md:left-14 text-center ...">
                        <h4 className=''>Wireframes</h4>
                        <p className=''>Browse Chalk™ System</p>
                    </div>
                </div>
                <div class="relative ...">
                    <img src="img/hero-3.svg" alt="" />
                    <div class="absolute text-sm bottom-5 sm:bottom-10 md:left-10 text-center ...">
                        <h4 className=''>Illustrations</h4>
                        <p className=''>Vector based illustrations</p>
                    </div>
                </div>
                <div class="relative ...">
                    <img src="img/hero-4.svg" alt="" />
                    <div class="absolute text-sm bottom-5 sm:bottom-10 md:left-10 text-center ...">
                        <h4 className=''>Boosters</h4>
                        <p className=''>Coded tools and solutions</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-10' data-aos="fade-left">
                <div className='flex flex-row justify-between'>
                    <h4 className='sm:text-2xl dark:text-gray-300 text-bold'>Recent Components</h4>
                    <button className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg cursor-pointer dark:text-gray-300'>Browse all</button>
                </div>

                <section className='grid gap-10 sm:grid-cols-4 sm:grid-rows-2 '>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-5.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Contact Form</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 10, 2023 in Form & Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-8.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Contact Form</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 10, 2023 in Form & Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-7.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Integration</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 9, 2023 in Integrations</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-8.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Integration</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 9, 2023 in Integrationst</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-9.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Header</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 8, 2023 in Form & Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-10.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Header</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 8, 2023 in Form & Contact</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-11.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Features</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 11, 2023 in Form & Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-12.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Features</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 11, 2023 in Form & Contact</p>
                        </div>
                    </div>

                </section>
            </section>
            <section className='' data-aos="zoom-in-up">
                <div class="sm:relative ">
                    <img src="img/hero-13.svg" className='hidden w-full sm:block h-12/12 sm:p-20' alt="" />
                    <div class="sm:absolute text-sm bottom-5 items-center flex flex-col sm:bottom-32 gap-2 sm:left-60 text-center ...">
                        <img src="img/logo-hero.svg" alt="" />
                        <p className='font-bold dark:text-gray-700 sm:text-2xl sm:w-8/12'>The Designer & Developers
                            Foundation UI System. Built with Client-First</p>
                        <button className='flex flex-row items-center gap-2 px-2 py-1 text-lg font-normal text-center text-white bg-purple-500 border-2 rounded-lg cursor-pointer dark:text-gray-300'> <FaWandMagicSparkles />Browse Components</button>

                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-10' data-aos="fade-right">
                <div className='flex flex-row justify-between'>
                    <h4 className='sm:text-2xl dark:text-gray-300 text-bold'>Trending Components</h4>
                    <button className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg cursor-pointer dark:text-gray-300'>Browse all</button>
                </div>

                <section className='grid gap-10 sm:grid-cols-4 sm:grid-rows-1 '>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-5.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Contact Form</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 10, 2023 in Form & Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-8.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Contact Form</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 10, 2023 in Form & Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-7.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Integration</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 9, 2023 in Integrations</p>
                        </div>
                    </div>
                    <div className='flex flex-col p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-8.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Integration</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>Pro</p>
                            </div>
                            <p className='dark:text-gray-300'>Added Nov 9, 2023 in Integrationst</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className='flex flex-col gap-10' data-aos="fade-left">
                <div className='flex flex-row justify-between'>
                    <h4 className='sm:text-2xl dark:text-gray-300 text-bold'>Premium Templates </h4>
                    <button className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg cursor-pointer dark:text-gray-300'>Browse all</button>
                </div>

                <section className='grid gap-10 sm:grid-cols-4 sm:grid-rows-1 '>
                    <div className='flex flex-col gap-4 p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-14.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Mercury</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>$49.00</p>
                            </div>
                            <p className='dark:text-gray-300'>Figma, Framer</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-15.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Contact Form</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>$49.00</p>
                            </div>
                            <p className='dark:text-gray-300'>Figma, Framer</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-16.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Mercury</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>$49.00</p>
                            </div>
                            <p className='dark:text-gray-300'>Figma, Framer</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-17.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Integration</h4>
                                <p className='gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full dark:text-gray-600'>$49.00</p>
                            </div>
                            <p className='dark:text-gray-300'>Figma, Framert</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className='flex flex-col gap-10' data-aos="fade-right">
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-6/12 sm:w-full'>
                        <h4 className='sm:text-2xl dark:text-gray-300 text-bold'>Premium Templates </h4>
                        <div className='flex flex-col gap-4 sm:flex-row'>
                            <h4 className='font-semibold dark:text-gray-300'>All SVG illustrations included with</h4>
                            <p className='w-4/12 gap-2 px-2 py-1 text-sm font-normal text-center text-white bg-purple-300 rounded-full sm:w-1/12 dark:text-gray-600'>Pro</p>
                        </div>
                    </div>

                    <button className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg cursor-pointer dark:text-gray-300'>Browse all</button>
                </div>

                <section className='grid grid-cols-2 gap-10 sm:grid-cols-4 sm:grid-rows-1 '>
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-19.svg" src="img/hero-18.svg" alt="" />
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-19.svg" alt="" />
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-20.svg" alt="" />
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-21.svg" alt="" />
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-22.svg" alt="" />
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-23.svg" alt="" />
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-24.svg" alt="" />
                    <img className='rounded-lg cursor-pointer hover:shadow-sm' src="img/hero-25.svg" alt="" />
                </section>
            </section>
            <section className='' data-aos="zoom-in-up">
                <div class="sm:relative ">
                    <img src="img/hero-26.svg" className='hidden w-full sm:block h-12/12 sm:p-20' alt="" />
                    <div class="sm:absolute text-sm bottom-5 items-center flex flex-col sm:top-60 gap-2 sm:left-10 text-center ...">
                        <img src="img/hero-27.svg" alt="" />
                        <p className='font-semobold dark:text-gray-700 sm:text-2xl sm:w-8/12'>Unlock the world's
                            largest design library</p>
                        <p className="mb-6 text-sm font-normal text-gray-500 sm:w-10/12 lg:text-md sm:px-16 xl:px-48 dark:text-gray-400">Flowbase is the world's largest premium library of Webflow, Figma & Framer
                            components and tools. Build better, faster with Flowbase.</p>
                        <button className='flex flex-row items-center gap-2 px-2 py-1 text-lg font-normal text-center text-white bg-purple-500 border-2 rounded-lg cursor-pointer dark:text-gray-300'> Learn more</button>

                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-10' data-aos="fade-right">
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-6/12 sm:w-full'>
                        <h4 className='sm:text-2xl dark:text-gray-300 text-bold'>Flowbase Blog </h4>
                        <div className='flex flex-col gap-4 sm:flex-row'>
                            <h4 className='text-sm font-semibold text-gray-400 dark:text-gray-300'>Discover articles and tutorials to help you build better</h4>
                        </div>
                    </div>

                    <button className='gap-2 px-2 py-1 text-sm font-normal text-center border-2 rounded-lg cursor-pointer sm:w-2/12 dark:text-gray-300'>Browse all</button>
                </div>

                <section className='grid gap-10 sm:grid-cols-3 sm:grid-rows-1 '>
                    <div className='flex flex-col gap-2 p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-28.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>Top 20 UI Inspiration Sites
                                    (2023)</h4>
                            </div>
                            <p className='text-gray-500 dark:text-gray-300'>We've collated the top 20 UI inspiration sites, all with
                                links in one handy spot! Find your inspiration for your
                                next project.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-29.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>How to add a countdown timer
                                    to Framer</h4>
                            </div>
                            <p className='text-gray-500 dark:text-gray-300'>Learn how to add a beautiful countdown to your
                                Framer project. Add it to your project in seconds</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-2 rounded-lg cursor-pointer hover:shadow-lg'>
                        <img src="img/hero-30.svg" alt="" />
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-4'>
                                <h4 className='font-semibold dark:text-gray-300'>How to add an Instagram Feed
                                    to Framer (2023)</h4>
                            </div>
                            <p className='text-gray-500 dark:text-gray-300'>In this article we will spotlight the best way to build a
                                beautiful Instagram feed in your Framer sites. Built
                                specifically for Framer and 100% free for small and
                                personal sites.</p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}
